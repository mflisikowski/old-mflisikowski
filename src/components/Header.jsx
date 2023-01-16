import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';
import { Container } from '@/components/Container';

export function Header({ route }) {
  return (
    <>
      <header className="pointer-events-none flex flex-col">
        <Container className="w-full pt-16">
          <div className="flex gap-4">
            <div className="flex flex-1 justify-end md:justify-center">
              <MobileNavigation
                className="pointer-events-auto md:hidden"
                route={route}
              />
              <DesktopNavigation
                className="pointer-events-auto hidden md:block"
                route={route}
              />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
