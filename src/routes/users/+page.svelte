<script lang="ts" >
    import type { PageData } from './$types';
	import SearchBar from '../../features/common/SearchBar.svelte';
	import UserCard from '../../features/users/UserCard.svelte';
	import UserRow from '../../features/users/UserRow.svelte';

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
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {#each filteredUsers as user}
                <UserRow user={user} />
            {/each}
        </tbody>
    </table>
</ul>

<style>
    table {
        border: 1px solid black;
        padding: 10px;
        border-radius: 5px;
    }
</style>