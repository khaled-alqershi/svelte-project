import type { PageServerLoad } from './$types'; 
import type { User } from '$lib/types';
import { PUBLIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ fetch, params }) => {
    
    const responsePromise = fetch(PUBLIC_API_URL + `/users/${params.id}`).then(response =>{
        if (!response.ok ) {
            throw new Error()
        }
        return response.json() as Promise<User>;
    } ) 

    return { responsePromise };
};