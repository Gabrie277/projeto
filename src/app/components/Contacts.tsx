import { FaWhatsapp, FaInstagram, FaFacebookSquare,FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>

        {/* Formulário de Contato */}
        <form className="max-w-xl mx-auto mb-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded-lg border-gray-300 focus:ring focus:ring-blue-500"
              placeholder="Seu nome"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded-lg border-gray-300 focus:ring focus:ring-blue-500"
              placeholder="Seu email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Mensagem
            </label>
            <textarea
              id="message"
              className="w-full p-2 rounded-lg border-gray-300 focus:ring focus:ring-blue-500"
              rows={4}
              placeholder="Sua mensagem"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Enviar
          </button>
        </form>

        {/* Links de Redes Sociais */}
        <div className="text-center">
          <p className="text-lg mb-4">Siga-me nas redes sociais:</p>
          <div className="flex justify-center space-x-6 text-2xl">
            <a
              href="https://wa.me/seu-numero"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition flex items-center gap-2"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
            <a
              href="https://instagram.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition flex items-center gap-2"
            >
              <FaInstagram />
              Instagram
            </a>
            <a
              href="https://facebook.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition flex items-center gap-2"
            >
              <FaFacebookSquare />
              Facebook
            </a>
            

              <a
              href="https://www.youtube.com/@pibcidadeoperaria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition flex items-center gap-2"
            >
              <FaYoutube />
                Youtude

            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
