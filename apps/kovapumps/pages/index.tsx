import Image from 'next/image'
import Link from 'next/link';
import Layout from '../components/Layout';
import { gql } from 'graphql-request'
import api from '../lib/api'

export default function Home({ categories }) {
  return (
    <Layout preview={false} categories={categories}>
      <div className="">
        <div className="max-w-2xl mx-auto px-4sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-50">Customers also purchased</h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {categories.map((category) => (
              <div key={category.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200  rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                  <Image
                    src={category.image?.url}
                    alt={category.imageAlt}
                    width={category.image?.width}
                    height={category.image?.height}
                    objectFit="cover"
                    layout="responsive"
                    className="min-h-80 aspect-w-1 aspect-h-1 lg:h-80"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/${category.slug}`}>
                        <a>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {category.name}
                        </a>
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{category.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{category.price}</p>
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