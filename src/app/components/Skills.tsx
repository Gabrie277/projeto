import { CgAlbum } from "react-icons/cg";

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">PROGRAMAÇÃO</h2>

        {/* Cultos da PIBCO */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Cultos da PIBCO</h3>
          <ul className="space-y-2">
            {[
              "Culto de Oração – Quarta, às 19h",
              "Culto de Doutrina – Quinta, às 19h",
              "Culto da Juventude – Sábado, às 18h",
              "Escola Bíblica – Domingo, às 8h",
              "Culto de Adoração – Domingo, às 18h"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CgAlbum className="text-blue-600 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mensagem da Semana */}
        <div className="mb-10 text-center">
          <h3 className="text-3xl font-bold mb-4">Mensagem da Semana</h3>
          <div className="bg-white rounded-xl shadow-md p-6 inline-block">
            <h4 className="text-xl font-semibold mb-2">Pr. William</h4>

            {/* Imagem */}
            <img
              src="/pastor.jpeg"
              alt="Pastor"
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />

            <p className="mb-4">
              Jesus Cristo, Rei dos Reis e Senhor dos Senhores! Seu Reino será sem fim! Aleluia.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col items-center gap-3">
              <a
                href="https://www.youtube.com/watch?v=zqXD3MZWfRY"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Ouvir Mensagem
              </a>

              <a
                href="/musica.mpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Ouvir Louvor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
