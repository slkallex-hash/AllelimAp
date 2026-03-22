import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyMemoMatch() {
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
            <p className="text-gray-400 italic mb-12 text-lg">Última atualização: 22/03/2026</p>

            <div className="space-y-10 text-lg">
              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">1. INTRODUÇÃO</h2>
                <p className="text-gray-300 leading-relaxed">
                  Esta Política de Privacidade descreve como a AllellimApps ("nós", "nosso" ou "empresa") lida com as informações quando você usa nosso aplicativo MemoMatch - Jogo da Memória ("Aplicativo"). A sua privacidade é muito importante para nós.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">2. INFORMAÇÕES QUE COLETAMOS</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  O nosso Aplicativo foi desenvolvido para ser simples e direto. Nós não exigimos cadastro e não coletamos dados pessoais diretos (como nome, endereço, e-mail ou telefone).
                </p>
                <p className="text-gray-300 leading-relaxed">
                  No entanto, utilizamos serviços de terceiros (como provedores de anúncios e análises de falhas do Google) que podem coletar automaticamente identificadores anônimos do seu dispositivo (como o ID de publicidade e endereço IP) para o funcionamento básico da plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">3. COMO USAMOS AS INFORMAÇÕES</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As informações anônimas e técnicas coletadas por serviços de terceiros são utilizadas exclusivamente para:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Exibir anúncios adequados dentro do jogo.</li>
                  <li>Entender como o jogo é utilizado para melhorar a experiência do usuário.</li>
                  <li>Identificar e corrigir falhas técnicas (bugs) no aplicativo.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">4. COMPARTILHAMENTO DE DADOS</h2>
                <p className="text-gray-300 leading-relaxed">
                  Nós não vendemos, não comercializamos e não transferimos dados para terceiros. Os dados de uso anônimos são processados apenas pelas plataformas de distribuição (como o Google Play) e redes de anúncios associadas, operando sob suas próprias e rigorosas políticas de privacidade.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">5. SEGURANÇA DOS DADOS</h2>
                <p className="text-gray-300 leading-relaxed">
                  Como não armazenamos dados pessoais em nossos próprios servidores, o risco de vazamento de dados do usuário através do nosso aplicativo é praticamente nulo. Os dados processados por serviços de terceiros (como Google) são protegidos pela infraestrutura de segurança de classe mundial dessas empresas.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">6. PRIVACIDADE DAS CRIANÇAS</h2>
                <p className="text-gray-300 leading-relaxed">
                  O MemoMatch é um jogo livre para todas as idades. Nosso aplicativo foi configurado para não coletar dados pessoais de crianças e para exibir apenas anúncios adequados para o público em geral e infantil, em total conformidade com as Políticas de Família do Google Play.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">7. SEUS DIREITOS (LGPD)</h2>
                <p className="text-gray-300 leading-relaxed">
                  Como não retemos seus dados pessoais em nossos bancos de dados, não há o que ser excluído ou corrigido diretamente por nós. No entanto, você tem o direito de redefinir ou desativar o ID de publicidade do seu dispositivo a qualquer momento nas configurações do seu celular Android (Configurações &gt; Privacidade &gt; Anúncios).
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">8. CONTATO</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Para questões sobre esta política ou sobre o jogo, entre em contato:
                </p>
                <div className="text-gray-300 space-y-2">
                  <p>Email: slkallex@gmail.com</p>
                  <p>Website: www.alleapp.space</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#00E5FF] mb-4">9. ALTERAÇÕES NESTA POLÍTICA</h2>
                <p className="text-gray-300 leading-relaxed">
                  Podemos atualizar esta política periodicamente para refletir mudanças nas leis ou nos nossos serviços. Recomendamos que você visite esta página de tempos em tempos.
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
