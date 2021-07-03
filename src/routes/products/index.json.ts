import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

import gobiusImage from '../../content/gobius.png';
import kovaImage from '../../content/kova.png';
import masterImage from '../../content/master-vent.png';
import arcticImage from '../../content/arctic-steel.jpg';

// GET /todos.json
export const get: RequestHandler<Locals> = async (request) => {
  return {
    body: [
      {
        name: 'Gobius',
        image: gobiusImage,
        description: `Gobius level indicator kits are different.
        Never will you need to clean your black
        water tank level kit again. Gobius is an
        internationally patented, innovative
        product with technology that is best
        described as “knock and listen”.`,
        link: 'https://www.gobiuspro.com/',
      },
      {
        name: 'Kova Pump',
        image: kovaImage,
        description: `KOVA Pumps are manufactured for the marine industry and
        made to last. Leak free quality magnetic pumps can be
        used in all industries.`,
        link: 'https://www.kovapumps.com.au/',
      },
      {
        name: 'Master Vent',
        image: masterImage,
        description: `Master Vent is an industrial grade OxPure Activated Carbon filter that is
        impregnated with Potassium Hydroxide (KOH). This is the same impregnated
        Activated Carbon used in commercial municipal sewage treatment plants in
        Australia, USA & Europe.`,
        link: 'https://www.catagroup.com.au/p/master-vent',
      },
      {
        name: 'Arctic Steel',
        image: arcticImage,
        description: `Dixon’s range of Arctic Steel strainers,
        cast in superior 2205 stainless steel are highly corrosion resistant and
        compatible for all marine applications. Available in both BISO and SISO versions,
        these are suitable for commercial and military vessels operating under survey,
        super yachts and recreational motor and sailing yachts.`,
        link: 'https://arcticsteel.com.au/',
      },
    ],
  };
};
