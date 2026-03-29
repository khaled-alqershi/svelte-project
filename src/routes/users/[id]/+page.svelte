<script lang="ts" >
	import Error500 from '../../../features/common/Error500.svelte';
	import Loader from '../../../features/common/Loader.svelte';
import UserCard from '../../../features/users/UserCard.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props()

</script>

<main class="p-4 flex flex-col gap-2" >
    <h1 class="font-bold text-xl" >User</h1>
    
    {#await data.responsePromise }
        <Loader />
      
    {:then user}
    <div class="user">
        <UserCard user={user} />
        
        <a href="/users" >
            <button class="py-1 px-2 rounded-md border border-black mt-4" >Back</button>
        </a>
    </div>

    {:catch error}
        <Error500 error={error} />
    {/await}
</main>