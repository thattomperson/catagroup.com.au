<script lang="ts">
  import { enhance } from '$lib/form'

  const site_key = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string;
</script>

<footer>
	<section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
      </div>
      <form
      action="/contact"
      method="post"
      use:enhance={{
        pending: (data, form) => new Promise((resolve, reject) => {
          window.grecaptcha.ready(async () => {
            const token = await window.grecaptcha.execute(site_key, {action: 'contact'})
            data.append('token', token);
            resolve()
          })
        }),
        result: async (res, form) => {
          const response = await res.json();

          console.log(response)


          form.reset();
        }
      }}
      >
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
          </div>
          <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a href="mailto:info@catagroup.com.au" class="text-blue-500">info@catagroup.com.au</a>
            <p class="my-5">
              <a href="https://www.google.com/maps/place/5%2F13+Expansion+St,+Molendinar+QLD+4214/" class="text-blue-500 leading-normal">Unit 5/13 Expansion St
                <br>Molendinar QLD 4214
              </a>
            </p>
          </div>
        </div>
      </div>
      </form>
    </div>
  </section>
</footer>