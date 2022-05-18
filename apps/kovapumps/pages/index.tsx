import Image from 'next/image'
import Link from 'next/link';
import Layout from '../components/Layout';
import { gql } from 'graphql-request'
import api from '../lib/api'
import { HomeCategoryListQuery } from '../lib/api/generated/graphql';
import { ChevronRightIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home({ categories }: HomeCategoryListQuery) {
  console.log(categories)

  return (
    <Layout categories={categories}>
      <div className="">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">The Perfect Pump for everything</h2>
            {/* <p className="mt-4 text-gray-300">
              As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a
              fabric sleeve that matches in quality and looks.
            </p> */}
          </div>

          <div className="mt-16 space-y-16">
            {categories.map((category, categoryIdx) => (
              <div
                key={category.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
              >
                <div
                  className={classNames(
                    categoryIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                    'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                  )}
                >
                  <h3 className="text-lg font-medium text-gray-100">{category.name}</h3>
                  <p className="mt-2 text-sm text-gray-300">{category.description}</p>
                  <p>
                    <Link href={`/${category.slug}`}>
                      <a className="inline-flex items-center mt-4 text-sm font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50">
                        View all {category.name} <ChevronRightIcon className='w-6' />
                      </a>
                    </Link>
                  </p>
                </div>
                <div
                  className={classNames(
                    categoryIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                    'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                  )}
                >
                  <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-800 overflow-hidden">
                    <Image
                      src={category.image.url}
                      alt={category.image.altText}
                      width={500}
                      height={200}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

gql`
query HomeCategoryList {
  categories {
    ...HeaderCategoryFields

    name
    slug
    image {
      height
      width
      url
      altText
    }
  }
}
`

export async function getStaticProps({ params }) {
  const { categories } = await api.HomeCategoryList()

  return {
    props: {
      categories
    }
  }
}