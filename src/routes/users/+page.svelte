<script lang="ts">
    import type { PageData } from './$types';
    import SearchBar from '../../features/common/SearchBar.svelte';
    import UserRow from '../../features/users/UserRow.svelte';
	import Loader from '../../features/common/Loader.svelte';
	import Error500 from '../../features/common/Error500.svelte';

    let { data }: { data: PageData } = $props();
    let searchQuery = $state<string>('');
</script>

<h1 class="font-bold text-2xl p-4 text-[#620712]">Users</h1>

<div class="px-4 mb-4">
    <SearchBar 
        placeholder="Search users..."
        bind:value={searchQuery}
    />
</div>

{#await data.responsePromise}
    <Loader />

{:then users}
    {@const filteredUsers = users.filter(u => 
        u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        u.email.toLowerCase().includes(searchQuery.toLowerCase())
    )}

    <div class="p-4 overflow-x-auto">
        {#if filteredUsers.length === 0}
            <p class="p-4 bg-gray-100 rounded">No users found for "{searchQuery}"</p>
        {:else}
            <table class="min-w-full bg-white border border-black rounded-lg">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="p-2 border-b">ID</th>
                        <th class="p-2 border-b">Name</th>
                        <th class="p-2 border-b">Email</th>
                        <th class="p-2 border-b">Website</th>
                        <th class="p-2 border-b">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {#each filteredUsers as user (user.id)}
                        <UserRow {user} />
                    {/each}
                </tbody>
            </table>
        {/if}
    </div>

{:catch error}
    <Error500 error={error} />
{/await}

<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }
</style>