import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className=" bg-gray-100 border-t border-neutral-300  py-5 mt-6">
      <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Sobre Nós */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
        >
          <h4 className="text-lg font-bold text-blue-950 mb-3">Sobre Nós</h4>
          <p className="text-sm text-blue-950 leading-relaxed">
            Valorizamos o respeito, a dignidade, a igualdade, a comunidade, a
            abertura e as competências dos nossos membros, promovendo uma
            sociedade onde os jovens mais vulneráveis possam exercer plenamente
            a sua cidadania, engajar-se ativamente na defesa dos seus direitos e
            viver livres de estigmas e discriminação, sendo empoderados para
            transformar as suas realidades.
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
            {/* <li>
              <Link to="/projetos" className="hover:text-blue-500">Projetos</Link>
            </li> */}
            <li>
              <Link to="/blog" className="hover:text-blue-500">
                Blog
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
              <span>tonymamb089@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <BsTelephone size={20} />
              <span>+258 852074332</span>
            </li>
            <li className="flex items-center gap-3">
              <TiLocationOutline size={20} />
              <span>Avenida Eduardo Mondlane</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
