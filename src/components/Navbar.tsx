import { useState } from 'react';
import { Menu, X, Instagram, Mail } from 'lucide-react';
import logoPng from '../../logo.png';

const waHref = 'https://wa.me/5519900000000';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMobile = () => setMenuOpen(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-gray-100">
        <div className="hidden md:block w-1/3">
          <a
            href="#contato"
            className="bg-laranja-claro hover:bg-laranja-pastel text-gray-800 font-medium py-2 px-6 rounded-full transition duration-300 shadow-sm inline-block"
          >
            Agende uma Consulta
          </a>
        </div>

        <div className="w-full md:w-1/3 flex justify-center items-center">
          <a href="#inicio" className="inline-flex shrink-0" aria-label="Rafaela Rocha Fonoaudióloga — Início">
            <img
              src={logoPng}
              alt=""
              className="h-12 md:h-14 w-auto max-w-[min(100%,220px)] object-contain"
              width={180}
              height={56}
            />
          </a>
        </div>

        <div className="hidden md:flex w-1/3 justify-end items-center gap-3">
          <a
            href="https://www.instagram.com/rafa.rch/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-laranja-pastel text-white flex items-center justify-center hover:bg-laranja-claro hover:text-gray-800 transition"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" strokeWidth={2} />
          </a>
          <a
            href="mailto:contato@rafaelarocha.com"
            className="w-8 h-8 rounded-full bg-verde-apagado text-white flex items-center justify-center hover:bg-verde-claro-mid hover:text-gray-800 transition"
            aria-label="E-mail"
          >
            <Mail className="w-4 h-4" strokeWidth={2} />
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-verde-claro-mid text-gray-800 flex items-center justify-center hover:bg-verde-apagado hover:text-white transition"
            aria-label="WhatsApp"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-2xl text-verde-apagado p-2 -mr-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X className="w-7 h-7" strokeWidth={2} /> : <Menu className="w-7 h-7" strokeWidth={2} />}
        </button>
      </div>

      <nav className="hidden md:block bg-white">
        <ul className="container mx-auto flex justify-center gap-8 py-3 text-sm font-medium text-gray-600 font-sans">
          <li>
            <a href="#inicio" className="hover:text-laranja-pastel transition">
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" className="hover:text-laranja-pastel transition">
              Sobre
            </a>
          </li>
          <li>
            <a href="#especialidades" className="hover:text-laranja-pastel transition">
              Especialidades
            </a>
          </li>
          <li>
            <a href="#especialidades" className="hover:text-laranja-pastel transition">
              Serviços
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-laranja-pastel transition">
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <div
        className={`md:hidden bg-verde-claro-bg border-t border-gray-200 absolute w-full left-0 shadow-lg ${
          menuOpen ? '' : 'hidden'
        }`}
      >
        <ul className="flex flex-col items-center py-4 gap-4 text-gray-700 font-medium font-sans">
          <li>
            <a href="#inicio" className="hover:text-laranja-pastel" onClick={closeMobile}>
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" className="hover:text-laranja-pastel" onClick={closeMobile}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#especialidades" className="hover:text-laranja-pastel" onClick={closeMobile}>
              Especialidades
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-laranja-pastel" onClick={closeMobile}>
              Contato
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className="bg-laranja-claro text-gray-800 py-2 px-6 rounded-full mt-2 inline-block"
              onClick={closeMobile}
            >
              Agendar
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
