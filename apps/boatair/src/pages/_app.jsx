import 'focus-visible'
import '@/styles/tailwind.css'
import { useFathom } from 'fathom';

export default function App({ Component, pageProps }) {
  useFathom(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
    includedDomains: [process.env.NEXT_PUBLIC_VERCEL_URL],
  });

  return <Component {...pageProps} />
}
