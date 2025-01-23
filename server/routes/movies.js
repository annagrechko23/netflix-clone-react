const router = require("express").Router()

const prisma = require("../db");
const checkAuth = require("../miiddleware")
const fetchSubscription = require("../servises/fetchSubscription")

router.get("/movies/list", checkAuth, async (req, res) => {
    const subscription = await fetchSubscription(req.user.email)

    if (!subscription) {
        return res.status(403).json({
            errors: {
                msg: "Unauthorized: no plan"
            }
        })
    }
    const offset = parseInt(req.query.offset, 10) || 0;
    const count = await prisma.movie.count();
    const movies = await prisma.movie.findMany({
        take: 12,
        skip: offset
    })
    return res.json({ movies, count })
});
router.get("/movie/:id", checkAuth, async (req, res) => {
    const id = req.params.id
    const movie = await prisma.movie.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if (movie.title === "South Park" && subscription.name === "basic plan") {
        return res.status(403).json({
            errors: {
                msg: "Unauthorized: basic plan"
            }
        })
    }
    return res.send(movie)
});

module.exports = router;
