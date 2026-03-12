<script>
	import './layout.css'
	let { children } = $props();
</script>

<nav>
	<a href="/">Home</a>
	<a href="/users">Users</a>
</nav>


{@render children()}

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