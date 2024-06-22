import { NavLink } from "react-router-dom"

export default function NavBar() {
    return ( 
        <nav>
            <ul className="flex gap-3 text-3xl">
                <li><NavLink className="hover:underline hover:text-gray-300 hover:duration-200" to="/"> Home</NavLink></li>
                <li><NavLink className="hover:underline hover:text-gray-300 hover:duration-200" to="filmes">Filmes</NavLink></li>
                <li><NavLink className="hover:underline hover:text-gray-300 hover:duration-200" to="favoritos">Favoritos</NavLink></li>
            </ul>
        </nav>
    )
}