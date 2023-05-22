interface PaginaProps {
    externa?: boolean //pagina externa ou interna, ou seja exige ou não autentificação
    children: any
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className={`
                flex flex-col min-h-screen
                bg-gradient-to-r from-zinc-900 via-black to-zinc-900
               
                ${props.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}