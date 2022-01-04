// import Footer from './footer'
import Header from './Header'

export default function Layout({ categories, children }) {
  return (
    <>
      <Header categories={categories} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  )
}
