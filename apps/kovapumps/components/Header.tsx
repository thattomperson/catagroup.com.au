/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  CursorClickIcon,
  GlobeIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Image from 'next/image'
import Link from 'next/link'
import { gql } from 'graphql-request'
import { HeaderCategoryFieldsFragment } from '../lib/api/generated/graphql'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const fragment = gql`
  fragment HeaderCategoryFields on Category {
    id
    name
    slug
    description
  }
`

type HeaderProps = {
  categories: ReadonlyArray<HeaderCategoryFieldsFragment>
}

export default function Header({ categories }: HeaderProps) {
  return (
    <Popover className="relative max-w-2xl lg:max-w-7xl mx-auto">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <a>
              <span className="sr-only">Kova Pumps</span>
              <Image
                className="h-8 w-auto sm:h-10"
                src="/images/logos/kova.png"
                alt=""
                objectFit="contain"
                width="300"
                height="124"
              />
            </a>
          </Link>
        </div>
        <Popover.Group as="nav" className="flex space-x-10">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-100' : 'text-gray-300',
                    'inline-flex items-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium group'
                  )}
                >
                  <span>Products</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-0 z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {categories.map((category) => (
                          <Link href={`/${category.slug}`} key={category.id}>
                            <a
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                <CursorClickIcon className="h-6 w-6" aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{category.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{category.description}</p>
                              </div>
                            </a>
                          </Link>
                        ))}
                      </div>
                      <div className="p-5 bg-gray-50 sm:p-8">
                        <Link href="/distributors">
                          <a className="-m-3 p-3 flex items-start rounded-md hover:bg-gray-100">
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                              <GlobeIcon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="flow-root ml-4">
                              <div className="flex items-center">
                                <div className="text-base font-medium text-gray-900">Find a distributer</div>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                Find a distributer near you to get prices and advice.
                              </p>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
      </div>
    </Popover>
  )
}
