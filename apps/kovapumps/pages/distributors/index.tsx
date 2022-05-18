import { gql } from "graphql-request";
import Layout from "../../components/Layout";
import api from "../../lib/api";
import { DistributorPageItemsQuery } from "../../lib/api/generated/graphql";

export default function DistributorPageItems({ categories }: DistributorPageItemsQuery) {
  return <Layout categories={categories}>
    <h1>Hi</h1>
  </Layout>
}

gql`
query DistributorPageItems {
  categories {
    ...HeaderCategoryFields
  }
}
`

export async function getStaticProps({ params }) {
  const { categories } = await api.DistributorPageItems()

  return {
    props: {
      categories
    }
  }
}