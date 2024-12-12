import {bios, menuItems, socialLinks} from "$lib/data";

export function load(){
    return {
        socials:socialLinks,
        menu:menuItems,
        bios:bios
    }
}