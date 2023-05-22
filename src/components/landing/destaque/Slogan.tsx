export default function Slogan() {
    function renderizarFrasePrincipal() {
        return (
            <div className={`
                flex flex-col items-center md:items-start
                text-3xl sm:text-4xl lg:text-6xl text-white font-light
            `}>
                <span>Gerencia sua finanças</span>                
                <span>com praticidade e sabedoria.</span>                
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center gap-7">
            {renderizarFrasePrincipal()}
            <div className="text-sm text-center lg:text-lg font-thin text-zinc-500 sm:text-start">
                Plataforma financeira que simplifica sua vida!
            </div>    
        </div>
    )
}

