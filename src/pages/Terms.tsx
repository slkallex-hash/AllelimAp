import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-deep-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-invert max-w-none"
          >
            <h1 className="text-4xl font-bold text-white mb-2 glow-text">TERMOS DE USO</h1>
            <p className="text-slate-400 mb-8 italic">Última atualização: 16 de março de 2026</p>
            
            <p className="text-slate-300 leading-relaxed mb-8">
              Ao acessar ou utilizar este aplicativo, o usuário concorda com os seguintes Termos de Uso.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">1. Aceitação dos Termos</h2>
              <p className="text-slate-300 leading-relaxed">
                Ao utilizar este aplicativo, você concorda em cumprir estes termos e todas as leis e regulamentos aplicáveis. Caso não concorde com qualquer parte destes termos, recomendamos que não utilize o aplicativo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">2. Uso do Aplicativo</h2>
              <p className="text-slate-300 leading-relaxed">
                O aplicativo é fornecido para uso pessoal e não comercial. O usuário concorda em utilizar o aplicativo de maneira responsável e em conformidade com a legislação vigente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">3. Conteúdo e Funcionalidades</h2>
              <p className="text-slate-300 leading-relaxed">
                O desenvolvedor se reserva o direito de modificar, atualizar ou remover funcionalidades do aplicativo a qualquer momento, sem aviso prévio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">4. Anúncios e Monetização</h2>
              <p className="text-slate-300 leading-relaxed">
                Este aplicativo pode exibir anúncios para manter o serviço gratuito. Os anúncios são fornecidos por plataformas de publicidade que podem coletar informações técnicas do dispositivo para melhorar a relevância dos anúncios exibidos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">5. Limitação de Responsabilidade</h2>
              <p className="text-slate-300 leading-relaxed">
                O aplicativo é fornecido "como está", sem garantias de funcionamento contínuo ou livre de erros. O desenvolvedor não se responsabiliza por danos diretos ou indiretos decorrentes do uso do aplicativo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">6. Propriedade Intelectual</h2>
              <p className="text-slate-300 leading-relaxed">
                Todo o conteúdo do aplicativo, incluindo design, textos, imagens e funcionalidades, pertence ao desenvolvedor e é protegido por leis de propriedade intelectual. É proibida a reprodução ou distribuição sem autorização.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">7. Encerramento de Uso</h2>
              <p className="text-slate-300 leading-relaxed">
                O desenvolvedor pode suspender ou encerrar o acesso ao aplicativo a qualquer momento em caso de violação destes termos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">8. Alterações nos Termos</h2>
              <p className="text-slate-300 leading-relaxed">
                Estes Termos de Uso podem ser atualizados periodicamente. O uso continuado do aplicativo após alterações significa que o usuário concorda com os novos termos.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
