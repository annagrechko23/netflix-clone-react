
function HomeBanner() {
    return (
        <div className="h-screen w-screen relative">
            <img className="w-full h-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/US-en-20241104-TRIFECTA-perspective_3f9119c8-336a-434d-aaaa-2deac24bc220_large.jpg" alt="" />
            <div className="bg-opacity-40 bg-black absolute h-full w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white font-bold text-5xl">
                        Unlimited movies, TV shows and more</h1>
                    <p className="text-white text-3xl mt-3">Watch anywhere</p>
                    <p className="text-white text-3xl mt-3">Watch anywhere</p>
                    <div className="mt-8">
                        <a href="/login" className="bg-red-700 mt-8 text-white p-4 px-16 rounded font-semibold"> Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner
