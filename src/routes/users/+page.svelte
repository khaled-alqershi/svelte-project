<script lang="ts" >
    import type { PageData } from './$types';
	import SearchBar from '$lib/components/SearchBar.svelte';
    import UserCard from '$lib/components/UserCard.svelte';

    let { data }: { data: PageData } = $props()

    let searchQuery = $state<string>('')

    let filteredUsers = $derived(
        data.users.filter((user) => {
            const search = searchQuery.toLowerCase();
            return (
                user.name.toLowerCase().includes(search) ||
                user.email.toLowerCase().includes(search)
            )
        })
    )

</script>

<h1 class="font-bold text-xl p-2" >Users</h1>

<SearchBar 
    placeholder="Search for users..."
    bind:value={searchQuery}
/>

<ul class="grid grid-cols-2 gap-4 p-2" >
    {#if filteredUsers.length === 0}
        <p>No users found.</p>
    {/if}
    {#each filteredUsers as user}
        <UserCard user={user} />
    {/each}
</ul>