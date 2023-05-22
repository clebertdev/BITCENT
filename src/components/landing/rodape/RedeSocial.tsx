import Link from "next/link"
import React from "react"



interface RedeSocialProps {
    icone: any
    url: string
}

export default function RedeSocial(props: RedeSocialProps) {
    return (
        <Link href={props.url} target="_blank">
            <div className="bg-zinc-800 rounded-lg p-1 mr-3 cursor-pointer">
                {React.cloneElement(props.icone, {
                    size: 35,  //tamanho
                    strokeWidth: 1,  //grossura
                    className: "bg-gradient-to-r to-purple-600 from-zinc-900",  

                })}
            </div>
        </Link>        
    )
}