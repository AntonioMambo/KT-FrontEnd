import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white/20 backdrop-blur-lg border-t border-neutral-300  py-5 mt-6">
      <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Sobre Nós */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
        >
          <h4 className="text-lg font-bold text-blue-950 mb-3">Sobre Nós</h4>
          <p className="text-sm text-blue-950 leading-relaxed">
            A KUTCHINDJA (AK) é uma associação moçambicana de jovens pela
            diversidade e inclusão,que busca, por meio de suas ações, promover o
            empoderamento de jovens excluídos e marginalizados para que estes
            possam se engajar activamente na luta por uma sociedade
            justa,igualitária e que respeite as diferenças.
          </p>
        </motion.div>

        {/* Links Rápidos */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 2.5 }}
        >
          <h4 className="text-lg font-bold text-blue-950 mb-3">
            Links Rápidos
          </h4>
          <ul className="space-y-2 text-blue-950 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-blue-500">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link to="/Blog" className="hover:text-blue-500">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-500">
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/galeria" className="hover:text-blue-500">
                Galeria
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contactos */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 3.5 }}
        >
          <h4 className="text-lg font-bold text-blue-950 mb-3">Contactos</h4>
          <ul className="space-y-4 text-sm text-blue-950">
            <li className="flex items-center gap-3">
              <MdOutlineEmail size={20} />
              <span>associacaokuthindja@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <BsTelephone size={20} />
              <span>+258 861123869</span>
            </li>
            <li className="flex items-center gap-3">
              <TiLocationOutline size={20} />
              <span>Avenida Kwame Nkruma N° 1519</span>
            </li>
          </ul>
        </motion.div>
        {/* Redes Sociais*/}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 3.5 }}
        >
          <h4 className="text-lg font-bold text-blue-950 mb-3">
            Redes Sociais
          </h4>
          {/* Rodapé com redes sociais ou outros links, se quiseres */}
          <div className="flex flex-col justify-center ">
            <a
              href="https://www.facebook.com/share/18q9snswNo/?mibextid=wwXIfr"
              className="flex items-center gap-3 text-blue-500 my-1  hover:text-blue-700"
            >
              <FaFacebookF size={24} />
              <span className="text-blue-950"> Kutchindja</span>
            </a>
            <a
              href="https://www.instagram.com/kutchindja_official?igsh=MTNoNmJndHV1aXIwYw=="
              className="flex items-center gap-3 text-red-300 my-1  hover:text-blue-700"
            >
              <IoLogoInstagram size={24} />{" "}
              <span className="text-blue-950"> Kutchindja_offical </span>
            </a>
            <a
              href="https://youtube.com/@associacaokutchindja?si=xbTMjKL5hoD9w4ik"
              className="flex items-center gap-3 text-red-500 my-1 hover:text-blue-700"
            >
              <FaYoutube size={24} />
               <span className="text-blue-950">  Associação Kutchindja</span>
            </a>
            {/* <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaTwitter/>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaLinkedinIn/>
            </a> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
