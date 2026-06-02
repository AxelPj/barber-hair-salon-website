const prestationsCoupe = [
    { nom: "Coupe Enfant -10 ans", description: "Une coupe fun, soignée et adaptée aux plus jeunes", prix: "13€" },
    { nom: "Coupe Ado & Étudiant", description: "Une coupe stylée et tendance pour les jeunes", prix: "18€" },
    { nom: "Coupe Homme", description: "Une coupe précise et personnalisée pour un style maîtrisé", prix: "21€" },
    { nom: "Coupe Femme Cheveux Courts", description: "Une coupe précise et stylée pour sublimer les cheveux courts", prix: "21€" },
];

const prestationsBarbe = [
    { nom: "Taille de Barbe Classique", description: "Pour une barbe nette et bien dessinée avec finition tondeuse", prix: "16€" },
    { nom: "Rasage à l'Ancienne", description: "Un moment de détente à l'ancienne avec serviette chaude", prix: "20€" },
    { nom: "Taille de Barbe Traditionnelle", description: "Un travail soigné dans les règles de l'art", prix: "25€" },
];

const prestationsForfaits = [
    { nom: "Coupe & Barbe Classique", description: "Un look soigné de la tête à la barbe", prix: "29€" },
    { nom: "Coupe + Barbe Traditionnelle", description: "Une coupe soignée et une barbe travaillée à l'ancienne", prix: "35€" },
    { nom: "Rasage de Crâne & Barbe", description: "Un look net et assumé avec un crâne parfaitement rasé", prix: "21€" },
    { nom: "Rasage de Crâne & Barbe Traditionnelle", description: "Rasage de crâne et barbe à l'ancienne pour une finition impeccable", prix: "28€" },
];

const prestationsCouleur = [
    { nom: "Mèches", description: "Des mèches sur mesure pour un effet lumineux et naturel ou audacieux", prix: "Sur devis" },
    { nom: "Blond Polaire", description: "Une décoloration totale pour un changement radical et une couleur éclatante", prix: "Sur devis" },
];

const prestationsSoin = [
    { nom: "Soin Visage", description: "Nettoyage en profondeur, exfoliation, masque & hydratation finale", prix: "Sur devis" },
];

function TableauPrestations({ titre, prestations }: { 
    titre: string; 
    prestations: { nom: string; description: string; prix: string }[] 
}) {
    return (
        <div className="mb-12">
            <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-coif uppercase tracking-wider text-white">
                    {titre}
                </h2>
                <div className="w-12 h-0.5 bg-amber-400 mx-auto mt-2"></div>
            </div>
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
                                <div className="text-white font-medium text-base md:text-lg group-hover:text-amber-400 transition-colors">
                                    {item.nom}
                                </div>
                                <div className="text-zinc-500 text-xs md:text-sm mt-0.5 font-sans">
                                    {item.description}
                                </div>
                            </td>
                            <td className="py-4 text-right text-lg md:text-xl font-bold text-amber-400">
                                {item.prix}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function Tarif() {
    return (
        <div className="w-full font-mono bg-black p-6 md:p-10 cursor-default min-h-screen">
            <p className="text-center mx-auto text-zinc-300 mb-10 max-w-2xl">
                Découvrez la carte des prix de votre espace coiffure et barbe...
            </p>
            <TableauPrestations titre="Coupes" prestations={prestationsCoupe} />
            <TableauPrestations titre="Barbe" prestations={prestationsBarbe} />
            <TableauPrestations titre="Forfaits" prestations={prestationsForfaits} />
            <TableauPrestations titre="Couleur" prestations={prestationsCouleur} />
            <TableauPrestations titre="Soins" prestations={prestationsSoin} />
        </div>
    );
}