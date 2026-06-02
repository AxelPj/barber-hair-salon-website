export default function CopyrightBanner() {
    return (
        <div className="w-full h-12 flex items-center justify-center bg-black text-amber-200/60 font-mono text-sm">
            <p>© {new Date().getFullYear()} Les Maîtres de L'HAIR — Tous droits réservés</p>
        </div>
    )
}