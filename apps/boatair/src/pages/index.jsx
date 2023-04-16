import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>BoatAir - Quality Marine Air Conditioning</title>
        <meta
          name="description"
          content="BoatAir - Quality Marine Air Conditioning"
        />
      </Head>
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
