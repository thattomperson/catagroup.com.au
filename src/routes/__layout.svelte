<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	@tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
