/* This example requires Tailwind CSS v2.0+ */
import { gql } from 'graphql-request'
import { DistributorListQuery } from '../lib/api/generated/graphql'
import Distributor from './Distributor'

gql`
query DistributorList {
  areas(orderBy: priority_DESC) {
    id
    name
    distributors {
      id
      name
      email
      address
      telephone
      website
      logo {
        width
        url
        height
      }
    }
  }
}
`


export default function DistributorList({ areas }: { areas: DistributorListQuery['areas'] }) {
  return (
    <>
      <h3 className='px-4 sm:px-6 md:px-0 text-3xl font-extrabold text-gray-900'>Distributors</h3>
      {areas.map((area) => {
        return <div className='pt-8' key={area.id}>
          <h4 className='px-4 sm:px-6 md:px-0 text-2xl font-extrabold text-gray-900'>{area.name}</h4>
          <ul role="list" className="mx-auto pt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {area.distributors.map(distributor => <Distributor key={distributor.id} distributor={distributor} />)}
          </ul>
        </div>
      })}
    </>
  )
}