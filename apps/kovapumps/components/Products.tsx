import { ChevronRightIcon } from "@heroicons/react/outline"
import Image from "next/image"
import Link from "next/link"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductPageItems({ products, category }) {
  return (
    <div className="">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">{category.name}</h2>
          <p className="mt-4 text-gray-300">
            {category.description}
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {products.map((product, productIdx) => (
            <div
              key={product.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
            >
              <div
                className={classNames(
                  // productIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                  'lg:col-start-1 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                )}
              >
                <h3 className="text-lg font-medium text-gray-100">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{product.description}</p>
                <p>
                  <Link href={`/${category.slug}/${product.slug}`}>
                    <a className="inline-flex items-center mt-4 text-sm font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50">
                      View {product.name} specifications <ChevronRightIcon className='w-6' />
                    </a>
                  </Link>
                </p>
              </div>
              <div
                className={classNames(
                  // productIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                  'lg:col-start-6 xl:col-start-5 flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                )}
              >
                <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-800 overflow-hidden">
                  <Image
                    src={product.images[0].url}
                    alt={product.images[0].altText}
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
  )
}

// export default function ProductPageItems({ products, category }) {
//   return (
//     <div className="">
//       <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//         <h2 className="sr-only">Products</h2>
//         <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
//           {products.map((product) => <Product category={category} product={product} key={product.id} />)}
//         </div>
//       </div>
//     </div>
//   )
// }