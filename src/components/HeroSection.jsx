import React from "react";
import { motion } from "framer-motion";
import user1 from "/images/User1.jpg";
import user2 from "/images/User2.jpg";
import user3 from "/images/User3.jpg";
import user4 from "/images/User4.jpg";
import user5 from "/images/User5.jpg";
import { User2 } from "lucide-react";

function HeroSection() {
  return (
    <>
      {/* <img src={img1} alt="" className="h-64 w-full object-cover"  /> */}
      <div className="flex flex-col items-center mt-3.5 lg:mt-1">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 2.5 }}
          style={{ color: "#1E2664" }}
          className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-opacity-70  "
        >
          Associação de jovens pela {""} 
          <span className="text-red-300">d</span>
          <span className="text-orange-300">i</span>
          <span className="text-green-300">v</span>
          <span className="text-blue-300">e</span>
          <span className="text-fuchsia-300">r</span>
          <span className="text-red-300">s</span>
          <span className="text-yellow-300">i</span>
          <span className="text-red-300">d</span>
          <span className="text-orange-300">a</span>
          <span className="text-green-300">d</span>
          <span className="text-blue-300">e</span> {""}
          
          e{" "}
          <span className="text-fuchsia-300">i</span>
          <span className="text-yellow-500">n</span>
          <span className="text-red-300">c</span>
          <span className="text-orange-300">l</span>
          <span className="text-green-300">u</span>
          <span className="text-blue-300">s</span>
          <span className="text-fuchsia-300">ã</span>
          <span className="text-red-300">o</span>

          {" "}
          !
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          style={{ color: "#1E2664" }}
          className="mt-10 text-lg text-center max-w-4xl text-opacity-70"
        >
          Com a{" "}
          <span className="text-blue-900 font-bold">
            missão
          </span>{" "}
          de empoderar os jovens excluídos e marginalizados, para que estes
          possam se engajar ativamente na construção de uma sociedade mais
          justa, igualitária e que respeite as diferenças.
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex justify-center my-10"
        >
          <a
            href="/sobre"
            className="bg-blue-800 py-3 px-4 rounded-md text-white text-bold hover:"
            // style={{ backgroundColor: "#E28743" }}
          >
            Saiba mais
          </a>
          <a
            href=""
            className="py-3 px-4 mx-3 rounded-nd border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
          >
            Participe da Causa
          </a>
        </motion.div>
        <div>
          {/* <img src={img1} alt="" className="h-64 w-full object-cover rounded-lg shadow-lg" /> */}
          <div className="flex flex-col">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 2 }}
              className="flex  -space-x-4 justify-center items-center"
            >
              <img
                className="w-16 h-16 rounded-full border-2 border-white"
                src={user1}
                alt="User 1"
              />
              <img
                className="w-16 h-16 rounded-full border-2 border-white"
                src={user2}
                alt="User 2"
              />
              <img
                className="w-16 h-16 rounded-full border-2 border-white"
                src={user3}
                alt="User 3"
              />
              <img
                className="w-16 h-16 rounded-full border-2 border-white"
                src={user4}
                alt="User 4"
              />
              <img
                className="w-16 h-16 rounded-full border-2 border-white"
                src={user5}
                alt="User 5"
              />
            </motion.div>

            <motion.p className="mt-4 text-center text-lg text-gray-700">
              Sao <span className="text-blue-900 font-bold">varios </span> jovens que sao{" "}
              <span className="text-blue-900 font-bold">apoiados e ajudados</span> pela
              Kutchindja, tu podes ser mais um.
            </motion.p>
            <div className="flex justify-center my-8">
              <a
                href=""
                className="justify-center items-center  py-3 px-4 rounded-nd border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
              >
                Particisas de ajuda ?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
