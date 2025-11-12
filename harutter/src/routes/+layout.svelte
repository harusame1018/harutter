<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<nav class="menubar">
    <a href="/" class="menubar">Home</a>
    <a href="/about" class="menubar">About</a>
	<a href="/user" class="menubar">User list</a>
</nav>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
