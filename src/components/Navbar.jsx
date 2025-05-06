import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/Logo.png"; // Ajusta o caminho da logo
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    <nav className="bg-white shadow-md z-50 py-3 fixed top-0 w-full lg:sticky lg:top-0">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center hover:text-blue-500">
            <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
          </Link>

          {/* MENU DESKTOP */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {[
              { to: "/", label: "Inicio" },
              { to: "/sobre", label: "Sobre Nós" },
              { to: "/blog", label: "Blog" },
              { to: "/projetos", label: "Projetos" },
              { to: "/galeria", label: "Galeria" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`${
                    isActive(to)
                      ? "text-blue-500 font-bold border-b-2 border-blue-500"
                      : "text-blue-950"
                  } hover:text-blue-500`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* BOTÃO DESKTOP */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a
              href="#"
              className="py-3 px-4 rounded-md text-white font-semibold bg-blue-900"
            >
              Apoie a causa
            </a>
          </div>

          {/* BOTÃO MOBILE */}
          <div className="fixed top-4 right-4 z-50 lg:hidden">
            <button
              onClick={toggleNavbar}
              className="bg-blue-900 text-white p-3 rounded-full shadow-lg"
            >
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU SLIDE BAR MOBILE */}
      <div
        className={`fixed top-0 left-0 h-full  w-full max-w-xs bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          mobileDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full justify-between">
          {/* Itens do menu */}
          <ul className="space-y-6 text-base font-semibold">
            <li className="border-b-2 border-blue-100 pb-2">
              <Link
                to="/"
                onClick={toggleNavbar}
                className={isActive("/") ? "text-blue-900" : ""}
              >
                Início
              </Link>
            </li>
            <li className="border-b-2 border-blue-100 pb-2">
              <Link
                to="/sobre"
                onClick={toggleNavbar}
                className={isActive("/sobre") ? "text-blue-900" : ""}
              >
                Sobre Nós
              </Link>
            </li>
            <li className="border-b-2 border-blue-100 pb-2">
              <Link
                to="/blog"
                onClick={toggleNavbar}
                className={isActive("/blog") ? "text-blue-900" : ""}
              >
                Blog
              </Link>
            </li>
            <li className="border-b-2 border-blue-100 pb-2">
              <Link
                to="/projetos"
                onClick={toggleNavbar}
                className={isActive("/projetos") ? "text-blue-900" : ""}
              >
                Projetos
              </Link>
            </li>
            <li className="border-b-2 border-blue-100 pb-2">
              <Link
                to="/galeria"
                onClick={toggleNavbar}
                className={isActive("/galeria") ? "text-blue-900" : ""}
              >
                Galeria
              </Link>
            </li>
            <li>
              <a
                href="#"
                onClick={toggleNavbar}
                className="block bg-blue-900 text-white py-2 px-4 rounded-md text-center"
              >
                Apoie a causa
              </a>
            </li>
          </ul>

          {/* Rodapé com redes sociais ou outros links, se quiseres */}
          <div className="flex justify-center mt-6 space-x-4">
            <a
              href="https://www.facebook.com/share/18q9snswNo/?mibextid=wwXIfr"
              className="text-blue-500 m-2 hover:text-blue-700"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/kutchindja_official?igsh=MTNoNmJndHV1aXIwYw=="
              className="text-red-300 m-2 hover:text-blue-700"
            >
              <IoLogoInstagram size={24} />
            </a>
            <a
              href="https://youtube.com/@associacaokutchindja?si=xbTMjKL5hoD9w4ik"
              className="text-red-500 m-2 hover:text-blue-700"
            >
              <FaYoutube size={24} />
            </a>
            {/* <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaTwitter/>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaLinkedinIn/>
            </a> */}
          </div>
        </div>
      </div>

      {/* Fundo escurecido quando drawer está aberto */}
      {mobileDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30"
          onClick={toggleNavbar}
        />
      )}
    </nav>
  );
}
