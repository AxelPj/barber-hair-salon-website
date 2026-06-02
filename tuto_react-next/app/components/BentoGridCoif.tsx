export default function BentoGrid(){
    return(
            <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/Images/outils2.jpg" alt="Nature" className="w-full h-full object-cover" />
                <div
                    className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/Images/coupe1.jpg" alt="Food" className="w-full h-48 object-cover object-center scale-105" />                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="Images/barbe1.jpg" alt="Technology" className="w-full h-48 object-cover scale-110" />
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="Images/coupe3.jpg" alt="Travel" className="w-full h-48 object-cover scale-110" />
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="Images/coupeFemme.jpg" alt="Art" className="w-full h-48 object-cover object-[center_bottom_90%] scale-110" />
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="Images/coupe2.jpg" alt="Sport" className="w-full h-48 object-cover" />
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="Images/coupe4.jpg" alt="Sport" className="w-full h-48 object-cover" />
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="Images/coupe5.jpg" alt="Sport" className="w-full h-48 object-cover" />
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="Images/outils1.jpg" alt="Sport" className="w-full h-48 object-cover" />
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
}