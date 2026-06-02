import CopyrightBanner from "./Copyright";

export default function FooterBanner() {
    return (
        <div>
            <footer className="w-full bg-white text-black font-mono py-10 px-6 md:px-16">
                <div className="flex flex-row justify-between items-start gap-8">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold uppercase tracking-widest text-sm">Réseaux Sociaux</h3>
                        <a href="https://facebook.com" target="_blank" className="flex items-center justify-center gap-2 hover:opacity-70 transition-opacity">
                            <img src="Icon/facebook.svg" alt="facebook" className="w-8 h-8"/>                        
                        </a>
                        <a href="https://instagram.com" target="_blank" className="flex items-center justify-center gap-2 hover:text-amber-500 transition-colors">
                            <img src="Icon/instagram.png" alt="Instagram" className="w-8 h-8"/>                        
                        </a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold uppercase tracking-widest text-sm">Contact</h3>
                        <p>12 Rue des Maîtres</p>
                        <p>66000 Perpignan</p>
                        <p>07 00 00 00 00</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold uppercase tracking-widest text-sm">Horaires</h3>
                        <p>Lundi : Fermé</p>
                        <p>Mar - Ven : 9h - 19h</p>
                        <p>Samedi : 9h - 17h</p>
                        <p>Dimanche : Fermé</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <h3 className="font-bold uppercase tracking-widest text-sm">Prendre rendez-vous en ligne</h3>
                        <a href="https://planify.fr" target="_blank">
                            <img src="Icon/Planify.jpg" alt="Planify" className="w-20 hover:opacity-70 transition-opacity"/>
                        </a>
                    </div>
                </div>
            </footer>
            <CopyrightBanner/>
        </div>
    );
}

