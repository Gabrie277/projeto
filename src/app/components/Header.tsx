"use client";

import { useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-bold">Meu Portfólio</h1>

        <button
          className="block md:hidden text-white focus:outline-none"
          aria-label="Abrir menu"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <i className="fas fa-bars"></i>
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#hero" className="hover:text-gray-300">Início</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-300">Programação</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-300">Projetos</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">Contato</a>
            </li>
          </ul>
        </nav>
      </div>

      {menuAberto && (
        <div className="md:hidden bg-gray-700 p-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#hero" className="hover:text-gray-300">Início</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-300">Programação</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-300">Projetos</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">Contato</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
