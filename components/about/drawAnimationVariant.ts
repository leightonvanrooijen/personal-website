import { Variants } from 'framer-motion';

export const draw = (
  duration: number,
  pathLength: number = 1,
  repeat: number = 1
): Variants => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength,
    opacity: 1,
    transition: {
      pathLength: {
        duration,
        repeat,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  },
});
