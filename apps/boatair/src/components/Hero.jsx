import Image from 'next/future/image'
import { Container } from '@/components/Container'
import boatair from '@/images/boatair-solo.svg'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function Hero() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="py-8 text-center relative">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          <Image src={boatair} className="max-w-1/3 max-h-28 text-white" alt="boatair logo" />
          <span className="sr-only">boatair</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-3xl tracking-tight text-white">
          Quality Marine Air Conditioning
        </p>
      </Container>
    </section>
  )
}
