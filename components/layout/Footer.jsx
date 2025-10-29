"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gold/10 text-white">
      <div className="container py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Logo + identidade */}
          <div>
            <h3 className="font-serif text-2xl text-gold mb-2">
              Dr. Thuan Pedrozo
            </h3>
            <p className="text-sm text-text/70">
              Advogado Criminalista | OAB/SP 396.342
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold text-gold mb-3 text-sm uppercase tracking-wide">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/areas/penal" className="hover:text-gold">
                  Direito Penal
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-gold">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatos + Redes */}
          <div>
            <h4 className="font-semibold text-gold mb-3 text-sm uppercase tracking-wide">
              Contato
            </h4>
            <p className="text-sm text-text/80">
              Praia Grande • Santos • São Vicente e região
            </p>
            <a 
              href="mailto:contato@thauanpedrozo.adv.br"
              className="block text-sm mt-2 hover:text-gold"
            >
              contato@thauanpedrozo.adv.br
            </a>

            {/* Redes sociais */}
            <div className="flex items-center gap-2 mt-4">
              <Instagram className="w-5 h-5 text-gold" />
              <a
                href="https://www.instagram.com/pedrozoadv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gold"
              >
                @pedrozoadv
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 mt-10 pt-6 text-center text-xs text-text/60">
          © {currentYear} • Escritório de Advocacia Dr. Thuan Pedrozo • Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
