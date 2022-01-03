import { Button } from "ui";


export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}


import { gql } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';


const graphcms = new GraphQLClient(
  'https://api-ap-southeast-2.graphcms.com/v2/ckxxxt3qb1lft01web6320pnu/master'
);

const LIST = gql`

  {
    categories {
      id
      name
      slug
    }
  }
`

const SINGLE = gql`
query CategoryPageQuery($slug: String!) {
  category(where: {slug: $slug}) {
    id
    name
    slug
  }
}

`

export async function getStaticProps({ params }) {
  const { category } = await graphcms.request(
    SINGLE,
    { slug: params.category }
  )

  return {
    props: {
      category
    }
  }
}

export async function getStaticPaths() {
  const { categories } = await graphcms.request(LIST)


  return {
    paths: categories.map(category => ({ params: { category: category.slug }})),
    fallback: false
  }
}
