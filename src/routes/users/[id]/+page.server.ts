// import type { User } from "$lib/types";
// import type { PageServerLoad } from "../$types";
// import { error } from '@sveltejs/kit';
// export const load: PageServerLoad = async ({ params }) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
// if (!response.ok) {
//     throw error(404, {
//       message: `User with ID ${params.id} not found`
//     });
//   }
//     const user: User = await response.json()

    

//     return {
//         user,
       
//     }
// }
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types'; 
import type { User } from '$lib/types';

export const load: PageServerLoad = async ({ fetch, params }) => {
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);

    if (!response.ok) {
        throw error(404, 'User not found')  
        // return { success: false, error: "User not found!" }
    }

    const user: User = await response.json();
    return { success: true, user };
};