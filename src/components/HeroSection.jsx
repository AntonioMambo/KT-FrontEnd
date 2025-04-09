import React from "react";
import img1 from "../assets/images/img1.jpg";
import user1 from "../assets/users/user1.jpg";
import user2 from "../assets/users/user2.jpg";
import user3 from "../assets/users/user3.jpg";
import user4 from "../assets/users/user4.jpg";
import user5 from "../assets/users/user5.jpg";

function HeroSection() {
  return (
    <>
      {/* <img src={img1} alt="" className="h-64 w-full object-cover"  /> */}
      <div className="flex flex-col items-center mt-3.5 lg:mt-1">
        <h1
          style={{ color: "#1E2664" }}
          className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-opacity-70  "
        >
          Associação de jovens pela{" "}
          <span className="bg-gradient-to-r from-orange-400 to-green-400 text-transparent bg-clip-text">
            diversidade
          </span>{" "}
          e{" "}
          <span className="bg-gradient-to-r from-orange-400 to-green-400 text-transparent bg-clip-text">
            inclusão
          </span>{" "}
          !
        </h1>
        <p
          style={{ color: "#1E2664" }}
          className="mt-10 text-lg text-center max-w-4xl text-opacity-70"
        >
          Com a{" "}
          <span className="" style={{ color: "#E28743" }}>
            missão
          </span>{" "}
          de empoderar os jovens excluídos e marginalizados, para que estes
          possam se engajar ativamente na construção de uma sociedade mais
          justa, igualitária e que respeite as diferenças.
        </p>
        <div className="flex justify-center my-10">
          <a
            href="/sobre"
            className="py-3 px-4 rounded-md text-white text-bold hover:"
            style={{ backgroundColor: "#E28743" }}
          >
            Saiba mais
          </a>
          <a
            href=""
            className="py-3 px-4 mx-3 rounded-nd border border-amber-500 text-amber-500"
          >
            Participe da Causa
          </a>
        </div>
        <div>
          {/* <img src={img1} alt="" className="h-64 w-full object-cover rounded-lg shadow-lg" /> */}
          <div className="flex flex-col">
            <div className="flex  -space-x-4 justify-center items-center">
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
            </div>

            <p className="mt-4 text-center text-lg text-gray-700">
              Sao <span style={{ color: "#E28743" }}>200 +</span> jovens que sao{" "}
              <span style={{ color: "#E28743" }}>apoiados e ajudados</span> pela
              Kutchindja, tu podes ser mais um.
            </p>
            <div className="flex justify-center my-8">
            <a
              href=""
              className="justify-center items-center  py-3 px-4 rounded-nd border border-amber-500 text-amber-500"
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
