import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import useMovie from "../hooks/useMovie"
import { Link, useNavigate, useParams } from "react-router-dom"
export default function WatchPage() {
    const params = useParams() as { id: string }
    const navigate = useNavigate()
    const { data, loading, error } = useMovie(params.id)
    if (loading) return <p>Loading...</p>
    if (error === "Unauthorized: basic plan") return <div className="flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="text-3xl font-bold ">You need a premium plan to watch this</h1>
        <Link to="/plans/manage" className="mt-2 bg-indigo-400">Manage Plans</Link>
    </div>

    if (error || !data) return <p>{error}</p>;
    const { videoUrl, title } = data
    return (
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-black bg-opacity-80">
                <ArrowLeftIcon className="w-10 text-white cursor-pointer hover:opacity-80 transition" onClick={() => navigate("/browse")} />
                <p className="text-white text-3xl font-bold">
                    <span className="font-light">Watching:</span> {title}
                </p>
            </nav>
            <iframe
                className="h-full w-full"
                src={videoUrl}
                frameBorder="0"
                allowFullScreen
                allow="autoplay"
            ></iframe>
        </div>
    )
}
