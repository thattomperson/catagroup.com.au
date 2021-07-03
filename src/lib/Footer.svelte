<script lang="ts">
  import { enhance } from '$lib/form';
  import { toast } from '@zerodevx/svelte-toast'
  const site_key = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string;
</script>

<footer>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          If you or company want to get into contact to purchase or start stocking our products?<br>Use the form below and we will get in contact with you
        </p>
      </div>
      <form
        action="/contact"
        method="post"
        use:enhance={{
          pending: (data, form) =>
            new Promise((resolve) => {
              window.grecaptcha.ready(async () => {
                const token = await window.grecaptcha.execute(site_key, { action: 'contact' });
                data.append('token', token);
                resolve();
              });
            }),
          result: async (res, form) => {
            const response = await res.json();

            if (response.success) {
              toast.push('Success', {
                theme: {
                  '--toastBackground': '#48BB78',
                  '--toastProgressBackground': '#2F855A'
                }
              });
            } else {
              toast.push('Something went wrong', {
                theme: {
                  '--toastBackground': '#F56565',
                  '--toastProgressBackground': '#C53030'
                }
              });
            }

            form.reset();
          },
        }}
      >
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">Name <span class="text-red-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">Email <span class="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600">Message <span class="text-red-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  required
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <button
                class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >Send</button
              >
            </div>
            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a href="mailto:info@catagroup.com.au" class="text-blue-500">info@catagroup.com.au</a>
              <p class="my-5">
                <a href="tel:0755396439"class="text-blue-500">Office 07 5539 6439</a><br>
                <a href="tel:0424623743"class="text-blue-500">Mobile 0424 623 743</a>
              </p>
              <p class="my-5">
                <a
                  href="https://www.google.com/maps/place/5%2F13+Expansion+St,+Molendinar+QLD+4214/"
                  class="text-blue-500 leading-normal"
                  >Unit 5/13 Expansion St
                  <br />Molendinar QLD 4214
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</footer>
