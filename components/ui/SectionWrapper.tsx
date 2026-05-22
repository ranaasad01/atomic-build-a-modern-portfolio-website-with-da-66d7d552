"use client";
import { ReactNode, useRef } from 'react';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={"py-20 px-4 sm:px-6 lg:px-8 " + className}
    >
      {children}
    </motion.section>
  );
}
