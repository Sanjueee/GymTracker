import { CircleUserRound  } from "lucide-react"
import SearchBar from "../SearchBar"
import { useState } from "react"

const Header = () => {
    return (
        <header className="bg-app-bg-dark/95 backdrop-blur-md px-7 border-b border-[#1B1B1B] h-16
                            flex items-center justify-between sticky top-0 z-50 gap-2 sm:px-20  ">
            <h1 className="text-white text-2xl  font-montserrat font-light tracking-tighter cursor-pointer">
                            GYM<span className="font-bold">LOG</span>
            </h1>
            <SearchBar/>
           <div>
                <CircleUserRound size={25} className="cursor-pointer"/>
           </div>
        </header>

    )
}

export default Header