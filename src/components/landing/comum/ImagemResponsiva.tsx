import Image from "next/image"

interface ImagemResponsivaProps {
    imagem: any
    clasName?: string
}

export default function ImagemResponsiva(props: ImagemResponsivaProps) {
    return (
        <Image
            src={props.imagem}
            alt="Imagem"
            className={`
                w-[350px] h-[365px] rotate-0
                lg:w-[550px] lg-h-[365px]
                rounded-xl object-cover
                ${props.clasName ?? ''}
            `}
        />


    )
}