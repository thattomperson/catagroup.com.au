import { useMemo, useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { CurrencyDollarIcon, GlobeIcon } from '@heroicons/react/outline'
import Image from 'next/image'

import KP2400 from '../../static/images/kova2400.png'
import { RadioGroup } from '@headlessui/react'
import Link from 'next/link'

const product = {
  name: 'KP2400',
  price: '$35',
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
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    'Only the best materials',
    'Ethically and locally made',
    'Pre-washed and pre-shrunk',
    'Machine wash cold with similar colors',
  ],
}

const policies = [
  { name: 'International delivery', icon: GlobeIcon, description: 'Get your order in 2 years' },
  { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [selectedVoltage, setSelectedVoltage] = useState(product.voltages[0])
  const [selectedAccessory, setSelectedAccessory] = useState(product.accessories[0])

  const details = useMemo(() => {

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
                <p className="text-xl font-medium text-gray-100">{product.price}</p>
              </div>
              {/* Reviews */}
              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-300">
                    {product.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                    ·
                  </div>
                  <div className="ml-4 flex">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      See all {product.reviewCount} reviews
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                {product.images.map((image) => (
                  <span
                    className={classNames(
                      image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                      'rounded-lg bg-white relative'
                    )}
                  >
                    <Image
                      key={image.id}
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
              {/* Voltage picker */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-300">Size</h2>
                </div>

                <RadioGroup value={selectedVoltage} onChange={setSelectedVoltage} className="mt-2">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
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

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-100">Description</h2>

                <div
                  className="mt-4 prose prose-sm text-gray-400"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-gray-100">Fabric &amp; Care</h2>

                <div className="mt-4 prose prose-sm text-gray-400">
                  <ul role="list">
                    {product.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Policies */}
              <section aria-labelledby="policies-heading" className="mt-10">
                <h2 id="policies-heading" className="sr-only">
                  Our Policies
                </h2>

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {policies.map((policy) => (
                    <div key={policy.name} className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
                      <dt>
                        <policy.icon className="mx-auto h-6 w-6 flex-shrink-0 text-gray-200" aria-hidden="true" />
                        <span className="mt-4 text-sm font-medium text-gray-100">{policy.name}</span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-300">{policy.description}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
