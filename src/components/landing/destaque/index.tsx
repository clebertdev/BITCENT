import Area from "../comum/Area";
import ImagemResponsiva from "../comum/ImagemResponsiva";
import Slogan from "./Slogan";
import principal from "../../../../public/principal.jpg"

export default function Destaque() {
    return (
        <Area className="flex-1">
            <div className={`
                flex flex-col-reverse items-center md:flex-row justify-around items-center" 
                 h-[500px]     
            
            `}>                
                <Slogan />
                <ImagemResponsiva 
                    imagem={principal}
                    clasName="md:rotate-3"
                    />
                
                
                    

            </div>

        </Area>
    )
}