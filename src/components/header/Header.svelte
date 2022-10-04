<script>
	import './Header.css';
	import Button from '$components/button/Button.svelte';
	import { createEventDispatcher } from 'svelte';

	export let user = '';
	export let menu = 1;

	const dispatch = createEventDispatcher();

	function onLogin(event) {
		dispatch('login', event);
	}
	function onLogout(event) {
		dispatch('logout', event);
	}
	function onCreateAccount(event) {
		dispatch('createAccount', event);
	}
</script>

<header>
	<div class="wrapper">
		<Button label="Login" size="large" color="primary" />
		<nav>
			<a href="/">Home</a>
			<a href="/projects">Projects</a>
			<a href="/services">Services</a>
			<a href="/products">Products</a>
			<a href="/contact">Contact Us</a>
			<a href="/about">About Us</a>
		</nav>
		<!-- <div>
			{#if user}
				<Button color="primary" variant="raised" size="small" on:click={onLogout} label="Log out" />
			{/if}
			{#if !user}
				<Button color="primary" variant="raised" size="small" on:click={onLogin} label="Log in" />
				<Button
					color="primary"
					variant="raised"
					size="small"
					on:click={onCreateAccount}
					label="Sign up"
				/>
			{/if}
		</div> -->
	</div>
</header>
