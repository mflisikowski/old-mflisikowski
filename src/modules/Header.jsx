import { Container } from './Container';

export function Header() {
  return (
    <>
      <header className="pointer-events-none relative z-50 flex flex-col">
        <div className="top-0 z-10 h-16 pt-6">
          <Container className="w-full">
            <div className="relative flex gap-4">
              <div className="flex flex-1">Logo here</div>
              <div className="flex flex-1 justify-end md:justify-center">
                Navigation here
              </div>
              <div className="flex justify-end md:flex-1"></div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}
