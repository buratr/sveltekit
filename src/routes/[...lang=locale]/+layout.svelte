<script lang="ts" >
	// import '../styles.css';
	import Header from '../../lib/pages/Header.svelte';
	import Footer from '$lib/pages/Footer.svelte';
	import { t, locales, locale } from '$lib/translations';
  	import { page } from '$app/stores';

</script>

<div class="app">
	<Header />

	<main class="">
		<slot />
	</main>

	<Footer />
	
</div>
