import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandYoutube, IconBrandYoutubeKids } from "@tabler/icons-react";
import RedeSocial from "./RedeSocial";


export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandYoutube />} url="https://www.youtube.com"/>
            <RedeSocial icone={<IconBrandInstagram />} url="https://www.instagram.com/clebertbsb/"/>
            <RedeSocial icone={<IconBrandFacebook />} url="https://www.facebook.com/clebert.felgueirasmoreira"/>
            <RedeSocial icone={<IconBrandGithub />} url=""/>

        </div>

    )

}