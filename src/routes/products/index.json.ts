import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

// GET /todos.json
export const get: RequestHandler<Locals> = async (request) => {
  return {
    body: [
      {
        name: 'Gobius',
        image: 'https://catagroup.com.au/216e2b3213d7435089695ef26c9f02b1.png',
        description: 'An awesome product',
        link: 'https://www.gobiuspro.com/',
      },
      {
        name: 'Kova Pump',
        image: 'https://catagroup.com.au/877d87c5741265e86727669c6985e1d0.png',
        description: 'An awesome product',
        link: 'https://www.kovapumps.com.au/',
      },
      {
        name: 'Master Vent',
        image: 'https://catagroup.com.au/622bcf21408eb097cfdd8fc0b884fdd6.png',
        description: 'An awesome product',
        link: 'https://www.catagroup.com.au/p/master-vent',
      },
      {
        name: 'Arctic Steel',
        image: 'https://catagroup.com.au/9bdf43ce36a6e3fd5dd941c31751532b.png',
        description: 'An awesome product',
        link: 'https://arcticsteel.com.au/',
      },
    ],
  };
};
