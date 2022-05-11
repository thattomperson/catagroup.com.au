import Image from "next/image";
import Link from "next/link";

export default function Product({ product, category }) {
  return (
    <Link
      href={`/${category.slug}/${product.slug}`}
    >
      <a
        className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
      >
        <div className="bg-gray-200 group-hover:opacity-75 sm:aspect-none aspect-square flex">
          {product.images.map(image => (
            <Image
              key={image.id}
              src={image.url}
              alt={image.altText}
              width={512}
              height={image.height / (image.width / 512)}
              objectFit="contain"
              className="sm:w-full sm:h-full"
            />
          ))}
        </div>
        <div className="flex-1 p-4 space-y-2 flex flex-col">
          <h3 className="text-sm font-medium text-gray-900">
            {/* <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a> */}
          </h3>
          {/* <p className="text-sm text-gray-500">{product.description}</p>
          <div className="flex-1 flex flex-col justify-end">
            <p className="text-sm italic text-gray-500">{product.options}</p>
            <p className="text-base font-medium text-gray-900">{product.price}</p>
          </div> */}
        </div>
      </a>
    </Link>
  )
}