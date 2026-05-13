export function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-cover bg-center bg-no-repeat min-h-[70vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1514386561491-a5f1a30366eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif text-balance">
          Desenvolvimento da Fala e Linguagem
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 font-light max-w-3xl mx-auto leading-relaxed font-sans">
          Um acompanhamento claro e afetuoso para organizar o raciocínio clínico da fala do seu filho(a), sem deixar sinais importantes
          passarem como &quot;detalhe&quot;.
        </p>
        <a
          href="#sobre"
          className="bg-white text-verde-apagado font-bold py-3 px-8 rounded-full hover:bg-verde-claro-bg transition duration-300 shadow-lg inline-block font-sans"
        >
          Saiba mais
        </a>
      </div>
    </section>
  );
}
