"use client";

import { useState } from "react";
import { X } from "lucide-react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <>
      <header className="bg-gray-800 text-white fixed w-full z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-5">
          <h1 className="text-3xl font-bold">PIBCO</h1>

          {/* Botão hamburguer (mobile) */}
          <button
            className="block md:hidden text-white focus:outline-none"
            aria-label="Abrir menu"
            onClick={() => setMenuAberto(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-lg">
              <li><a href="#hero" className="hover:text-gray-300 transition">Início</a></li>
              <li><a href="#skills" className="hover:text-gray-300 transition">Programação</a></li>
              <li><a href="#projects" className="hover:text-gray-300 transition">Projetos</a></li>
              <li><a href="#contact" className="hover:text-gray-300 transition">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sidebar à direita (mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-6 z-50 transform transition-transform duration-300 ${
          menuAberto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={fecharMenu} aria-label="Fechar menu">
            <X className="w-6 h-6" />
          </button>
        </div>
        <ul className="space-y-4 text-lg">
          <li><a onClick={fecharMenu} href="#hero" className="hover:text-gray-300 transition">Início</a></li>
          <li><a onClick={fecharMenu} href="#skills" className="hover:text-gray-300 transition">Programação</a></li>
          <li><a onClick={fecharMenu} href="#projects" className="hover:text-gray-300 transition">Projetos</a></li>
          <li><a onClick={fecharMenu} href="#contact" className="hover:text-gray-300 transition">Contato</a></li>
        </ul>
      </div>

      {/* Overlay escuro ao fundo */}
      {menuAberto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={fecharMenu}
        />
      )}
    </>
  );
};

export default Header;
