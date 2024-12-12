import {frontendFrameworks, languages, operatingSystems, shells} from "$lib/data";

export function load(){
    return {
        frontend:frontendFrameworks,
        os:operatingSystems,
        shells:shells,
        lang:languages
    }
}