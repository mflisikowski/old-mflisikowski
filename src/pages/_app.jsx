import { Footer } from '@/modules/Footer';
import { Header } from '@/modules/Header';

import '@/styles/tailwind.css';
import 'focus-visible';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>

      <div className="relative">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer
          socials={[
            {
              id: '1',
              label: 'Github',
              href: 'https://github.com/mflisikowski',
            },
            {
              id: '2',
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/mateusz-flisikowski/',
            },
            {
              id: '3',
              label: 'Email',
              href: 'mailto:contact@mflisikowski.dev',
            },
          ]}
        />
      </div>
    </>
  );
}
