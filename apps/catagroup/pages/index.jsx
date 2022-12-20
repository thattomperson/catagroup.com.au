import Head from 'next/head'

import { CallToAction } from '../components/CallToAction'
import { Faqs } from '../components/Faqs'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Pricing } from '../components/Pricing'
import { MasterVent } from '../components/MasterVent'
import { SecondaryFeatures } from '../components/SecondaryFeatures'
import { Testimonials } from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>CATA Group | Marine Products</title>
        <meta
          name="description"
          content="Manufacturing and import best in class marine products for the marine industry."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <MasterVent />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
