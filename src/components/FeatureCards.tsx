import { Box, Award, Heart } from 'lucide-react';

export function FeatureCards() {
  return (
    <section className="container mx-auto px-4 overlap-section">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-verde-claro-bg p-8 rounded-2xl card-shadow text-center transform transition hover:-translate-y-2">
          <div className="flex justify-center text-4xl text-laranja-pastel mb-4">
            <Box strokeWidth={1.5} className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-verde-apagado mb-3 font-serif">Qualificação</h3>
          <p className="text-sm text-gray-600">
            Atualizações constantes na área de Linguagem e Fala para propor aos meus pacientes o melhor tratamento fonoaudiológico.
          </p>
        </div>
        <div className="bg-laranja-claro p-8 rounded-2xl card-shadow text-center transform transition hover:-translate-y-2">
          <div className="flex justify-center text-4xl text-white mb-4">
            <Award strokeWidth={1.5} className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 drop-shadow-sm font-serif">Alto Rigor Clínico</h3>
          <p className="text-sm text-gray-700">
            Anos de experiência na área de fonoaudiologia para assegurar um acompanhamento de máxima qualidade aos pacientes.
          </p>
        </div>
        <div className="bg-laranja-pastel p-8 rounded-2xl card-shadow text-center transform transition hover:-translate-y-2">
          <div className="flex justify-center text-4xl text-white mb-4">
            <Heart strokeWidth={1.5} className="w-10 h-10 fill-white/30" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 drop-shadow-sm font-serif">Humanização</h3>
          <p className="text-sm text-white">
            Entendendo que cada indivíduo é um ser humano único com bagagem e história que o levam até meu consultório.
          </p>
        </div>
      </div>
    </section>
  );
}
