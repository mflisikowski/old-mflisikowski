import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import '@/styles/tailwind.css';
import 'focus-visible';

export default function App({ Component, pageProps }) {
  const { route = null, social = null } = pageProps;
  return (
    <>
      {pageProps?.page?.fullscreen && (
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100" />
          </div>
        </div>
      )}

      <div className="relative flex h-screen flex-col">
        <Header route={route} />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer socials={social} />
      </div>
    </>
  );
}
