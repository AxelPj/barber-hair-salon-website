export default function TarifAccueil({setOngletActif} : {setOngletActif: (onglet: string) => void}) {
  const prestations = [
    { nom: "Coupe Dégradé / Classique", description: "Shampooing, coupe, coiffage & soin", prix: "20€" },
    { nom: "Coupe Enfant (-12 ans)", description: "Coupe adaptée pour les futurs Maîtres", prix: "15€" },
    { nom: "Taille de Barbe Traditionnelle", description: "Tracé au rasoir, serviette chaude & huile", prix: "15€" },
    { nom: "Forfait Coupe + Barbe", description: "Le service complet signature", prix: "25€" },
    { nom: "Forfait étudiant Coupe + Barbe", description: "Le service complet signature a prix étudiante", prix: "18€" },
    { nom: "Rasage Intégral", description: "À l'ancienne, double serviette chaude & massage", prix: "20€" },
  ];
return (
    <div className="bg-black cursor-default min-h-screen">
        <div className="w-full max-w-4xl mx-auto p-4 md:p-10 font-mono">  {/* ← supprimé h-screen, padding réduit sur mobile */}
            <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-coif uppercase tracking-wider text-white">
                    Nos Prestations & Tarifs
                </h2>
                <div className="w-12 h-0.5 bg-amber-400 mx-auto mt-2"></div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-zinc-800 text-zinc-500 text-sm tracking-widest uppercase">
                            <th className="pb-4 font-medium">Prestation</th>
                            <th className="pb-4 text-right font-medium">Tarif</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900">
                        {prestations.map((item, index) => (
                            <tr key={index} className="hover:bg-zinc-950 transition-colors group">
                                <td className="py-4 pr-4">
                                    <div className="text-white font-medium text-base md:text-lg group-hover:text-amber-400 transition-colors">  {/* ← text-base sur mobile */}
                                        {item.nom}
                                    </div>
                                    <div className="text-zinc-500 text-xs md:text-sm mt-0.5 font-sans">  {/* ← text-xs sur mobile */}
                                        {item.description}
                                    </div>
                                </td>
                                <td className="py-4 text-right text-lg md:text-xl font-bold text-amber-400">  {/* ← text-lg sur mobile */}
                                    {item.prix}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <a onClick={() => setOngletActif("tarifs")} className="cursor-pointer hover:underline text-center text-xl font-bold text-amber-400 block mt-6">
                    En savoir plus
                </a>
            </div>
        </div>
    </div>
  );
}