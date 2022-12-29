import { Container } from '@/modules/Container';
import Link from 'next/link';

export function Footer({ socials }) {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {socials?.map(({ id, url, name, mailto }) => (
                  <Link
                    key={id}
                    className="group -m-1 p-1"
                    aria-label={name}
                    target="_blank"
                    href={url.length > 0 ? url : mailto}
                  >
                    {name}
                  </Link>
                ))}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()}
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}
