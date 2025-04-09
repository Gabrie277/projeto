interface Project {
    title: string;
    description: string;
    link: string;
  }
  
  const Projects = () => {
    const projects: Project[] = [
      {
        title: "CORAL PIBCO",
        description: "Jesus Cristo, Rei dos Reis e Senhor dos Senhores! Seu Reino será sem fim! Aleluia.",
        link: "https://www.youtube.com/watch?v=sGpca-YQv-s&t=4s/Coral Pibco",
      },
      {
        title: "RETROSPECTIVA 36 ANOS PIBCO",
        description: "Retrospectiva dos 36 anos de organização da Primeira Igreja Batista em Cidade Operária..",
        link: "https://www.youtube.com/watch?v=Wti4h0hR3Fs/RETROSPECTIVA 36 ANOS PIBCO",
      },
      {
        title: "EMBAIXADORES DO REI",
        description: "06/05/2018 - 1ª APRESENTAÇÃO DO MINISTÉRIO DOS EMBAIXADORES  E DO FORTE CRISTO REI - PRIMEIRA IGREJA BATISTA EM CIDADE OPERÁRIA.",
        link: "https://www.youtube.com/watch?v=lmYFIm1Uicc/EMBAIXADORES DO REI",
      },
      {
        title: "BATISMO - PIB CIDADE OPERÁRIA SETEMBRO 2019",
        description: "LOCAL: ASSENAC DATA: 28/09/2019  PRIMEIRA IGREJA BATISTA EM CIDADE OPERÁRIA",
        link: "https://www.youtube.com/watch?v=Jn4MvkBuLw0/BATISMO - PIB CIDADE OPERÁRIA SETEMBRO 2019",
      },
      {
        title: "MENSAGEIRAS DO REI - ATIVIDADES 2018.1",
        description: "MINISTÉRIO MENSAGEIRAS DO REI - PRIMEIRA IGREJA BATISTA EM CIDADE OPERÁRIA ATIVIDADES DESENVOLVIDAS AO LONGO DO 1° SEMESTRE LÍDER: ENA AUXILIARES: KELLY E TAYANE",
        link: "https://www.youtube.com/watch?v=DSQh2GsoaX8/MENSAGEIRAS DO REI - ATIVIDADES 2018.1",
      },
      {
        title: "HOMENAGEM - 30 ANOS PIBCO",
        description: "HOMENAGEM -30 ANOS",
        link: "https://www.youtube.com/watch?v=IS9-h4oQqN4/HOMENAGEM - 30 ANOS PIBCO",
      },
    ];
  
    return (
      <section id="projects" className="bg-slate-200 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Meus Projetos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Ver projeto
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/projects"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Ver todos os projetos
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;