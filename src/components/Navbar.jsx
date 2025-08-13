import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/LogoT.png";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  // Detectar scroll para mudanças de estilo
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre Nós" },
    { to: "/blog", label: "Blog" },
    { to: "/projetos", label: "Projetos" },
    { to: "/galeria", label: "Galeria" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/share/18q9snswNo/?mibextid=wwXIfr",
      icon: <FaFacebookF size={20} />,
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-500/10"
    },
    {
      href: "https://www.instagram.com/kutchindja_official?igsh=MTNoNmJndHV1aXIwYw==",
      icon: <IoLogoInstagram size={20} />,
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-500/10"
    },
    {
      href: "https://youtube.com/@associacaokutchindja?si=xbTMjKL5hoD9w4ik",
      icon: <FaYoutube size={20} />,
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-500/10"
    }
  ];

  return (
    <>
      {/* Espaçamento para compensar a navbar fixa */}
      <div className={`transition-all duration-500 ${
        scrolled ? 'h-16' : 'h-20'
      }`} />
      
      {/* Navbar Principal */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'py-2 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5' 
          : 'py-4 bg-white/90 backdrop-blur-lg'
      }`}>
        <div className="container px-6 mx-auto">
          <div className="flex items-center justify-between">
            {/* LOGO com animação */}
            <Link 
              to="/" 
              className="group flex items-center transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Kutchindja Logo" 
                  className={`transition-all duration-300 ${
                    scrolled ? 'h-10 w-10' : 'h-12 w-12'
                  } mr-3 group-hover:brightness-110`} 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
            </Link>

            {/* MENU DESKTOP */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                    isActive(to)
                      ? "text-blue-600 bg-blue-50/80 backdrop-blur-sm shadow-sm"
                      : "text-gray-700 hover:text-blue-600 hover:bg-white/60"
                  }`}
                >
                  <span className="relative z-10">{label}</span>
                  {/* Indicador ativo animado */}
                  {isActive(to) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl"></div>
                  )}
                  {/* Efeito hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </div>

            {/* BOTÃO CTA DESKTOP */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="#"
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10">Apoie a causa</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* BOTÃO MOBILE - Modernizado */}
            <button
              onClick={toggleNavbar}
              className="lg:hidden relative p-3 bg-white/80 backdrop-blur-md text-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    mobileDrawerOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    mobileDrawerOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MENU SLIDE BAR MOBILE - Completamente modernizado */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        mobileDrawerOpen ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop com blur */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            mobileDrawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={toggleNavbar}
        />
        
        {/* Sidebar */}
        <div className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl border-r border-white/20 shadow-2xl transform transition-transform duration-500 ease-out ${
          mobileDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          
          {/* Header do menu */}
          <div className="p-6 border-b border-gray-100/50">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="h-10 w-10" />
              <div>
                <h3 className="font-bold text-lg bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
                  Kutchindja
                </h3>
                <p className="text-sm text-gray-500">Diversidade & Inclusão</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 p-6">
            <nav className="space-y-2">
              {navItems.map(({ to, label }, index) => (
                <Link
                  key={to}
                  to={to}
                  onClick={toggleNavbar}
                  className={`group flex items-center w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive(to)
                      ? "text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 shadow-sm"
                      : "text-gray-700 hover:text-blue-600 hover:bg-white/60"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{label}</span>
                  {isActive(to) && (
                    <div className="ml-auto w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button Mobile */}
            <div className="mt-8">
              <a
                href="#"
                onClick={toggleNavbar}
                className="group w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/25"
              >
                <span>Apoie a causa</span>
                <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
              </a>
            </div>
          </div>

          {/* Footer com redes sociais */}
          <div className="p-6 border-t border-gray-100/50">
            <p className="text-sm text-gray-500 mb-4 text-center">Siga-nos nas redes sociais</p>
            <div className="flex justify-center space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 bg-white/60 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} ${social.bgColor} border border-white/20`}
                >
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}