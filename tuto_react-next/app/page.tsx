"use client"
import { useState } from "react";

import Navbar from "@/app/components/Banner"
import BackGroundVideos from "@/app/components/BackGroundVideos"
import DescriptionSalon from "@/app/components/descriptionSalon"
import TarifAccueil from "@/app/components/tarifAccueil";
import BentoGrid from "@/app/components/BentoGridCoif";
import BackgroundImage from "./components/BackGroundImage";
import Tarif from "./components/Tarif";
import FooterBanner from "./components/footer";
import FicheContact from "./components/ficheContact";

export default function App() {
  const [ongletActif, setOngletActif] = useState("accueil");

  const pages: Record<string, React.JSX.Element> = 
  {
    accueil:<div>
            <DescriptionSalon />
            <BentoGrid />
            <TarifAccueil setOngletActif={setOngletActif}/>
            </div>,
    tarifs: <Tarif />,
    contact: <FicheContact />
  };
  let titrePrincipal = "Coiffeur & Barbier";
  if (ongletActif === "tarifs")
    titrePrincipal = "Nos Tarifs";
  else if (ongletActif === "contact")
    titrePrincipal = "Nous contacter";
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
        <header key={ongletActif} className={`animate-fade-in relative w-full bg-zinc-950 overflow-hidden flex flex-col justify-between ${ongletActif === "accueil" ? "min-h-screen h-screen" : "min-h-[50vh] h-[50vh]"}`}>
          {ongletActif === "accueil" ? (
          <BackGroundVideos videoPath="/Videos/Accueil.mp4" imagePath="/Images/Accueil.png"/>
        ) : (
          <BackgroundImage imagePath="/Images/BackgroundImg.jpg"/>
        )}
        <div className="z-20 w-full">
          <Navbar pathLogo="/Images/logo.png" ongletActif={ongletActif} setOngletActif={setOngletActif}/>
        </div>
          <div className={`relative z-10 flex flex-col items-center grow px-4 select-none ${ongletActif !== "accueil" ? "justify-end-safe mb-10" : "justify-center mb-20 md:mb-40"}`}>
              <h2 className="font-coif text-5xl md:text-9xl leading-tight">
              {titrePrincipal}
          </h2>
            <div>
                <p className={`font-mono text-center text-lg md:text-2xl mt-4 text-amber-200/80 max-w-2xl ${ongletActif !== "accueil" ? "hidden" : ""}`}>
                  La vie est plus belle quand vous rencontrez le bon coiffeur.
                </p>
            </div>
        </div>
      </header>
      <main key={`content-${ongletActif}`} className="animate-fade-in w-full">
          {pages[ongletActif]}
      </main>
      <FooterBanner/>
    </div>
  );
}