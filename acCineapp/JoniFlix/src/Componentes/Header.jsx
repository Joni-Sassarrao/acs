import NavBar from "./NavBar"

export default function Header() {
    return (  
        <header className="flex bg-black text-white font-K2D text-4xl p-4 justify-between">
            <span>JONIFLIX</span>
            <NavBar/>
        </header>
    )
}