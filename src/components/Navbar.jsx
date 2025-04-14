import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";
import logo from "/Logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation(); // Hook para obter a URL atual

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Função para verificar se o link é o ativo
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 bg-white shadow-md z-10 py-3 backdrop-blur-lg border-b border-neutral-200">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="hover:text-blue-500">
              <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
            </Link>
          </div>

          {/* MENU DESKTOP */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <Link
                to="/"
                className={`${
                  isActive("/") ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-blue-950"
                } hover:text-blue-500`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className={`${
                  isActive("/sobre") ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-blue-950"
                } hover:text-blue-500`}
              >
                Sobre Nós
              </Link>
            </li>
            {/* <li>
              <Link
                to="/projetos"
                className={`${
                  isActive("/projetos") ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-blue-950"
                } hover:text-blue-500`}
              >
                Projetos
              </Link>
            </li> */}
            <li>
              <Link
                to="/blog"
                className={`${
                  isActive("/blog") ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-blue-950"
                } hover:text-blue-500`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/galeria"
                className={`${
                  isActive("/galeria") ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-blue-950"
                } hover:text-blue-500`}
              >
                Galeria
              </Link>
            </li>
          </ul>

          {/* BOTÃO DESKTOP */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a
              href="#"
              style={{ backgroundColor: "#E28743" }}
              className="py-3 px-4 rounded-md text-white font-semibold"
            >
              Apoie a causa
            </a>
          </div>

          {/* BOTÃO MOBILE */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-black z-50 relative">
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MENU MOBILE */}
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-20 bg-white p-12 flex flex-col items-center justify-center space-y-6 lg:hidden">
            <ul className="flex flex-col items-center space-y-6 text-lg">
              <li>
                <Link
                  to="/"
                  className={`${
                    isActive("/") ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-blue-950"
                  } hover:text-blue-500`}
                  onClick={toggleNavbar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className={`${
                    isActive("/sobre") ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-blue-950"
                  } hover:text-blue-500`}
                  onClick={toggleNavbar}
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                {/* <Link
                  to="/projetos"
                  className={`${
                    isActive("/projetos") ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-blue-950"
                  } hover:text-blue-500`}
                  onClick={toggleNavbar}
                >
                  Projetos
                </Link> */}
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`${
                    isActive("/blog") ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-blue-950"
                  } hover:text-blue-500`}
                  onClick={toggleNavbar}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/galeria"
                  className={`${
                    isActive("/galeria") ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-blue-950"
                  } hover:text-blue-500`}
                  onClick={toggleNavbar}
                >
                  Galeria
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  style={{ backgroundColor: "#E28743" }}
                  className="py-3 px-6 rounded-md text-white font-semibold"
                >
                  Apoie a causa
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
