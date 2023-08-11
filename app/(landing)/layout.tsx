/**
 * A layout component for a landing page.
 * 
 * @param children - The content to be rendered inside the layout component.
 * @returns The layout component with the provided content.
 */

interface LandingLayoutProps {
  children: React.ReactNode;
};

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}
