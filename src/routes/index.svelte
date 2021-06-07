<script context="module" lang="ts">
	import { browser } from '$app/env';
	import type { Load } from '@sveltejs/kit';

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	// see https://kit.svelte.dev/docs#loading
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/products.json');

		if (res.ok) {
			const products = await res.json();

			return {
				props: { products }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script>
  import Product from '$lib/Product.svelte'

  export let products
</script>

<svelte:head>
	<title>CATA Group</title>
</svelte:head>

<section>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col">
        <div class="h-1 bg-gray-200 rounded overflow-hidden">
          <div class="w-24 h-full bg-blue-500"></div>
        </div>
        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Our Products</h1>
        </div>
      </div>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        {#each products as product }
          <Product product={product} />
        {/each}
      </div>
    </div>
  </section>
</section>
