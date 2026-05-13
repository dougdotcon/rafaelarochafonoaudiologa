import rafaPerfil from '../../rafa-perfil.png';

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-texto-escuro mb-2">Rafaela Rocha</h2>
            <h3 className="text-2xl font-light text-laranja-pastel mb-4 font-sans">Fonoaudióloga</h3>
            <div className="w-16 border-b-2 border-laranja-pastel mb-6" />

            <p className="text-gray-600 mb-4 leading-relaxed font-sans">
              A Dra. Rafaela Rocha é Fonoaudióloga dedicada à avaliação, diagnóstico e reabilitação da fala e da linguagem. Sua missão é
              promover a comunicação efetiva e a qualidade de vida de seus pacientes.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed font-sans">
              Com foco especial no desenvolvimento infantil e transtornos da fala, utiliza abordagens baseadas em evidências científicas
              aliadas a um atendimento empático, lúdico e acolhedor para as famílias.
            </p>

            <a
              href="#contato"
              className="bg-laranja-claro hover:bg-laranja-pastel text-gray-800 font-medium py-3 px-8 rounded-full transition duration-300 shadow-sm inline-block font-sans"
            >
              Agendar Avaliação
            </a>
          </div>

          <div className="md:w-1/2 relative w-full">
            <div className="absolute -inset-4 bg-verde-claro-bg rounded-full transform translate-x-4 translate-y-4 -z-10" />
            <img
              src={rafaPerfil}
              alt="Dra. Rafaela Rocha - Fonoaudióloga"
              className="rounded-2xl shadow-xl w-full object-cover h-[500px] relative z-10"
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
