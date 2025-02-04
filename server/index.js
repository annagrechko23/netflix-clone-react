const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json())
app.use(cors())

app.use("", require("./routes/movies"))
app.use("/auth", require("./routes/auth"))
app.use("/sub", require("./routes/sub"))


app.listen(8080, () => {
    console.log("Now listening on port 8080")
})