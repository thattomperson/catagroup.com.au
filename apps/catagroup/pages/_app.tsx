import 'focus-visible'
import '../styles/globals.css'

import { useFathom } from 'fathom';

function App({ Component, pageProps }) {
  useFathom(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
    includedDomains: [process.env.NEXT_PUBLIC_VERCEL_URL],
  });

  return <Component {...pageProps} />;
}

export default App;
