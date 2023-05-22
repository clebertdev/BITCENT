import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandYoutube, IconBrandYoutubeKids } from "@tabler/icons-react";
import RedeSocial from "./RedeSocial";


export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandYoutube />} url="https://www.youtube.com/@cod3r"/>
            <RedeSocial icone={<IconBrandInstagram />} url=""/>
            <RedeSocial icone={<IconBrandFacebook />} url=""/>
            <RedeSocial icone={<IconBrandGithub />} url=""/>

        </div>

    )

}