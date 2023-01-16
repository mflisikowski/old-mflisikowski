import { MFDLogo } from '@/icons/MFDLogo';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';

function DesktopNavigationItem({ href, children }) {
  let isActive = useRouter().pathname === href;

  const className = clsx(
    'relative block px-3 py-2 transition',
    isActive ? 'text-indigo-500 ' : 'hover:text-indigo-500'
  );

  return (
    <li className={href === '/' ? 'order-first' : null}>
      <Link href={href} className={className}>
        {children}
        {isActive && href !== '/' && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0" />
        )}
      </Link>
    </li>
  );
}

export function DesktopNavigation({ className, route }) {
  return (
    <nav className={clsx(className, 'fixed top-16 z-50 backdrop-filter')}>
      <ul className="flex overflow-hidden rounded-full bg-white/70 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
        {Array.isArray(route) &&
          route
            .filter((route) => !route.hidden)
            .map(({ page, href, id }) => (
              <DesktopNavigationItem key={id} href={href}>
                {href === '/' ? (
                  <MFDLogo className="mt-1 h-4 w-4 fill-zinc-800 " />
                ) : (
                  page.title
                )}
              </DesktopNavigationItem>
            ))}
      </ul>
    </nav>
  );
}
