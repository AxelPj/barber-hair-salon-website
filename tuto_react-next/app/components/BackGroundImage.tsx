
export default function BackgroundImage({ imagePath }: { imagePath: string}){

    return(
        <div className="absolute inset-0 z-0">
            <img alt="Salon de coiffure" className="absolute w-full object-cover object-[10%_30%] opacity-40 grayscale2"
            src={imagePath}/>
        </div>
    );
}