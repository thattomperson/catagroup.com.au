import { gql } from 'graphql-request';
import api from "../../lib/api";
import Layout from "../../components/Layout";
import Products from "../../components/Products";
import { CategoryPageItemQuery } from '../../lib/api/generated/graphql';

export default function CategoryPageItem({ categories, category }: CategoryPageItemQuery) {
  return (
    <Layout categories={categories}>
      <Products category={category} products={category.products} />
    </Layout>
  );
}

gql`
query CategoryPageItem($slug: String!) {
  category(where: {slug: $slug}) {
    name
    slug
    description
    products {
      ... on Product {
        name
        slug
        description
        images(first: 1) {
          id
          url
          altText
          width
          height
        }
      }
    }
  }
  categories {
    ...HeaderCategoryFields
  }
}
`

gql`
query CategoryPageItems {
  categories {
    ...HeaderCategoryFields
  }
}
`

export async function getStaticProps({ params }) {
  const { category, categories } = await api.CategoryPageItem({ slug: params.category })

  return {
    props: {
      category,
      categories
    }
  }
}

export async function getStaticPaths() {
  const { categories } = await api.CategoryPageItems()

  return {
    paths: categories.map(category => ({ params: { category: category.slug }})),
    fallback: false
  }
}
