import NavBar from "./NavBar"

export default function Header() {
    return (  
        <header className="flex bg-black text-white text-3xl p-4 justify-between">
            <h1>Bem-vindo ao JoniFlix!</h1>
            <NavBar/>
        </header>
    )
}