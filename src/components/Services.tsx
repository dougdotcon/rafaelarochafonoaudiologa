import { Baby, MessageCircle, BookOpen, Ear, UserRound, Brain, Sprout } from 'lucide-react';

type Servico = {
  titulo: string;
  descricao: string;
  Icon: typeof Baby;
  border: string;
  iconWrap: string;
  iconColor: string;
};

const servicos: Servico[] = [
  {
    titulo: 'Atraso de Fala',
    descricao: 'Estimulação precoce e intervenção para crianças que demoram a iniciar a fala.',
    Icon: Baby,
    border: 'border-verde-apagado',
    iconWrap: 'bg-verde-claro-bg',
    iconColor: 'text-verde-apagado',
  },
  {
    titulo: 'Transtornos dos Sons da Fala',
    descricao: 'Correção de trocas, omissões ou distorções de sons durante a fala.',
    Icon: MessageCircle,
    border: 'border-laranja-pastel',
    iconWrap: 'bg-laranja-claro',
    iconColor: 'text-laranja-pastel',
  },
  {
    titulo: 'Leitura e Escrita',
    descricao: 'Apoio em dificuldades de alfabetização, dislexia e transtornos de aprendizagem.',
    Icon: BookOpen,
    border: 'border-verde-claro-mid',
    iconWrap: 'bg-verde-claro-bg',
    iconColor: 'text-verde-apagado',
  },
  {
    titulo: 'Transtorno do Processamento Auditivo Central',
    descricao: 'Avaliação e treinamento (TPAC) para melhor compreensão das informações sonoras.',
    Icon: Ear,
    border: 'border-laranja-pastel',
    iconWrap: 'bg-laranja-claro',
    iconColor: 'text-laranja-pastel',
  },
  {
    titulo: 'Transtornos do Desenvolvimento Geral',
    descricao: 'Acompanhamento terapêutico integrado para suporte no desenvolvimento infantil (TEA, etc).',
    Icon: UserRound,
    border: 'border-verde-apagado',
    iconWrap: 'bg-verde-claro-bg',
    iconColor: 'text-verde-apagado',
  },
  {
    titulo: 'Transtorno do Desenvolvimento da Fala',
    descricao: 'Diagnóstico e tratamento de apraxia de fala infantil e outros transtornos motores.',
    Icon: Brain,
    border: 'border-verde-claro-mid',
    iconWrap: 'bg-verde-claro-bg',
    iconColor: 'text-verde-apagado',
  },
];

export function Services() {
  return (
    <section id="especialidades" className="py-20 bg-verde-claro-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-verde-claro-mid opacity-30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-laranja-claro opacity-30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-laranja-pastel font-bold tracking-wider uppercase text-sm font-sans">Áreas de Atuação</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-verde-apagado mt-2">Especialidades e Serviços</h2>
          <div className="w-24 border-b-2 border-verde-apagado mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((s) => (
            <div
              key={s.titulo}
              className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-l-4 ${s.border} flex items-start gap-4`}
            >
              <div className={`${s.iconWrap} p-3 rounded-lg ${s.iconColor} shrink-0`}>
                <s.Icon className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1 font-sans">{s.titulo}</h4>
                <p className="text-sm text-gray-500 font-sans">{s.descricao}</p>
              </div>
            </div>
          ))}

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-laranja-pastel flex items-start gap-4 md:col-span-2 lg:col-span-3 lg:w-1/3 lg:mx-auto">
            <div className="bg-laranja-claro p-3 rounded-lg text-laranja-pastel shrink-0">
              <Sprout className="w-6 h-6" strokeWidth={1.75} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1 font-sans">Desenvolvimento da Fala e Linguagem</h4>
              <p className="text-sm text-gray-500 font-sans">Estimulação global e marcos do desenvolvimento comunicativo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
