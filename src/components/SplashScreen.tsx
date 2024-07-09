import { motion } from "framer-motion"

import ThreeDotsWave from "@/components/shared/three-dots-wave";

const SplashScreen = () => {
  return (
    <section className="text-white flex flex-col items-center justify-end fixed top-0 left-0 h-[100dvh] w-screen bg-[#009CEB]">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/assets/images/hugo.png"
            className="w-[16rem]"
          />
        </motion.div>
        <div className="w-full text-center">
          <motion.h1 
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-bold text-[60px] ga-maamli-regular">
            $Hugo
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="playwrite text-[20px] font-bold">
            Man's best friend, now on the couch
          </motion.p>
        </div>

        <div>
          <ThreeDotsWave />
        </div>
      </div>
    </section>
  )
}

export default SplashScreen;