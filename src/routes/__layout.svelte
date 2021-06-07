<script lang="ts">
  import '$lib/styles.css'
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
  <script src={`https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`}></script>
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />
