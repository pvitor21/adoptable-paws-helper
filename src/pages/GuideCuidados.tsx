
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GuideCuidados() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-pet-purple/90 to-pet-teal/90 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Guia de Cuidados
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                Orientações essenciais para cuidar bem do seu novo membro da família
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Guia de Cuidados para o Seu Novo Animal</h2>
                <p className="text-gray-600 italic mb-6">
                  Parabéns pela adoção! Agora que você trouxe um novo membro para sua família, é importante garantir que ele tenha uma vida saudável, feliz e cheia de amor. Aqui estão algumas orientações essenciais para cuidar do seu novo pet:
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1586&q=80" 
                alt="Cuidados com pets" 
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-pet-purple/10 flex items-center justify-center mr-3 text-pet-purple font-bold">1</span>
                  Adaptação ao Novo Lar
                </h3>
                <div className="pl-14">
                  <p className="text-gray-700 mb-3">
                    <strong>Pacote de boas-vindas:</strong> Prepare um ambiente tranquilo e seguro para que seu animal possa se adaptar. Evite mudanças bruscas nos primeiros dias e ofereça um espaço confortável com cama, brinquedos e água fresca.
                  </p>
                  <p className="text-gray-700">
                    <strong>Paciência e atenção:</strong> Seu animal pode estar nervoso ou assustado, então tenha paciência enquanto ele se ajusta. Respeite o tempo de adaptação dele.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-pet-teal/10 flex items-center justify-center mr-3 text-pet-teal font-bold">2</span>
                  Alimentação
                </h3>
                <div className="pl-14">
                  <p className="text-gray-700 mb-3">
                    <strong>Ração balanceada:</strong> Ofereça uma alimentação de qualidade específica para a idade e o porte do seu animal. Consulte o veterinário para escolher a melhor ração.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Água limpa:</strong> Mantenha sempre água fresca e limpa à disposição do seu pet.
                  </p>
                  <p className="text-gray-700">
                    <strong>Horários regulares:</strong> Alimente seu animal nos mesmos horários todos os dias para criar uma rotina saudável.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-pet-orange/10 flex items-center justify-center mr-3 text-pet-orange font-bold">3</span>
                  Exercícios e Atividades
                </h3>
                <div className="pl-14">
                  <p className="text-gray-700 mb-3">
                    <strong>Caminhadas e brincadeiras:</strong> Dependendo do tipo de animal, é importante garantir que ele tenha espaço para correr e brincar. Caminhadas diárias e momentos de lazer são essenciais para a saúde física e mental.
                  </p>
                  <p className="text-gray-700">
                    <strong>Estimulação mental:</strong> Envolva seu pet em atividades que estimulam a mente, como brinquedos interativos e treinos de obediência.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600 font-bold">4</span>
                  Cuidados Veterinários
                </h3>
                <div className="pl-14">
                  <p className="text-gray-700 mb-3">
                    <strong>Consultas regulares:</strong> Leve seu animal ao veterinário para check-ups periódicos. Isso ajuda a identificar problemas de saúde precocemente e a manter a saúde do pet em dia.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Vacinação e vermifugação:</strong> Garanta que todas as vacinas e vermífugos estejam em dia. Pergunte ao veterinário sobre o calendário de vacinas necessário.
                  </p>
                  <p className="text-gray-700">
                    <strong>Controle de parasitas:</strong> Use produtos indicados para o controle de pulgas, carrapatos e outros parasitas, conforme orientação do veterinário.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 text-blue-600 font-bold">5</span>
                  Higiene e Aparência
                </h3>
                <div className="pl-14">
                  <p className="text-gray-700 mb-3">
                    <strong>Banhos regulares:</strong> A frequência do banho varia de acordo com o tipo de animal e sua rotina. Certifique-se de usar shampoos adequados para pets e não banhe seu animal com produtos para humanos.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Cuidados com os pelos:</strong> Escove os pelos do seu pet regularmente, especialmente se for de uma raça com pelagem longa. Isso evita nós e melhora a saúde da pele.
                  </p>
                  <p className="text-gray-700">
                    <strong>Corte de unhas:</strong> Mantenha as unhas do seu animal aparadas para evitar desconfortos ou machucados. Se não souber como cortar, peça orientação ao veterinário.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 text-purple-600 font-bold">6</span>
                  Treinamento e Comportamento
                </h3>
                <div className="pl-14">
                  <p className="text-gray-700 mb-3">
                    <strong>Obediência básica:</strong> Ensine comandos simples, como "sentar", "ficar" e "deitar". Isso ajudará a fortalecer o vínculo entre você e seu pet.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Socialização:</strong> Se possível, permita que seu animal tenha contato com outros pets e pessoas, para que ele se acostume com diferentes situações e ambientes.
                  </p>
                  <p className="text-gray-700">
                    <strong>Recompensas positivas:</strong> Reforce comportamentos positivos com petiscos e carinho. Evite punições, pois elas podem gerar medo ou confusão.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3 text-red-600 font-bold">7</span>
                  Atenção Emocional
                </h3>
                <div className="pl-14">
                  <p className="text-gray-700 mb-3">
                    <strong>Companhia e afeto:</strong> Dedique tempo para brincar, acariciar e interagir com seu animal. O carinho é essencial para o bem-estar emocional dele.
                  </p>
                  <p className="text-gray-700">
                    <strong>Evitar estresse:</strong> Crie um ambiente tranquilo e evite situações que possam causar estresse, como barulhos excessivos ou mudanças drásticas na rotina.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3 text-yellow-600 font-bold">8</span>
                  Segurança
                </h3>
                <div className="pl-14">
                  <p className="text-gray-700 mb-3">
                    <strong>Identificação:</strong> Certifique-se de que seu animal tenha uma identificação (coleira com tag ou microchip), caso se perca.
                  </p>
                  <p className="text-gray-700">
                    <strong>Ambiente seguro:</strong> Verifique se sua casa é segura para o pet. Isso inclui garantir que não haja objetos perigosos ao alcance dele e que o ambiente seja adequado ao porte do animal.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3 text-indigo-600 font-bold">9</span>
                  Prevenção e Emergências
                </h3>
                <div className="pl-14">
                  <p className="text-gray-700 mb-3">
                    <strong>Primeiros socorros:</strong> Tenha noções básicas de primeiros socorros para animais. Em casos de emergência, saiba onde fica o hospital veterinário mais próximo.
                  </p>
                  <p className="text-gray-700">
                    <strong>Prevenção de acidentes:</strong> Evite deixar seu animal em situações de risco, como em ambientes com substâncias tóxicas, plantas perigosas ou alimentos impróprios para ele.
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 bg-pet-purple/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Precisa de mais orientações?</h3>
              <p className="text-gray-700 mb-4">
                Se você tiver dúvidas específicas sobre como cuidar do seu animal, não hesite em entrar em contato com nossa equipe ou consultar um de nossos veterinários parceiros.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/veterinarios" className="text-pet-purple hover:text-pet-purple/80 font-medium transition-colors">
                  Conheça nossos veterinários parceiros →
                </Link>
                <Link to="/contato" className="text-pet-purple hover:text-pet-purple/80 font-medium transition-colors">
                  Entre em contato conosco →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
