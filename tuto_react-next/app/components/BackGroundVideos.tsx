
export default function BackgroundVideos({ videoPath, imagePath }: { videoPath: string; imagePath: string}){

    return(
        <div className="absolute inset-0 z-0">
            <img alt="Salon de coiffure" className="absolute block md:hidden h-full w-full object-cover object-[50%_80%] opacity-40"
            src={imagePath}/>
            <video
                className="hidden md:block absolute h-screen object-[50%_80%] z-0 w-full object-cover opacity-40" 
                muted
                autoPlay 
                loop 
                playsInline
                poster={imagePath}
            >
                <source src={videoPath} type="video/mp4"/>
            </video>
        </div>
    );
}