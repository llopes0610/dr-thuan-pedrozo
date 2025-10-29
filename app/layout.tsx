import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Thuan Pedrozo — Advocacia Criminal no Litoral SP",
  description:
    "Advogado especializado em Direito Penal e Processual Penal, atuando no Litoral de SP. Atendimento ágil e humanizado com triagem assistida por IA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`min-h-screen bg-grafite text-text ${cormorant.variable} ${poppins.variable}`}
      >
        {/* HEADER */}
        <header className="sticky top-0 z-20 border-b border-gold/20 bg-grafite/80 backdrop-blur">
          <div className="container flex items-center justify-between py-4">
            <div className="font-serif text-lg tracking-wide text-gold/90">
              Dr. Thuan Pedrozo —{" "}
              <span className="font-normal">Advocacia Criminal</span>
            </div>
            <nav className="text-sm text-text/80">
              <a href="/" className="hover:text-gold transition-colors px-3">
                Início
              </a>
              <a href="/sobre" 
                 className="hover:text-gold transition-colors px-3">
                  Sobre 
              </a>

              <a
                href="/areas/penal"
                className="hover:text-gold transition-colors px-3"
              >
                Direito Penal
              </a>
              <a
                href="/contato"
                className="hover:text-gold transition-colors px-3"
              >
                Contato
              </a>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main>{children}</main>

        {/* FOOTER GLOBAL */}
        <Footer />
      </body>
    </html>
  );
}
