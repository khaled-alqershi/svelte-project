<script lang="ts">
    import type { NavItem } from "$lib/types";
    export let items: NavItem[]=[];
</script>

<nav class="flex items-center gap-4 p-4" >
    {#each items as item }
        <a href={item.path}>{item.name}</a>
        
    {/each}
</nav>
<style>
	nav {
		
		display: flex;
		gap: 1rem;
		padding: 1rem;
		border-bottom: 1px solid #970808;
		background-color: black;
	}

	a {
		text-decoration: none;
		color: #f47886;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
