
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProcessoAdocao() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-pet-purple/90 to-pet-teal/90 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Processo de Adoção
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                Conheça detalhadamente todas as etapas para adotar um pet em nossa instituição
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Um processo cuidadoso para garantir o bem-estar dos animais
                </h2>
                <p className="text-gray-700 mb-4">
                  Nosso processo de adoção foi desenvolvido para garantir que cada animal encontre um lar 
                  amoroso e adequado às suas necessidades. Ao mesmo tempo, buscamos oferecer aos tutores 
                  todas as informações e suporte necessários para uma adoção bem-sucedida.
                </p>
                <p className="text-gray-700">
                  Cada etapa é cuidadosamente conduzida por nossa equipe, que está comprometida em 
                  criar conexões duradouras entre pessoas e animais. Conheça abaixo o passo a passo 
                  detalhado do nosso processo.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                  alt="Cachorro adotado com família" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-16">
              <div className="relative">
                <div className="hidden md:block absolute top-0 bottom-0 left-12 w-0.5 bg-gradient-to-b from-pet-purple via-pet-teal to-pet-orange"></div>
                
                <div className="relative pl-0 md:pl-32">
                  <div className="hidden md:flex absolute top-5 -left-2 md:-left-20 w-16 h-16 rounded-full bg-gradient-to-r from-pet-purple to-pet-purple/80 text-white text-2xl font-bold items-center justify-center">1</div>
                  <div className="md:hidden w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-pet-purple to-pet-purple/80 text-white text-xl font-bold flex items-center justify-center">1</div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Cadastro Inicial</h3>
                  <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-pet-purple">
                    <p className="text-gray-700 mb-4">
                      O primeiro passo é realizar seu cadastro como potencial tutor em nosso sistema. 
                      Este cadastro inclui informações pessoais, dados de contato, endereço e questões sobre 
                      sua experiência prévia com animais.
                    </p>
                    <p className="text-gray-700">
                      Também perguntamos sobre o tipo de moradia, rotina familiar e expectativas 
                      quanto à adoção. Estas informações são essenciais para entendermos seu perfil 
                      e identificarmos quais animais seriam mais compatíveis com seu estilo de vida.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative pl-0 md:pl-32">
                  <div className="hidden md:flex absolute top-5 -left-2 md:-left-20 w-16 h-16 rounded-full bg-gradient-to-r from-pet-teal to-pet-teal/80 text-white text-2xl font-bold items-center justify-center">2</div>
                  <div className="md:hidden w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-pet-teal to-pet-teal/80 text-white text-xl font-bold flex items-center justify-center">2</div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Verificação de Histórico</h3>
                  <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-pet-teal">
                    <p className="text-gray-700 mb-4">
                      Após o cadastro, nossa equipe realiza uma verificação cuidadosa do histórico do 
                      candidato a tutor. Verificamos:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                      <li>Se o candidato já possui outros animais</li>
                      <li>Se já realizou adoções anteriormente em nossa ou outras instituições</li>
                      <li>Se houve devoluções de animais adotados sem justificativa adequada</li>
                      <li>Histórico de cuidados com animais anteriores</li>
                    </ul>
                    <p className="text-gray-700 font-medium">
                      <strong>Importante:</strong> Candidatos com histórico de devolução de animais 
                      adotados sem justificativa válida serão reprovados no processo, visando proteger 
                      o bem-estar dos nossos animais.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative pl-0 md:pl-32">
                  <div className="hidden md:flex absolute top-5 -left-2 md:-left-20 w-16 h-16 rounded-full bg-gradient-to-r from-pet-orange to-pet-orange/80 text-white text-2xl font-bold items-center justify-center">3</div>
                  <div className="md:hidden w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-pet-orange to-pet-orange/80 text-white text-xl font-bold flex items-center justify-center">3</div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Entrevista e Visita</h3>
                  <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-pet-orange">
                    <p className="text-gray-700 mb-4">
                      Após a verificação inicial, agendamos uma entrevista com o candidato a tutor. 
                      Esta entrevista pode ser realizada presencialmente em nossa sede ou por videochamada.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Durante a entrevista, conversamos sobre motivações para a adoção, expectativas, 
                      rotina familiar e outros fatores relevantes. Também esclarecemos dúvidas e 
                      compartilhamos informações sobre os cuidados necessários com os animais.
                    </p>
                    <p className="text-gray-700">
                      Em alguns casos, podemos solicitar uma visita ao domicílio para verificar se o 
                      ambiente é adequado para receber o animal, especialmente em casos de adoção 
                      de animais com necessidades específicas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative pl-0 md:pl-32">
                  <div className="hidden md:flex absolute top-5 -left-2 md:-left-20 w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-500/80 text-white text-2xl font-bold items-center justify-center">4</div>
                  <div className="md:hidden w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-500/80 text-white text-xl font-bold flex items-center justify-center">4</div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Preparação Veterinária</h3>
                  <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500">
                    <p className="text-gray-700 mb-4">
                      Paralelamente ao processo de avaliação do tutor, nossos animais passam por uma 
                      preparação veterinária completa antes de serem disponibilizados para adoção. Esta preparação inclui:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                      <li>Exame clínico completo</li>
                      <li>Vacinação de acordo com a idade</li>
                      <li>Vermifugação</li>
                      <li>Castração (quando em idade adequada)</li>
                      <li>Tratamento de condições pré-existentes</li>
                      <li>Microchipagem para identificação permanente</li>
                    </ul>
                    <p className="text-gray-700">
                      Todos estes procedimentos são realizados por nossa equipe de veterinários parceiros, 
                      garantindo que o animal seja entregue em ótimas condições de saúde.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative pl-0 md:pl-32">
                  <div className="hidden md:flex absolute top-5 -left-2 md:-left-20 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-500/80 text-white text-2xl font-bold items-center justify-center">5</div>
                  <div className="md:hidden w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-500/80 text-white text-xl font-bold flex items-center justify-center">5</div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Formalização da Adoção</h3>
                  <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
                    <p className="text-gray-700 mb-4">
                      Após a aprovação do tutor e a conclusão da preparação veterinária do animal, 
                      realizamos a formalização da adoção. Este processo inclui:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                      <li>Assinatura do termo de adoção responsável</li>
                      <li>Entrega da carteira de vacinação e documentos veterinários</li>
                      <li>Orientações específicas sobre os cuidados com o animal adotado</li>
                      <li>Agendamento do acompanhamento pós-adoção</li>
                    </ul>
                    <p className="text-gray-700">
                      O termo de adoção estabelece os compromissos do tutor, incluindo a obrigação de 
                      proporcionar boas condições de vida, alimentação adequada, cuidados veterinários 
                      e não abandonar ou transferir o animal para terceiros sem comunicar a instituição.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative pl-0 md:pl-32">
                  <div className="hidden md:flex absolute top-5 -left-2 md:-left-20 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-500/80 text-white text-2xl font-bold items-center justify-center">6</div>
                  <div className="md:hidden w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-500/80 text-white text-xl font-bold flex items-center justify-center">6</div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Acompanhamento Pós-Adoção</h3>
                  <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-500">
                    <p className="text-gray-700 mb-4">
                      Nossa responsabilidade não termina com a entrega do animal. Realizamos um 
                      acompanhamento após a adoção para garantir que:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                      <li>O animal está se adaptando bem ao novo lar</li>
                      <li>O tutor está conseguindo lidar com os desafios da adaptação</li>
                      <li>As necessidades do animal estão sendo atendidas adequadamente</li>
                      <li>Dúvidas e dificuldades estão sendo solucionadas</li>
                    </ul>
                    <p className="text-gray-700">
                      Este acompanhamento é realizado através de contatos telefônicos, visitas 
                      presenciais quando necessário, e suporte contínuo ao tutor durante os primeiros 
                      meses após a adoção.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-pet-purple/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pronto para adotar?</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Agora que você conhece nosso processo de adoção, está pronto para dar o primeiro passo 
                e abrir seu coração e sua casa para um novo amigo?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/cadastro" className="px-6 py-3 bg-pet-purple text-white rounded-md hover:bg-pet-purple/90 transition-colors">
                  Iniciar processo de adoção
                </Link>
                <Link to="/" className="px-6 py-3 border border-pet-purple text-pet-purple rounded-md hover:bg-pet-purple/10 transition-colors">
                  Ver animais disponíveis
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
