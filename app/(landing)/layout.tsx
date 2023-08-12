/**
 * A layout component for a landing page.
 * 
 * @param children - The content to be rendered inside the layout component.
 * @returns The layout component with the provided content.
 */

'use client'

import { Container } from '@/components/(landing)/container';
import Footer from '@/components/(landing)/footer';
import { GridPattern } from '@/components/(landing)/grid-pattern';
import Header from '@/components/(landing)/header';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';

interface LandingLayoutProps {
  children: React.ReactNode;
};

const LandingLayout = ({ children }: LandingLayoutProps) => {
  let shouldReduceMotion = useReducedMotion()
  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <motion.div style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} layout>
        <GridPattern
          className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-96}
          interactive
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        />

        <Container layout>
          <Header />
          {children}
          <Footer />
        </Container>
      </motion.div>
    </MotionConfig>
  )
}

export default LandingLayout;