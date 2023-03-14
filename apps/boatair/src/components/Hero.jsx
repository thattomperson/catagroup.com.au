import Image from 'next/future/image'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="py-32 text-center">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        BoatAir
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Quality Marine Air Conditioning
      </p>

    </Container>
  )
}
