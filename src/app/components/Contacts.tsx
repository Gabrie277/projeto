
import { FaWhatsapp, FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>

        {/* Informações de contato */}
        <div className="text-center mb-8 space-y-4">
          <p><strong>Telefone:</strong> (098) 3247-5431</p>
          <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden border border-white">
            <iframe
              title="Localização no Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.785164349293!2d-44.20548209662538!3d-2.576440819396951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f69b986d4c23ad%3A0x5cc2bd2e18c38aeb!2sPrimeira%20Igreja%20Batista%20em%20Cidade%20Oper%C3%A1ria!5e0!3m2!1spt-BR!2sbr!4v1744280260096!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Redes sociais */}
        <div className="text-center mt-10">
          <p className="text-lg mb-4">Siga-nos nas redes sociais:</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-2xl">
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
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
