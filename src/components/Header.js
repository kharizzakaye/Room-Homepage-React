import React, { useState } from "react";
import logo from "../assets/logo.svg";
import hamburgerMenuIcon from "../assets/icons/icon-hamburger.svg"
import closeIcon from "../assets/icons/icon-close.svg"

export default function Header() {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

    return (
        <>
            <header className="absolute z-10 p-8 w-full flex items-center justify-center lg:items-center lg:justify-start">
                <div>
                    <img src={logo} alt="Logo image" className="lg:mr-8"/>
                </div>

                <div 
                    className={`${ 
                        isMenuExpanded 
                            ? "bg-black bg-opacity-75 absolute top-0 left-0 right-0 bottom-0 h-screen" 
                            : "bg-transparent lg:bg-transparent"
                        } lg:bg-transparent lg:h-auto lg:relative`}
                >
                    <nav 
                        className={`${
                            isMenuExpanded 
                                ? "open w-full py-8 lg:py-0 lg:w-auto" 
                                : ""
                            }`}
                    >
                        <ul className="flex items-center justify-center flex-wrap gap-8">
                            <li><button className="border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white">home</button></li>
                            <li><button className="border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white">shop</button></li>
                            <li><button className="border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white">about</button></li>
                            <li><button className="border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white">contact</button></li>
                        </ul>
                    </nav>
                </div>

                <div className="absolute left-8 top-8 z-20 lg:hidden">
                    {
                        isMenuExpanded ? (
                            <button onClick={() => setIsMenuExpanded(false)}>
                                <img src={closeIcon} alt="Close icon" />
                            </button>
                        ) : (
                            <button onClick={() => setIsMenuExpanded(true)}>
                                <img src={hamburgerMenuIcon} alt="Hamburger menu icon" />
                            </button>
                        )
                    }
                </div>
            </header>
        </>
    )
}