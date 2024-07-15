import { motion } from "framer-motion"

const dots = [
  {id:1},
  {id:2},
  {id:3}
];

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
        <div className="mb-10 w-full text-center">
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

        <div
          className="flex gap-2 mb-10"
        >
          {dots.map((dot, i) => (
            <motion.div
              key={dot.id}
              initial={{ y: "0%" }}
              animate={{ y: "100%" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse'}}
              className="w-[1.2rem] h-[1.2rem] bg-white rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SplashScreen;