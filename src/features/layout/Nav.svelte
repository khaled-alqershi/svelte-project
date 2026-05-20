<script lang="ts">
	import { page } from "$app/stores";
	import type { NavItem } from "$lib/types";

	let { items = [] }: { items: NavItem[] } = $props();
</script>

<nav class="space-y-1 px-4">
	{#each items as item}
		{@const isActive = $page.url.pathname === item.path || ($page.url.pathname.startsWith(item.path) && item.path !== "/")}
		
		<a
			href={item.path}
			class="flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200
			{isActive 
				? 'bg-foreground text-background font-semibold shadow-sm' 
				: 'text-muted-foreground hover:text-foreground hover:bg-muted'}"
		>
			{item.name}
		</a>
	{/each}
</nav>