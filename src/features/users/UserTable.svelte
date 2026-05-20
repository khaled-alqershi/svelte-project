<script lang="ts">
	import * as Table from "$lib/components/ui/table/index.js";
	import type { User } from "$lib/types";

	export let users: User[] = [];
</script>

<div class="rounded-md border bg-card text-card-foreground shadow-sm">
	<Table.Root>
		<Table.Caption>A list of your application's users.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[80px]">ID</Table.Head>
				<Table.Head>Name</Table.Head>
				<Table.Head>Email</Table.Head>
				<Table.Head>Phone</Table.Head>
				<Table.Head class="text-right">Website</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#if users.length === 0}
				<Table.Row>
					<Table.Cell colspan={5} class="text-center py-8 text-muted-foreground">
						No users found.
					</Table.Cell>
				</Table.Row>
			{:else}
				{#each users as user (user.id)}
					<Table.Row>
						<Table.Cell class="font-medium text-muted-foreground">{user.id}</Table.Cell>
						<Table.Cell class="font-semibold">{user.name}</Table.Cell>
						<Table.Cell>{user.email}</Table.Cell>
						<Table.Cell>{user.phone}</Table.Cell>
						<Table.Cell class="text-right">
							<a 
								href="https://{user.website}" 
								target="_blank" 
								rel="noreferrer" 
								class="text-primary hover:underline"
							>
								{user.website}
							</a>
						</Table.Cell>
					</Table.Row>
				{/each}
			{/if}
		</Table.Body>
	</Table.Root>
</div>