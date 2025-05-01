import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/Logo.png"; // Ajusta o caminho da tua logo

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    <nav className="bg-white shadow-md z-50 py-3 fixed bottom-0 w-full lg:sticky lg:top-0">
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
          <div className="fixed bottom-4 right-4 z-50 lg:hidden">
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
        className={`fixed bottom-0 left-0  w-full max-w-xs bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          mobileDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full justify-between">
          {/* Cabeçalho */}
          <div className="flex justify-between items-center mb-8">
            <img src={logo} alt="Logo" className="h-10 w-10" />
          </div>

          {/* Itens do menu */}
          <ul className="space-y-6 text-base font-semibold">
            <li>
              <Link
                to="/"
                onClick={toggleNavbar}
                className={isActive("/") ? "text-blue-500" : ""}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                onClick={toggleNavbar}
                className={isActive("/sobre") ? "text-blue-500" : ""}
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                to="/projetos"
                onClick={toggleNavbar}
                className={isActive("/projetos") ? "text-blue-500" : ""}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="/galeria"
                onClick={toggleNavbar}
                className={isActive("/galeria") ? "text-blue-500" : ""}
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
