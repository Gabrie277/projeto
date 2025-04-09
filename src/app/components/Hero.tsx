const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center justify-center px-10"
      style={{
        backgroundImage: "url('/coral.jpeg')",
        imageRendering: "auto",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay escuro para melhorar contraste */}
      <div className="absolute inset-0 " />

      {/* Conteúdo */}
      <div className="relative z-10 text-center rounded-xl p-8">
        <img
          src="/logo.jpeg"
          alt="logo"
          className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-4 drop-shadow">
          Primeira Igreja Batista em Cidade Operária
        </h1>
        <p className="text-xl mb-6 max-w-xl mx-auto drop-shadow">
        Portanto, quer comais, quer bebais, ou façais qualquer outra coisa, fazei tudo para a glória de Deus.
        1 Coríntios 10:31
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition"
          >
            Veja  projetos da Igreja 
          </a>
          <a
            href="/a.pdf"
            download
            className="bg-gray-700 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
          >
            Aniversariantes do Mês
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
