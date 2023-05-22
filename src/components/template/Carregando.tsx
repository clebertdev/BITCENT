import loading from "../../../public/loading.gif"
import Image from "next/image";
import Pagina from "./Pagina";


export default function Carregando() {
    return (
        <Pagina externa className='justify-center items-center'>
            <Image
                priority
                src={loading}
                alt="loading"
                width={100}
                height={100}
            />
        </Pagina>
    )
}