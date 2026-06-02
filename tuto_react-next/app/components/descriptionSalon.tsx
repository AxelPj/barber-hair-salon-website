import ScrollAnimation from "@/app/components/ScrollAnimation";

export default function DescriptionSalon(){
    return(
        <div className="w-full min-h-screen flex flex-col md:flex-row bg-black p-6 md:p-10 cursor-default items-center gap-10 md:gap-15">
            <div className="flex justify-center items-center w-full md:w-1/2">
                <ScrollAnimation direction="left">
                    <img src="/Images/inteSalon.avif" alt="interieur salon de coiffure"
                    className="w-full max-h-[50vh] md:max-h-[70vh] object-cover rounded-lg"/>
                </ScrollAnimation>
            </div>

            <div className="w-full md:w-1/2 font-mono">
                <ScrollAnimation direction="right">
                <h2 className="text-xl md:text-2xl font-coif flex justify-center mb-4">
                    Histoire des Maîtres de l'HAIR
                </h2>
                
                <div className="w-12 h-0.5 bg-amber-400 mx-auto mb-6"></div>
                <p className="text-sm md:text-base text-zinc-300">
                    L'aventure a commencé il y a plusieurs années, bien avant de s'implanter dans les Pyrénées-Orientales. C'est dans un autre département que les fondations ont été posées, avec une vision claire : redonner ses lettres de noblesse à l'art du barbier traditionnel, tout en l'associant aux techniques les plus modernes de la coiffure masculine, le tout dans un cadre profondément chaleureux.
                </p>

                <p className="text-sm md:text-base text-zinc-300 mt-4">
                    C'est en suivant ce fil conducteur que le salon a choisi de poser ses valises à <strong className="text-white">Pollestres</strong>. Grâce à son atmosphère conviviale et à la rigueur de son savoir-faire, le salon est rapidement devenu le repaire d'une clientèle fidèle.
                </p>

                <p className="text-sm md:text-base text-zinc-300 mt-4">
                    Mon histoire avec ce lieu a d'abord débuté dans l'action, en tant qu'employé. Cette immersion au quotidien m'a permis de m'imprégner de l'ADN du salon, de ses valeurs, et de l'exigence de ses gestes.
                </p>

                <p className="text-sm md:text-base text-zinc-300 mt-4">
                    En avril 2024, j'ai franchi une nouvelle étape en reprenant officiellement les rênes des Maîtres de L'HAIR.<br/>
                    Aujourd'hui, en tant que gérant, mon ambition est double : faire perdurer cet esprit authentique qui vous plaît tant, tout en y insufflant ma propre sensibilité.<br/><br/>
                    Mon objectif au quotidien reste inchangé : faire de chaque passage au salon une parenthèse unique, définie par un service soigné, une écoute attentive et une ambiance vraie.
                </p>
                </ScrollAnimation>
            </div>
            
        </div>
    );
}