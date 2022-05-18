import { gql } from "graphql-request";
import Layout from "../../components/Layout";
import api from "../../lib/api";
import { DistributorPageItemQuery } from "../../lib/api/generated/graphql";

export default function DistributorPageItem({ categories }: DistributorPageItemQuery) {
  return <Layout categories={categories}>
    <h1>Hi</h1>
  </Layout>
}

gql`
query DistributorPageItem {
  categories {
    ...HeaderCategoryFields
  }
}
`

export async function getStaticProps({ params }) {
  const { categories } = await api.DistributorPageItem()

  return {
    props: {
      categories
    }
  }
}