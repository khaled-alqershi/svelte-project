import type { Post } from "$lib/types";
import type { PageServerLoad } from "./$types";
import { PUBLIC_API_URL } from "$env/static/public";

export const load: PageServerLoad = async ()  => {
    const responsePromise = fetch(PUBLIC_API_URL + '/posts').then((res) => {
        if (!res.ok) throw new Error()
        return res.json() as Promise<Post[]>;      
    })
    
    return {
        responsePromise
    }
}