import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden relative">
      {/* Decorative circle */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 sm:gap-12 relative z-10">
        <div>
          <div className="mb-6">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">Rafaela Rocha</span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-accent font-bold mt-1">Fonoaudióloga</span>
          </div>
          <p className="text-white/60 max-w-sm text-xs sm:text-sm leading-relaxed mb-8">
            Comprometida com a expressividade clínica e o bem-estar dos pacientes na região do Ouro Verde e toda Campinas.
          </p>
          <div className="flex flex-wrap gap-3">
             <span className="text-[9px] sm:text-[10px] uppercase font-bold border border-white/20 px-3 py-1 rounded-full">CRFa: 0-0000</span>
             <span className="text-[9px] sm:text-[10px] uppercase font-bold border border-white/20 px-3 py-1 rounded-full">Campinas, SP</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-10 sm:gap-16 w-full md:w-auto">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h5 className="font-bold text-accent uppercase tracking-widest text-[10px]">Links Rápidos</h5>
            <a href="#" className="text-xs sm:text-sm hover:text-accent transition-colors">Início</a>
            <a href="#servicos" className="text-xs sm:text-sm hover:text-accent transition-colors">Serviços</a>
            <a href="#sobre" className="text-xs sm:text-sm hover:text-accent transition-colors">Sobre Mim</a>
            <a href="#contato" className="text-xs sm:text-sm hover:text-accent transition-colors">Agendamento</a>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <h5 className="font-bold text-accent uppercase tracking-widest text-[10px]">Atendimento</h5>
            <p className="text-xs sm:text-sm text-white/70">Ouro Verde<br/>Campinas - SP</p>
            <p className="text-xs sm:text-sm text-white/70">(19) 00000-0000</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 sm:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <p className="text-[10px] sm:text-xs text-white/40 text-center">
          © {currentYear} Rafaela Rocha - Fonoaudióloga. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-white/40">
          <span>Feito com</span>
          <Heart size={10} className="text-accent fill-accent" />
          <span>para você</span>
        </div>
      </div>
    </footer>
  );
}
