import { CircleUserRound  } from "lucide-react"
import SearchBar from "../SearchBar"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../../lib/supabaseClient"
import ToastMessage from "../toastMessage"


const Header = () => {

    const [isSignedIn, setIsSignedIn] = useState(false)

    const navigate = useNavigate()
    const [navAuthPage, setNavAuthPage] = useState(false)
    const [signOutToast, setSignOutToast] = useState(false)

    const checkUserStatus = async() => {
        const { data : {user}} = await supabase.auth.getUser()
        if (user) {
            setIsSignedIn(true)
        } else {
            setIsSignedIn(false)
        }
    }

    const handleSignOut = async() => {
        await supabase.auth.signOut()
        setIsSignedIn(false)
        setNavAuthPage(false)
        navigate("/auth")
    }

    useEffect(() => {
        checkUserStatus()
    }, [])

    useEffect(() => {
        if (navAuthPage && !isSignedIn) {
            navigate("/auth")
        }
    }, [navAuthPage, isSignedIn, navigate]) 
            
    return (
        <header className="bg-app-bg-dark/95 backdrop-blur-md px-7 border-b border-[#1B1B1B] h-16
                            flex items-center justify-between sticky top-0 z-50 gap-2 sm:px-20  ">
            <h1 className="text-white text-2xl  font-montserrat font-light tracking-tighter cursor-pointer">
                            GYM<span className="font-bold">LOG</span>
            </h1>
            <SearchBar/>
           <button onClick={()=> setNavAuthPage(!navAuthPage) }>
                <CircleUserRound size={25} className="relative cursor-pointer"/>
           </button>
           {(navAuthPage && isSignedIn) && (
                <div className="absolute z-100 top-13 bg-zinc-800 p-3 rounded-xl right-9">
                        <button className="text-red-500/80 cursor-pointer md:right-18"
                                onClick={handleSignOut}>
                                Sign Out</button>
                </div>
           )}
          
        </header>

    )
}

export default Header