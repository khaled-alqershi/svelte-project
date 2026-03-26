<script lang="ts" >
	import UserCard from '../../../features/users/UserCard.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props()

</script>

<main class="p-4 flex flex-col gap-2" >
    <!-- {#if data.success && data.user} -->
    <h1 class="font-bold text-xl" >User</h1>
    <div class="user">
        <UserCard user={data.user} />
        
        <a href="/users" >
            <button class="py-1 px-2 rounded-md border border-black mt-4" >Back</button>
        </a>
    </div>
    <!-- {:else}
        <div class="p-4 bg-red-300 text-white" >
            <p>User not found!</p>
        </div>
    {/if} -->
</main>