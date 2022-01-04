import Image from 'next/image'

export default function Card({ image, children }) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <Image className="h-48 w-full object-cover" src={image} width={512} height={image.height / (image.width / 512)} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <span className="block mt-2">
            <p className="mt-3 text-base text-gray-500">{children}</p>
          </span>
        </div>
      </div>
    </div>
  )
}