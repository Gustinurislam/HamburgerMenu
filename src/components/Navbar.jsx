import Button from "./Button"
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const links = [
        { name: 'Home', link: '/' },
        { name: 'Service', link: '/' },
        { name: 'About', link: '/' },
        { name: 'Contact', link: '/' }
    ]

    return (
        <nav className="shadow-md w-full sticky bg-white py-4 px-10">
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex items-center justify-between">
                    <h1 className="font-medium text-2xl text-indigo-600 flex items-center"><FaHamburger className="mr-1" /> Menu</h1>
                    <div className="md:hidden" onClick={() => setOpen(!open)}>
                        {open ? (
                            <FiX className="text-3xl text-indigo-600" />
                        ) : (
                            < FiMenu className="text-3xl text-indigo-600" />
                        )}
                    </div>
                </div>
                <ul className={`space-y-3 md:space-y-0 w-full md:w-auto left-0 pl-10 md:pl-0 absolute md:static bg-white z-[-1] md:z-auto md:flex md:items-center md:space-x-5 transition-all duration-500 ease-in ${open ? 'top-[63px] opacity-100' : 'top-[-490px] opacity-0 md:opacity-100'}`}>
                    {links.map((link) => (
                        <li className="text-xl text-indigo-600" key={link.name}>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                    <Button />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
