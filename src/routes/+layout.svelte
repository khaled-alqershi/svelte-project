<script lang="ts">
	import './layout.css';
	import Nav from '../features/layout/Nav.svelte';
	import type { NavItem } from "$lib/types";
	import { onMount } from "svelte";
	import { Sun, Moon } from "lucide-svelte"; 

	let { children } = $props();

	let isDark = $state(false);

	const navLinks: NavItem[] = [
		{ name: "Home", path: "/" },
		{ name: "Users", path: "/users" },
		{ name: "Posts", path: "/posts" }
	];

	onMount(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		
		if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
			isDark = true;
			document.documentElement.classList.add("dark");
		} else {
			isDark = false;
			document.documentElement.classList.remove("dark");
		}
	});

	function toggleTheme() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}
</script>

<div class="flex h-screen w-full bg-background text-foreground antialiased transition-colors duration-200">
	<aside class="hidden md:flex w-64 flex-col border-r border-border bg-card">
		<div class="flex h-16 items-center px-6 border-b border-border">
			<span class="font-black tracking-tighter text-xl uppercase text-foreground">Admin.OS</span>
		</div>
		
		<div class="flex-1 py-4">
			<Nav items={navLinks} />
		</div>
		
		<div class="p-4 border-t border-border text-[10px] font-mono text-muted-foreground text-center">
			MONOCHROME CORE v1.1
		</div>
	</aside>

	<div class="flex flex-1 flex-col overflow-hidden bg-background">
		<header class="flex h-16 items-center px-8 bg-card border-b border-border justify-between md:justify-end gap-4">
			<div class="flex items-center gap-4">
				<button 
					onclick={toggleTheme}
					class="p-2 rounded-md border border-border bg-background hover:bg-muted text-foreground transition-colors cursor-pointer"
					aria-label="Toggle theme mode"
				>
					{#if isDark}
						<Sun class="h-4 w-4 stroke-[2.5]" />
					{:else}
						<Moon class="h-4 w-4 stroke-[2.5]" />
					{/if}
				</button>

				<span class="text-[10px] font-mono bg-muted border border-border px-2 py-0.5 rounded tracking-tight hidden sm:inline">
					SYS_STATUS_OK
				</span>
				
				<div class="h-8 w-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-xs">
					Kh
				</div>
			</div>
		</header>

		<main class="flex-1 overflow-y-auto p-8">
			<div class="max-w-6xl mx-auto w-full">
				{@render children()}
			</div>
		</main>
	</div>
</div>