import { motion } from "framer-motion";

const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center  bg-gradient-to-br from-purple-600 to-pink-500 p-12 text-white ">
      <div className="flex justify-center ">
        <div className="max-w-xl   items-center justify-center  ">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl font-bold mb-6 "
          >
            Join Our Community
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl mb-8"
          >
            Experience the power of connection and collaboration.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="#"
              className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
