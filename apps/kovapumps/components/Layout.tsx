import { HeaderCategoryFieldsFragment } from '../lib/api/generated/graphql'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  categories: ReadonlyArray<HeaderCategoryFieldsFragment>
  children: React.ReactNode
}

export default function Layout({ categories, children }: LayoutProps) {
  return (
    <>
      <Header categories={categories} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
