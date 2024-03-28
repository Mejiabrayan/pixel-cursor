'use client';
import { motion } from 'framer-motion';

const Paragraph = () => {
  const fadeAnimationVariants = {
    initial: { opacity: 0, y: 15  },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        staggerChildren: 0.03, // Add this line
      },
    },
  };

  const paragraphContent = 'The web is a beautiful place'.split('');

  return (
    <motion.div
      variants={fadeAnimationVariants}
      initial="initial"
      animate="animate"

    >
      {paragraphContent.map((char, index) => (
        <motion.span key={index}>{char}</motion.span>
      ))}
    </motion.div>
  );
};

export default Paragraph;