import { Button } from "ui";


export default function Categories({ categories, category }) {
  return (
    <Layout categories={categories}>
      <div>
        <h1>{category.name}</h1>

        {category.products.map((product) => {
          return <>
            <h2>{product.name}</h2>
          </>
        })}
      </div>
    </Layout>
  );
}


import { gql } from 'graphql-request';
import api from "../../lib/api";
import Layout from "../../components/Layout";


gql`
query CategoryPageItems {
  categories {
    name
    slug
  }
}

`

gql`
query CategoryPageItem($slug: String!) {
  category(where: {slug: $slug}) {
    name
    slug
    products {
      ... on Product {
        name
        slug
      }
    }
  }
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
