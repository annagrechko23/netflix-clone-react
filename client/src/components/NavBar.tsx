
import { useEffect, useState } from "react"
import netflixLogo from "../assets/Netflix-logo.png"
import { RootState } from "../app/store";
import { useSelector } from "react-redux"
import useAuth from "../hooks/useAuth";


export default function NavBar() {
    const tabs = ["Home", "Series", "Films", "New & Popular", "My List", "Browse by Language"]
    const [showBg, setShowBg] = useState(false);
    const { logout } = useAuth()
    const { user, isLoading } = useSelector(
        (state: RootState) => state.user.value
    );

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 700) {
                setShowBg(true)
            } else {
                setShowBg(false)

            }
        })
    }, [])
    return (
        <nav className="w-full fixed z-40">
            <div className={`px-16 py-6 flex items-center mr-auto  ${showBg && "bg-black bg-opacity-90"}`}>
                <img src={netflixLogo} alt="logo" className="h-16" />
                <div className="flex gap-7 ml-8">
                    {tabs.map(tab => <div key={tab} className="text-white cursor-pointer hover:text-gray-300"><p>{tab}</p></div>)}

                </div>
                {user && !isLoading && (
                    <div className="text-white cursor-pointer hover:text-gray-300 ml-auto"><p onClick={logout}>Logout</p></div>
                )}

            </div>

        </nav>
    )
}