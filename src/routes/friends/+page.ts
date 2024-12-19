import {friends} from "$lib/data";

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    const index = array.findIndex((item) => item.name === 'maya')
    if (index !== -1) {
        const [item] = array.splice(index, 1);
        array.push(item);
    }
    return array
}


export function load() {
    return {
        friends: shuffleArray(friends)
    }
}