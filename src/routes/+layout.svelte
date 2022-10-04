<script>
	import '$assets/scss/material-kit.scss';
	import Navbar from '$components/navbar/navbar.svelte';
</script>

<svelte:head>
	<script src={'src/assets/js/material-kit.min.js'}></script>
</svelte:head>

<main>
	<Navbar />
	<slot />
</main>

<style>
	main {
		background-image: url('$assets/images/banner-bg7.png');
		height: 100vh;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
