<script>
  export let product = {};
</script>

<div class="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 sm:mb-0 mb-6">
  <div class="rounded-lg h-64 overflow-hidden">
    <img alt="content" class="object-contain object-center h-full w-full" src={product.image} />
  </div>
  <h2 class="text-xl font-medium title-font text-gray-900 mt-5">{product.name}</h2>
  <p class="text-base leading-relaxed mt-2">{product.description}</p>
  {#if product.link}
  <a href={product.link} class="text-blue-500 inline-flex items-center mt-3"
    >Learn More
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="w-4 h-4 ml-2"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </a>
  {/if}
</div>
