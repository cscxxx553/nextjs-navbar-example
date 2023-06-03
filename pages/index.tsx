import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <main>
        {/* <Navbar /> */}
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
