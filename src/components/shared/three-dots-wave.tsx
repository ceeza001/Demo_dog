import { motion } from "framer-motion";

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2
    }
  },
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const DotVariants = {
  initial: {
    y: "0%"
  },
  animate: {
    y: "100%"
  }
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
  repeat: Infinity, 
  repeatType: 'reverse'
};

export default function ThreeDotsWave() {
  return (
    <div
      
    >
      <motion.div
        className="w-[10rem] h-[4rem]"
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          className="w-[2.5rem] h-[2.5rem] bg-white rounded-full"
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className="w-[2.5rem] bg-white rounded-full"
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className="w-[2.5rem] bg-white rounded-full"
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
  );
}
