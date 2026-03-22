import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-white">
            <p className="mb-6 text-gray-300">✅ LGPD Compliant • Google Play Store Ready</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#00E5FF] drop-shadow-[0_0_15px_rgba(0,229,255,0.4)] uppercase tracking-wide">
              POLÍTICA DE PRIVACIDADE
            </h1>
            <p className="text-gray-400 italic mb-12 text-lg">Última atualização: 17/03/2026</p>

            <div className="space-y-10 text-lg">
              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">1. INTRODUÇÃO</h2>
                <p className="text-gray-300 leading-relaxed">
                  Esta Política de Privacidade descreve como AllellimApps ("nós", "nosso" ou "empresa") coleta, usa e protege suas informações quando você usa nosso aplicativo MemoMatch - Jogo da Memoria ("Aplicativo").
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">2. INFORMAÇÕES QUE COLETAMOS</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Nosso aplicativo não coleta dados pessoais dos usuários.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Dados para personalização de anúncios
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">3. COMO USAMOS SUAS INFORMAÇÕES</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Utilizamos as informações coletadas para:
                </p>
                <ul className="list-none text-gray-300 space-y-2">
                  <li>Fornecer e manter nosso Aplicativo</li>
                  <li>Melhorar a experiência do usuário</li>
                  <li>Enviar comunicações importantes</li>
                  <li>Exibir anúncios relevantes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">4. COMPARTILHAMENTO DE DADOS</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Não vendemos, comercializamos ou transferimos suas informações pessoais para terceiros, exceto:
                </p>
                <ul className="list-none text-gray-300 space-y-2">
                  <li>Quando exigido por lei</li>
                  <li>Para proteger nossos direitos e propriedade</li>
                  <li>Com seu consentimento explícito</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">5. SEGURANÇA DOS DADOS</h2>
                <p className="text-gray-300 leading-relaxed">
                  Implementamos medidas de segurança apropriadas para proteger suas informações contra acesso, alteração, divulgação ou destruição não autorizada.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">6. RETENÇÃO DE DADOS</h2>
                <p className="text-gray-300 leading-relaxed">
                  Mantemos seus dados por 2 anos ou até que você solicite a exclusão.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">7. SEUS DIREITOS (LGPD)</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Você tem o direito de:
                </p>
                <ul className="list-none text-gray-300 space-y-2">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incorretos</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Retirar seu consentimento a qualquer momento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">8. CONTATO</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Para questões sobre esta política, entre em contato:
                </p>
                <div className="text-gray-300 space-y-2">
                  <p>Email: slkallex@gmail.com</p>
                  <p>Website: www.alleapp.space</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">9. ALTERAÇÕES NESTA POLÍTICA</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas através do Aplicativo.
                </p>
              </section>
            </div>

            <div className="mt-16 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) e regulamentações da Google Play Store.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Powered by AllellimApps
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

