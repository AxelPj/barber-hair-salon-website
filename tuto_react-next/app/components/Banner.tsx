import { useState } from "react";

export default function Navbar({pathLogo, ongletActif, setOngletActif}: {pathLogo: string; ongletActif: string; setOngletActif: (onglet: string) => void}){

const [menuOuvert, setMenuOuvert] = useState(false);

return(
<div>
    <nav className="sticky top-0 z-10 w-full h-20 flex items-center justify-between px-8 bg-black/30 backdrop-blur-md text-amber-200">
        <img src={pathLogo} alt="logo" className="w-20"/>
        <h1 onClick={() => setOngletActif("accueil")} 
            className="text-amber-300 font-coif text-xl md:text-4xl cursor-pointer">
            Les Maitres de L'HAIR
        </h1>

        <ul className="hidden md:flex gap-16 font-mono">
            <li><button onClick={() => setOngletActif("accueil")} className={`cursor-pointer ${ongletActif === "accueil" ? "underline text-amber-400" : "hover:underline"}`}>Accueil</button></li>
            <li><button onClick={() => setOngletActif("tarifs")} className={`cursor-pointer ${ongletActif === "tarifs" ? "underline text-amber-400" : "hover:underline"}`}>Tarifs</button></li>
            <li><button onClick={() => setOngletActif("team")} className={`cursor-pointer ${ongletActif === "team" ? "underline text-amber-400" : "hover:underline"}`}>La Team</button></li>
            <li><button onClick={() => setOngletActif("contact")} className={`cursor-pointer ${ongletActif === "contact" ? "underline text-amber-400" : "hover:underline"}`}>Nous contacter</button></li>
        </ul>
        <button className="md:hidden cursor-pointer text-amber-200 text-3xl" onClick={() => setMenuOuvert(!menuOuvert)}>
            {menuOuvert ? "x" : "☰"}
        </button>
    </nav>
    {menuOuvert && (
        <div className="md:hidden sticky top-20 z-10 bg-black/80 backdrop-blur-md flex flex-col items-center gap-6 py-6 font-mono text-amber-200">
            <button onClick={() => { setOngletActif("accueil"); setMenuOuvert(false); }} className={ongletActif === "accueil" ? "underline text-amber-400" : "hover:underline"}>Accueil</button>
            <button onClick={() => { setOngletActif("tarifs"); setMenuOuvert(false); }} className={ongletActif === "tarifs" ? "underline text-amber-400" : "hover:underline"}>Tarifs</button>
            <button onClick={() => { setOngletActif("team"); setMenuOuvert(false); }} className={ongletActif === "team" ? "underline text-amber-400" : "hover:underline"}>La Team</button>
            <button onClick={() => { setOngletActif("contact"); setMenuOuvert(false); }} className={ongletActif === "contact" ? "underline text-amber-400" : "hover:underline"}>Nous contacter</button>
        </div>
    )}
</div>
);
}