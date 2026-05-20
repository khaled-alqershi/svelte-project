<script lang="ts">
	import type { PageData } from './$types';
	import SearchBar from '../../features/common/SearchBar.svelte';
	import Loader from '../../features/common/Loader.svelte';
	import Error500 from '../../features/common/Error500.svelte';
	import UserTable from '../../features/users/UserTable.svelte';
	import StatsCard from "$lib/components/StatsCard.svelte";

	
	let { data }: { data: PageData } = $props();
	let searchQuery = $state<string>('');
</script>


<div class="p-4 pb-2">
	<h1 class="font-bold text-3xl tracking-tight text-[#620712]">Users Dashboard</h1>
	<p class="text-sm text-muted-foreground mt-1">active user accounts in the system.</p>
</div>


<div class="px-4 mb-6">
	<SearchBar 
		placeholder="Search users by name or email..."
		bind:value={searchQuery}
	/>
</div>

{#await data.responsePromise}
	
	<div class="p-4">
		<Loader />
	</div>

{:then users}
	
	{@const filteredUsers = users.filter(u => 
		u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
		u.email.toLowerCase().includes(searchQuery.toLowerCase())
	)}

	
	<div class="px-4 space-y-6">
		
		
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<StatsCard 
				title="Total users" 
				value={users.length.toString()} 
				description="Total number in the database " 
			/>
			<StatsCard 
				title="Current search results " 
				value={filteredUsers.length.toString()} 
				description="  Number of users matching current filters  " 
			/>
			<StatsCard 
				title="State" 
				value="Active" 
				description="The data was successfullt updated from the API" 
			/>
		</div>

		
		<div class="overflow-x-auto pt-2">
			{#if filteredUsers.length === 0}
				<div class="p-8 text-center border border-dashed rounded-xl bg-muted/30">
					<p class="text-muted-foreground font-medium">No users found for "{searchQuery}"</p>
				</div>
			{:else}
				
				<UserTable users={filteredUsers} />
			{/if}
		</div>

	</div>

{:catch error}
	
	<div class="p-4">
		<Error500 error={error} />
	</div>
{/await}