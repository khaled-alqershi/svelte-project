import type { User } from "$lib/types";
import type { PageServerLoad } from "./$types";
import { error } from '@sveltejs/kit';
export const load: PageServerLoad = async ({ params })  => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
    if (!response.ok) {
        throw error(500, "Something went wrong. Please try again later.")
    }

    const users: User[] = await response.json();

    return {
        users
    }
}