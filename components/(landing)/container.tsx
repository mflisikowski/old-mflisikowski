"use client";

import { motion } from "framer-motion";
import { ForwardRefRenderFunction } from "react";

/**
 * Common properties for container components.
 */
interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

/**
 * An outer container component.
 *
 * @param className - Additional CSS class names.
 * @param children - Content to be rendered inside the container.
 * @param props - Additional props.
 * @param ref - Forwarded ref.
 */
const OuterContainer: ForwardRefRenderFunction<
  HTMLDivElement,
  ContainerProps
> = ({ className = "", children, ...props }, ref) => (
  <motion.div ref={ref} className={`sm:px-8 ${className}`} {...props}>
    <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
  </motion.div>
);

/**
 * An inner container component.
 */
const InnerContainer: ForwardRefRenderFunction<
  HTMLDivElement,
  ContainerProps
> = ({ className = "", children, ...props }, ref) => (
  <motion.div
    className={`relative px-4 sm:px-8 lg:px-12 ${className}`}
    {...props}
    ref={ref}
  >
    <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
  </motion.div>
);

/**
 * A composition of the OuterContainer and InnerContainer components.
 */
const Container: ForwardRefRenderFunction<HTMLDivElement, ContainerProps> & {
  Outer: typeof OuterContainer;
  Inner: typeof InnerContainer;
} = ({ children, ...props }, ref) => (
  <OuterContainer ref={ref} {...props}>
    <InnerContainer>{children}</InnerContainer>
  </OuterContainer>
);

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;

export { Container };
