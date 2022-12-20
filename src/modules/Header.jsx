import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';
import { ArrowLeftIcon } from '@/icons/ArrowIcon';
import { Container } from '@/modules/Container';

import { useRouter } from 'next/router';
import Link from 'next/link';

export function Header() {
  let isHomePage = useRouter().pathname === '/';

  const routes = [
    {
      id: 1,
      label: 'Projects',
      href: '/projects',
    },
    {
      id: 2,
      label: 'Uses',
      href: '/uses',
    },
  ];

  return (
    <>
      <header className="pointer-events-none relative z-50 flex flex-col">
        <div className="top-0 z-10 h-16 pt-16">
          <Container className="top-[var(--header-top,theme(spacing.6))] w-full">
            <div className="relative flex gap-4">
              <div className="flex flex-1 items-center">
                {!isHomePage && (
                  <div className="w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400">
                    <Link
                      className="pointer-events-auto"
                      aria-label="Home"
                      href="/"
                    >
                      <ArrowLeftIcon />
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation
                  className="pointer-events-auto md:hidden"
                  routes={routes}
                />
                <DesktopNavigation
                  className="pointer-events-auto hidden md:block"
                  routes={routes}
                />
              </div>
              <div className="flex justify-end md:flex-1"></div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}
