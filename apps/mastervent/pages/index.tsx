import Image from 'next/image'

import CardList from '../components/CardList';
import Card from '../components/Card';

import logo from '../assets/logo.png'
import masterVent from '../assets/master-vent.png'
import impregnated from '../assets/impregnated.png'
import basic from '../assets/basic.png'
import crossSection from '../assets/cross-section.png'

import api, { DistributorListQuery } from '../lib/api'
import DistributorList from '../components/DistributorList';
import Footer from '../components/Footer';

export default function Home({ areas }: { areas: DistributorListQuery['areas'] }) {
  return (
    <>
      <header className="bg-gradient-to-b from-[#16488D] to-[#2858A8]">
        <div className='max-w-3xl mx-auto px-10 lg:px-32 py-10'>
          <Image src={logo} width={688} height={logo.height / (logo.width / 688)} alt="Master Vent" layout='responsive' />
        </div>
      </header>

      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Master Vent Holding Tank Odour Filters
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              Sewage holding tanks need to be vented. The best way for your waste tank
              to breathe and remove the bad smell known as Hydrogen Sulfide (H2S) is to
              have a quality impregnated Activated Carbon filter in the vent line.
              Master Vent is purpose made for maximum removal of H2S odours.
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>
              Master Vent is an industrial grade OxPure Activated Carbon filter that is
              impregnated with Potassium Hydroxide (KOH). This is the same impregnated
              Activated Carbon used in commercial municipal sewage treatment plants in
              Australia, USA &amp; Europe.
            </p>
            <p>
              Australian made and designed for easy installation by having a multiple staged
              tail for different size hoses 16mm-5/8&quot; 19mm-3/4&quot; 25mm-1&quot; 38mm-1 1/2&quot;.
            </p>
            <p>
              Master Vent comes with a mount kit, but for easy change over it will also fit
              into other brand brackets like Sealand, Dometic, Airforce etc.
            </p>
            <p>
              Filled with 350 grams of OxPure industrial grade impregnated Activated KOH
              Carbon makes Master Vent one of heaviest and longer lasting
              odour filters on the market.
            </p>
            <figure>
              <Image src={masterVent} width={735} height={masterVent.height / (masterVent.width / 735)} alt="Master Vent" layout='responsive' />
            </figure>
            <h2>Don&apos;t be fooled, there is a difference..</h2>
            <CardList>
              <Card image={impregnated}>
                Master Vent uses a quality industrial grade OxPure 4B-KOH Activated Carbon
                that is impregnated with Potassium Hydroxide. Made specifically for removing
                the maximum amount of H2S odours.
              </Card>
              <Card image={basic}>
                Most other brands use a standard Non impregnated carbon.
                The same commonly used in fish tank filters.
              </Card>
            </CardList>
            <figure>
              <Image src={crossSection} alt="Master Vent cut to reveal the carbon and foam filter inside" width={735} height={crossSection.height / (crossSection.width / 735)} layout='responsive' />
            </figure>
            <p>
              Master Vent has a 25PPIQDF moisture resistant foam filter in each end for a
              smooth clear air flow. The outer housing and tails made from a tough PN9PVC
              for harsh environments. Master Vent 440mm Long x 65mm Wide.
            </p>
          </div>
        </div>
      </div>
      <div className='container max-w-2xl lg:max-w-7xl mx-auto'>
        <DistributorList areas={areas} />
      </div>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { areas } = await api.DistributorList();

  return {
    props: {
      areas
    }
  }
}