import {redirect} from '@sveltejs/kit';

export function load() {
    redirect(307, 'https://bsky.app/profile/delm.dev');
}