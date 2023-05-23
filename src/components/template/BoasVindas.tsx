//http://unicode-table.com/en/1F44B/

import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import { useContext } from "react";

export default function BoasVindas() {

    const {usuario} = useContext(AutenticacaoContext)
    
    return (
        <div className={`text-white text-3xl font-black`}>
            <span className="bg-gradient-to-r from-purple-600 to-zinc-900 me-5 rounded-s">
                Olá 
            </span>
            <span className="hidden sm:inline">
                {usuario?.nome?.split(' ')[0]}</span> 👋
        </div>
    )
}