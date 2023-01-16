import { Container } from '@/components/Container';
import Link from 'next/link';

export function Footer({ socials }) {
  return (
    <footer>
      <Container.Outer>
        <div className="mt-16 border-t border-zinc-100 pt-10 pb-16">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800">
                {socials?.map(({ id, url, name, mailto }) => {
                  const href = url.length > 0 ? url : mailto;
                  return (
                    <Link
                      key={id}
                      className="group -m-1 p-1"
                      aria-label={name}
                      target="_blank"
                      href={href}
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
              <p className="text-sm text-zinc-800">
                &copy; {new Date().getFullYear()}
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}
