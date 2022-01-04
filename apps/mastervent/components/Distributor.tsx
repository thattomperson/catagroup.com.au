/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { DistributorListQuery } from '../lib/api'

export default function Distributor({ distributor }: { distributor: DistributorListQuery['areas'][0]['distributors'][0] }) {
  return (
    <li
      key={distributor.email}
      className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <div className="flex-1 flex flex-col p-8">
        <Image className="h-32 flex-shrink-0 mx-auto" width={distributor.logo.width} height={distributor.logo.height} src={distributor.logo.url} alt="" />
        <h3 className="mt-6 text-gray-900 text-sm font-medium">{distributor.name}</h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Address</dt>
          <dd className="text-gray-500 text-sm whitespace-pre-line">{distributor.address}</dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex flex-wrap divide-x divide-y divide-gray-200">
          {distributor.email ? <div className="min-w-[50%] flex-1 flex">
            <a
              href={`mailto:${distributor.email}`}
              className="relative -mr-px  flex-1 flex-col inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
            >
              <span className='flex-1 inline-flex items-center justify-center'>
                <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                <span className="ml-3">Email</span>
              </span>
              <span>{distributor.email}</span>
            </a>
          </div> : null}
          {distributor.telephone ? <div className="-ml-px min-w-[50%] flex-1 flex">
            <a
              href={`tel:${distributor.telephone}`}
              className="relative flex-col flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
            >
              <span className='flex-1 inline-flex items-center justify-center'>
                <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                <span className="ml-3">Call</span>
              </span>
              <span>{distributor.telephone}</span>
            </a>
          </div> : null}
          {distributor.website ? <div className="-ml-px min-w-[50%] flex-1 flex">
            <a
              href={distributor.website}
              target="_blank"
              rel="noreferrer"
              className="relative flex-col flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
            >
              <span className='flex-1 inline-flex items-center justify-center'>
                <GlobeAltIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                <span className="ml-3">Website</span>
              </span>
              <span>{distributor.website}</span>
            </a>
          </div> : null}
        </div>
      </div>
    </li>
  )
}