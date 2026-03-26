<script lang="ts">
     
	import './layout.css'
	import Nav from '../features/layout/Nav.svelte';
	import type { NavItem } from "$lib/types";
	let { children } = $props();

    const navLinks: NavItem[]=[
		{ name:"Home", path:"/" },
		{ name:"Users", path:"/users" },
		{name:"Posts", path:"/posts"}
	]
</script>

<Nav items={navLinks} />

{@render children()}

