import { useMemo, useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { CurrencyDollarIcon, GlobeIcon } from '@heroicons/react/outline'
import Image from 'next/image'

import { RadioGroup } from '@headlessui/react'
import Link from 'next/link'

const product = {
  name: 'KP2400',
  rating: 3.9,
  reviewCount: 512,
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'KOVA Pumps', href: '/' },
    { id: 2, name: 'Centrifugal Pumps', href: '/kp' },
  ],
  images: [
    {
      id: 1,
      imageSrc: '/images/kova2400/1.png',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: '/images/kova2400/2.png',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: '/images/kova2400/3.png',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: false,
    },
  ],
  voltages: [
    { id: '240vac', name: '240vac', inStock: true },
    { id: '110vac', name: '110vac', inStock: true },
    { id: '12vdc', name: '12vdc', inStock: true },
    { id: '24vdc', name: '24vdc', inStock: true },
  ],
  accessories: [
    { id: 'none', name: 'None', inStock: true },
    { id: 'mount', name: 'Vibration Mount', inStock: true },
    { id: 'mount&strainer', name: 'Vibration Mount & Strainer', inStock: true }
  ],
  description: `
    <p>The KP2400 is a workhorse that can handle pretty much any task you can throw at it. Available in 240, 110 VAC and 24, 12 VDC this pump can handle anything</p>
    <p>Pumping 2400 liters a minute in such a small footprint in a feat in itself</p>
  `,
}

const policies = [
  { name: '2 Year Warranty', icon: GlobeIcon, description: 'Send your pump back to us and we will replace it' },
  { name: 'Rated for continuous run', icon: CurrencyDollarIcon, description: "Rated for 50,000 hours of continuous run time" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [selectedVoltage, setSelectedVoltage] = useState(product.voltages[0])
  const [selectedAccessory, setSelectedAccessory] = useState(product.accessories[0])

  const details = useMemo(() => {
    switch (selectedVoltage.id) {
      case '240vac':
        return {
          curve: <path d="m0,115.88333c173,1 285,75 288,182" stroke="currentColor" strokeWidth="3px" fill="none" />
        }
      case '110vac':
        return {
          curve: <path d="m0,130.88333c173,1 285,75 288,182" stroke="currentColor" strokeWidth="3px" fill="none" />
        }
      case '12vdc':
        return {
          curve: <path d="m-50,130.88333c173,1 285,75 288,182" stroke="currentColor" strokeWidth="3px" fill="none" />
        }
      case '24vdc':
        return {
          curve: <path d="m-50,115.88333c173,1 285,75 288,182" stroke="currentColor" strokeWidth="3px" fill="none" />
        }
    }


  }, [selectedVoltage])

  return (
    <div className="">
      <div className="pt-6 pb-16 sm:pb-24">
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol role="list" className="flex items-center space-x-4">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <Link href={breadcrumb.href}>
                    <a className="mr-4 text-sm font-medium text-gray-100">
                      {breadcrumb.name}
                    </a>
                  </Link>
                  <svg
                    viewBox="0 0 6 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-auto text-gray-300"
                  >
                    <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-300 hover:text-gray-400">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-8 lg:col-span-5">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-100">{product.name}</h1>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                {product.images.map((image) => (
                  <span
                    key={image.id}
                    className={classNames(
                      image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                      'rounded-lg bg-white bg-opacity-5 relative'
                    )}
                  >
                    <Image
                      src={image.imageSrc}
                      alt={image.imageAlt}
                      width="600px"
                      height="337px"
                      layout='responsive'
                      objectFit='cover'
                      objectPosition='top'
                    />
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-100">Description</h2>

                <div
                  className="mt-4 prose prose-sm text-gray-400"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              {/* Policies */}
              <section aria-labelledby="policies-heading" className="mt-10">
                <h2 id="policies-heading" className="sr-only">
                  Our Policies
                </h2>

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {policies.map((policy) => (
                    <div key={policy.name} className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 text-center">
                      <dt>
                        <policy.icon className="mx-auto h-6 w-6 flex-shrink-0 text-neutral-200" aria-hidden="true" />
                        <span className="mt-4 text-sm font-medium text-neutral-100">{policy.name}</span>
                      </dt>
                      <dd className="mt-1 text-sm text-neutral-300">{policy.description}</dd>
                    </div>
                  ))}
                </dl>
              </section>


              {/* Voltage picker */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-300">Voltage</h2>
                </div>

                <RadioGroup value={selectedVoltage} onChange={setSelectedVoltage} className="mt-2">
                  <RadioGroup.Label className="sr-only">Choose a voltage</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-3">
                    {product.voltages.map((voltage) => (
                      <RadioGroup.Option
                        key={voltage.name}
                        value={voltage}
                        className={({ active, checked }) =>
                          classNames(
                            voltage.inStock ? 'cursor-pointer focus:outline-none' : 'opacity-25 cursor-not-allowed',
                            active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                            checked
                              ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                              : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                            'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                          )
                        }
                        disabled={!voltage.inStock}
                      >
                        <RadioGroup.Label as="p" className="text-center">{voltage.name}</RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Pump performance cures  */}
              <div className="mt-8">
                <h2 className="text-sm  font-medium text-gray-100">Pump Curves - {selectedVoltage.name}</h2>

                <div className="mt-4 text-gray-400">
                  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                    <line y2="300" x2="0" y1="0" x1="0" stroke="currentColor" fill="none" />
                    <line y2="300" x2="400" y1="300" x1="0" stroke="currentColor" fill="none" />
                    <line y2="300" x2="50" y1="300" x1="50" stroke="currentColor" fill="none" />
                    <line y2="300" x2="50" y1="0" x1="50" stroke="currentColor" fill="none" />
                    <line y2="300" x2="100" y1="0" x1="100" stroke="currentColor" fill="none" />
                    <line y2="300" x2="150" y1="0" x1="150" stroke="currentColor" fill="none" />
                    <line y2="300" x2="200" y1="0" x1="200" stroke="currentColor" fill="none" />
                    <line y2="300" x2="250" y1="0" x1="250" stroke="currentColor" fill="none" />
                    <line y2="300" x2="300" y1="0" x1="300" stroke="currentColor" fill="none" />
                    <line y2="300" x2="350" y1="0" x1="350" stroke="currentColor" fill="none" />
                    <line y2="300" x2="400" y1="0" x1="400" stroke="currentColor" fill="none" />
                    {details.curve}
                  </svg>
                </div>
              </div>

              {/* Accessory picker */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-300">Accessories</h2>
                </div>

                <RadioGroup value={selectedAccessory} onChange={setSelectedAccessory} className="mt-2">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-3 gap-3">
                    {product.accessories.map((accessory) => (
                      <RadioGroup.Option
                        key={accessory.name}
                        value={accessory}
                        className={({ active, checked }) =>
                          classNames(
                            accessory.inStock ? 'cursor-pointer focus:outline-none' : 'opacity-25 cursor-not-allowed',
                            active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                            checked
                              ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                              : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                            'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                          )
                        }
                        disabled={!accessory.inStock}
                      >
                        <RadioGroup.Label as="p" className="text-center">{accessory.name}</RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




import { gql } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';


const graphcms = new GraphQLClient(
  'https://api-ap-southeast-2.graphcms.com/v2/ckxxxt3qb1lft01web6320pnu/master'
);

const LIST = gql`
query MyQuery {
  products {
    name
    slug
    categories {
      ... on Category {
        name
        slug
      }
    }
  }
}

`

const SINGLE = gql`
query CategoryPageQuery($slug: String!) {
  category(where: {slug: $slug}) {
    id
    name
    slug
  }
}
`

// export async function getStaticProps({ params }) {
//   const { product } = await graphcms.request(
//     SINGLE,
//     { slug: params.product }
//   )

//   return {
//     props: {
//       product
//     }
//   }
// }

export async function getStaticPaths() {
  const { products } = await graphcms.request(LIST)

  return {
    paths: products.map(product => {
      return product.categories.map(category => {
        return { params: { category: category.slug, product: product.slug } };
      })
    }).flat(),
    fallback: false
  }
}