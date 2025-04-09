"use client";

import { useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  // Função opcional para fechar o menu ao clicar em um item
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-bold">Meu Portfólio</h1>

        {/* Botão do menu hamburguer (mobile) */}
        <button
          className="block md:hidden text-white focus:outline-none"
          aria-label="Abrir menu"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {/* Ícone SVG (hambúrguer) */}
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
          <ul className="flex space-x-4">
            <li><a href="#hero" className="hover:text-gray-300">Início</a></li>
            <li><a href="#skills" className="hover:text-gray-300">Programação</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projetos</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contato</a></li>
          </ul>
        </nav>
      </div>

      {/* Menu Mobile */}
      {menuAberto && (
        <div className="md:hidden bg-gray-700 p-4">
          <ul className="flex flex-col space-y-2">
            <li><a onClick={fecharMenu} href="#hero" className="hover:text-gray-300">Início</a></li>
            <li><a onClick={fecharMenu} href="#skills" className="hover:text-gray-300">Programação</a></li>
            <li><a onClick={fecharMenu} href="#projects" className="hover:text-gray-300">Projetos</a></li>
            <li><a onClick={fecharMenu} href="#contact" className="hover:text-gray-300">Contato</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
