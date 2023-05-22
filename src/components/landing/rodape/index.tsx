import Area from "../comum/Area";
import Logo from "../comum/Logo";
import RedesSociais from "./RedesSociais";

export default function Rodape() {
    return (
        <Area className="bg-black py-20">
            <div className="flex flex-col items-center md:items-start">
                <Logo />
                <div className="mt-3 text-zinc-400 text-center md:text-left">
                    <div>Plataforma financeira</div>
                    <div className="">que <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-zinc-600">Simplifica</span> sua vida</div>
                </div>

            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <RedesSociais />
                <p className="text-zinc-100 mt-7 md:mt-0 text-center">
                    <span className="font-bold">Cleb<span className="text-red-500">3</span>rtDEV</span> ® {new Date().getFullYear()} - Todos os direitos reservados
                </p>
            </div>
            
        </Area>  
    )
}

