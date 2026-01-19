// ============================================
// MOTION VARIANTS - Centralized Animation System
// ============================================
// Premium, professional animations for agency-grade experiences
// Philosophy: Calm, Confident, Premium, Purpose-driven

import { Variants, Transition } from "framer-motion";

// ============================================
// TIMING & EASING TOKENS
// ============================================

export const easings = {
  // Premium ease curves
  smooth: [0.25, 0.1, 0.25, 1.0] as const,
  smoothOut: [0.0, 0.0, 0.2, 1.0] as const,
  smoothIn: [0.4, 0.0, 1.0, 1.0] as const,
  // Elegant spring-like feel
  elegant: [0.43, 0.13, 0.23, 0.96] as const,
  // Sharp, professional
  sharp: [0.4, 0.0, 0.6, 1.0] as const,
};

export const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
  slowest: 1.0,
};

// ============================================
// TRANSITION PRESETS
// ============================================

export const transitions = {
  fast: {
    duration: durations.fast,
    ease: easings.smooth,
  } as Transition,
  
  normal: {
    duration: durations.normal,
    ease: easings.smooth,
  } as Transition,
  
  slow: {
    duration: durations.slow,
    ease: easings.elegant,
  } as Transition,
  
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 15,
    mass: 1,
  } as Transition,
  
  springGentle: {
    type: "spring",
    stiffness: 60,
    damping: 20,
    mass: 1,
  } as Transition,
};

// ============================================
// FADE VARIANTS
// ============================================

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: transitions.normal,
  },
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.slow,
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.slow,
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.slow,
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.slow,
  },
};

// ============================================
// SCALE VARIANTS
// ============================================

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.slow,
  },
};

export const scaleInUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: transitions.slow,
  },
};

// ============================================
// STAGGER CONTAINER VARIANTS
// ============================================

export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// ============================================
// CARD & INTERACTIVE VARIANTS
// ============================================

export const cardHover: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: durations.normal,
      ease: easings.elegant,
    },
  },
};

export const buttonHover: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

export const linkHover: Variants = {
  rest: {
    x: 0,
  },
  hover: {
    x: 4,
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
};

// ============================================
// HERO & PAGE ENTRANCE VARIANTS
// ============================================

export const heroTitle: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    clipPath: "inset(100% 0% 0% 0%)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: durations.slower,
      ease: easings.elegant,
    },
  },
};

export const heroSubtitle: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
      delay: 0.2,
    },
  },
};

export const heroDescription: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
      delay: 0.4,
    },
  },
};

export const heroCTA: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
      delay: 0.6,
    },
  },
};

// ============================================
// IMAGE & REVEAL VARIANTS
// ============================================

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.slower,
      ease: easings.elegant,
    },
  },
};

export const maskReveal: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: durations.slower,
      ease: easings.elegant,
    },
  },
};

// ============================================
// NAVIGATION VARIANTS
// ============================================

export const navItem: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const mobileMenu: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
};

// ============================================
// SCROLL ANIMATION HELPERS
// ============================================

export const scrollRevealConfig = {
  once: true,
  amount: 0.2,
  margin: "-50px 0px",
};

// ============================================
// LOADING & SKELETON VARIANTS
// ============================================

export const shimmer: Variants = {
  initial: {
    backgroundPosition: "-200% 0",
  },
  animate: {
    backgroundPosition: "200% 0",
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "linear",
    },
  },
};

// ============================================
// PAGE TRANSITION VARIANTS
// ============================================

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
};

