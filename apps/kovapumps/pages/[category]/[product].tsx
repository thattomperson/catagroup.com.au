import { useState } from 'react'
import { CurrencyDollarIcon, GlobeIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { ProductPageItemQuery } from '../../lib/api/generated/graphql'

import { RadioGroup } from '@headlessui/react'
import Link from 'next/link'

const policies = [
  { name: '2 Year Warranty', icon: GlobeIcon, description: 'Send your pump back to us and we will replace it' },
  { name: 'Rated for continuous run', icon: CurrencyDollarIcon, description: "Rated for 50,000 hours of continuous run time" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function ProductPageItem({ product, category, categories }: ProductPageItemQuery) {
  const [selectedVoltage, setSelectedVoltage] = useState(product.voltages[0])
  // const [selectedAccessory, setSelectedAccessory] = useState(product.accessories[0])
  return (
    <Layout categories={categories}>
      <div className="">
        <div className="pt-6 pb-16 sm:pb-24">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <ol role="list" className="flex items-center space-x-4">
              <li className="text-sm">
                <div className="flex items-center">
                  <Link href="/">
                    <a className="mr-4 font-medium text-gray-300 hover:text-gray-400">
                      Products
                    </a>
                  </Link>
                  <svg
                    viewBox="0 0 6 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-auto text-gray-300"
                  >
                    <path
                      d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <div className="flex items-center">
                  <Link href={`/${category.slug}`}>
                    <a className="mr-4 font-medium text-gray-300 hover:text-gray-400">
                      {category.name}
                    </a>
                  </Link>
                  <svg
                    viewBox="0 0 6 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-auto text-gray-300"
                  >
                    <path
                      d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <a
                  aria-current="page"
                  className="font-medium text-gray-300 hover:text-gray-400"
                >
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>

          <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-5 lg:col-start-8">
                <div className="flex justify-between">
                  <h1 className="text-xl font-medium text-gray-100">
                    {product.name}
                  </h1>
                </div>
              </div>

              {/* Image gallery */}
              <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                <h2 className="sr-only">Images</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                  {product.images.map((image, i) => (
                    <span
                      key={image.id}
                      className={classNames(
                        i === 0
                          ? 'lg:col-span-2 lg:row-span-2'
                          : 'hidden lg:block',
                        'relative rounded-lg bg-white bg-opacity-5 p-2',
                      )}
                    >
                      <Image
                        src={image.url}
                        alt={image.altText}
                        width="600px"
                        height="337px"
                        layout="responsive"
                        objectFit="contain"
                        objectPosition="top"
                      />
                    </span>
                  ))}
                </div>

                {/* Policies */}
                <section aria-labelledby="policies-heading" className="mt-10">
                  <h2 id="policies-heading" className="sr-only">
                    Our Policies
                  </h2>

                  <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {policies.map((policy) => (
                      <div
                        key={policy.name}
                        className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 text-center"
                      >
                        <dt>
                          <policy.icon
                            className="mx-auto h-6 w-6 flex-shrink-0 text-neutral-200"
                            aria-hidden="true"
                          />
                          <span className="mt-4 text-sm font-medium text-neutral-100">
                            {policy.name}
                          </span>
                        </dt>
                        <dd className="mt-1 text-sm text-neutral-300">
                          {policy.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              </div>

              <div className="lg:col-span-5">
                {/* Product details */}
                {product.description ? (
                  <div className="mt-10">
                    <h2 className="text-sm font-medium text-gray-100">
                      Description
                    </h2>

                    <div className="prose prose-sm mt-4 text-gray-300">
                      {product.description}
                    </div>
                  </div>
                ) : null}

                {/* Voltage picker */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-100">
                      Voltage
                    </h2>
                  </div>

                  <RadioGroup
                    value={selectedVoltage}
                    onChange={setSelectedVoltage}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a voltage
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-3">
                      {product.voltages.map((voltage) => (
                        <RadioGroup.Option
                          key={voltage.voltage}
                          value={voltage}
                          className={({ active, checked }) =>
                            classNames(
                              true
                                ? 'cursor-pointer focus:outline-none'
                                : 'cursor-not-allowed opacity-25',
                              active
                                ? 'ring-2 ring-indigo-500 ring-offset-2'
                                : '',
                              checked
                                ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
                                : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                              'flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium sm:flex-1',
                            )
                          }
                          disabled={false}
                        >
                          <RadioGroup.Label as="p" className="text-center">
                            {voltage.voltage}/{voltage.hertz}Hz
                          </RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Pump performance cures  */}
                {selectedVoltage ? (
                  <>
                    <div className="mt-8">
                      <h2 className="text-sm  font-medium text-gray-100">
                        Pump Curves - {selectedVoltage.voltage}
                      </h2>
                      <Image
                        src={selectedVoltage.curve.url}
                        alt={selectedVoltage.curve.altText}
                        width="600px"
                        height="337px"
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="top"
                      />
                    </div>

                    <div className="mt-10 border-t border-gray-200 pt-10">
                      <h2 className="text-sm  font-medium text-gray-100">
                        Pump Power - {selectedVoltage.voltage}
                      </h2>
                      <div className="prose prose-sm mt-4 text-gray-300">
                        <ul role="list">
                          <li>
                            <strong>Watts:</strong> {selectedVoltage.watts}
                          </li>
                          <li>
                            <strong>Amps:</strong> {selectedVoltage.amps}
                          </li>
                          <li>
                            <strong>Hertz:</strong> {selectedVoltage.hertz}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : null}

                {/* Product details */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { gql } from 'graphql-request';
import api from '../../lib/api'
import Layout from '../../components/Layout'

gql`
query ProductPageItem($product: String!, $category: String!) {
  product(where: {slug: $product}) {
    id
    name
    slug
    description
    voltages {
      id
      voltage
      amps
      watts
      hertz
      curve {
        id
        url
        altText
        width
        height
      }
    }
    images {
      id
      url
      altText
      width
      height
    }
  }
  category(where: {slug: $category}) {
    name
    slug
  }
  categories {
    ...HeaderCategoryFields
  }
}
`

gql`
query ProductPageItems {
  products {
    id
    slug
    categories {
      slug
    }
  }
}
`

export async function getStaticProps({ params }) {
  const { product, category, categories } = await api.ProductPageItem({ product: params.product, category: params.category })

  return {
    props: {
      product,
      category,
      categories
    }
  }
}

export async function getStaticPaths() {
  const { products } = await api.ProductPageItems();

  return {
    paths: products.map(product => {
      return product.categories.map(category => {
        return { params: { category: category.slug, product: product.slug } };
      })
    }).flat(),
    fallback: false
  }
}
