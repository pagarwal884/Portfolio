import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      {/* Left Section */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6">
          Building Fast <br /> Reliable Results
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl">
          I’m Piyush Agarwal, a passionate software developer and engineering
          student at IET, MLSU Udaipur. I specialize in full-stack web
          development using Django, JavaScript, and cloud deployment tools, with
          a strong foundation in Java, Python, and C++. I’ve built real-world
          projects including an Electricity Billing System, Cold Email
          Generator, and an IPO Registration platform. I thrive on building
          impactful solutions through continuous learning and hands-on
          experience.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
