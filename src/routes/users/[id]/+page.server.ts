import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types'; 
import type { User } from '$lib/types';
import { PUBLIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ fetch, params }) => {
    
    const response = await fetch(PUBLIC_API_URL + `/users/${params.id}`);

    if (!response.ok) {
        throw error(404, 'User not found')  
        // return { success: false, error: "User not found!" }
    }

    const user: User = await response.json();
    return { success: true, user };
};