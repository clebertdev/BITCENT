import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import { useContext } from "react";

export default function InfoUsuario() {
    const{usuario, logout} = useContext(AutenticacaoContext)
    return (
        <div className="flex items-center text-white gap-3 pe-10 cursor-pointer rounded-e bg-gradient-to-r from-purple-600 to-zinc-900"
        onClick={logout}>
            <div className="flex flex-col select-none text-right">
                <span className="text-sm font-bold text-zinc-200">
                    {usuario?.nome}
                </span>
                <span className="text-xs text-zinc-400">
                    {usuario?.email}
                </span>
            </div>
        </div>
    )
}