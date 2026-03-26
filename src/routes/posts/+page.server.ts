import type { Post } from "$lib/types";
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";
import { PUBLIC_API_URL } from "$env/static/public";

export const load: PageServerLoad = async ()  => {
    const response = await fetch(PUBLIC_API_URL + '/posts')
    
    if (!response.ok) {
        throw error(500, "Something went wrong. Please try again later.")
    }

    const posts: Post[] = await response.json();

    return {
        posts
    }
}