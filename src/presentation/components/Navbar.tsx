import { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import UserContext from "../../app/Context/UserContext";
import { delAccessToken } from "../../infrastructure/data/api-data";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const { toggleUser } = useContext(UserContext)
    const location = useLocation();
    const [isMobileNavOpen, setMobileNavOpen] = useState(false)
    function handleSetMobileNavOpen() { setMobileNavOpen(!isMobileNavOpen) }
    const navLinkStyle = ({ isActive }: { isActive: boolean }) => "flex px-4 py-2 " + (isActive ? "font-semibold" : "font-medium")
    function logout() { 
        delAccessToken();
        toggleUser({accessToken: undefined})
        console.log(`AAAAAAAAAAAA`)
    }

    return location.pathname === '/login' || location.pathname === '/register' ? null 
    : <header className='sticky top-0'>
        <nav className="shadow-md w-full border-b border-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-60">
            {/* container */}
            <div className="container flex flex-wrap justify-between px-4 py-2 mx-auto lg:space-x-4">

                {/* brand */}
                <Link to="/" className="inline-flex p-2 text-xl">Leithen Notes</Link>

                {/* toggler btn */}
                <button onClick={handleSetMobileNavOpen} className="inline-flex items-center justify-center w-10 h-10 ml-auto text-white border rounded-md outline-none lg:hidden focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="black">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* menu */}
                <div className={`w-full mt-2 lg:inline-flex lg:w-auto lg:mt-0 ${isMobileNavOpen ? 'flex' : 'hidden'}`}>
                    <ul className="flex flex-col w-full space-y-2 lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-2">
                        <NavLink to="/" className={navLinkStyle}>Notes</NavLink>
                        <NavLink to="new-note" className={navLinkStyle}>+ New Note</NavLink>
                        <ThemeToggle/>
                        <NavLink onClick={logout} to="/login" className={navLinkStyle}>Logout</NavLink>                        
                    </ul>
                </div>
            </div>
        </nav >
    </header>
}

export default Navbar