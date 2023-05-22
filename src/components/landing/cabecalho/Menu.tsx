import { IconBrandGoogle } from "@tabler/icons-react"
import MenuItem from "./MenuItem"
import { useContext } from "react"
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext"

export default function Menu(){

    const { loginGoogle } = useContext(AutenticacaoContext)
    
    
    return (
        <div>
           <MenuItem 
           onClick={loginGoogle} 
           className="bg-gradient-to-r to-purple-600 from-zinc-900">
                
                <div className="flex items-center gap-2">
                    <IconBrandGoogle size={15} />
                    <span>Login</span>
                </div>
           </MenuItem> 

        </div>
    )
}