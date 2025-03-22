
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ComoFunciona() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-pet-purple/90 to-pet-teal/90 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Como Funciona
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                Entenda o nosso processo de adoção e como trabalhamos para garantir o bem-estar dos animais
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Processo de Adoção</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Quando um novo tutor deseja adotar um animal em nossa instituição, ele precisa passar por um processo cuidadoso de avaliação, que inclui várias etapas importantes:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Verificação de Histórico</h3>
              <p className="text-gray-700 mb-4">
                Verificamos se o potencial tutor já possui outros animais e qual é sua experiência prévia com adoções. 
                Essa verificação inclui consultar nosso banco de dados e de outras instituições parceiras para saber 
                se o candidato já adotou e devolveu algum animal no passado.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Importante:</strong> Caso o tutor tenha histórico de devolução de animal adotado, infelizmente 
                ele será reprovado no processo de adoção. Esta medida existe para proteger o bem-estar dos nossos animais 
                e garantir que eles encontrem lares permanentes e estáveis.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Compatibilidade com Outros Animais</h3>
              <p className="text-gray-700 mb-4">
                Se o candidato já possui outros animais em casa, avaliamos a compatibilidade entre eles e o novo 
                pet. Em alguns casos, podemos solicitar uma visita prévia para verificar como os animais interagem.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Avaliação Veterinária</h3>
              <p className="text-gray-700 mb-4">
                Antes da entrega ao novo tutor, todos os nossos animais passam por uma avaliação completa com 
                nossos veterinários parceiros. Esta avaliação inclui:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Exame clínico geral</li>
                <li>Vacinação completa adequada à idade</li>
                <li>Vermifugação</li>
                <li>Castração (quando em idade apropriada)</li>
                <li>Tratamento de condições pré-existentes (se necessário)</li>
                <li>Microchipagem para identificação permanente</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Só após a conclusão satisfatória de todos estes procedimentos médicos e a aprovação do perfil 
                do tutor, o animal estará pronto para ser entregue ao seu novo lar.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Acompanhamento Pós-Adoção</h3>
              <p className="text-gray-700 mb-4">
                Nossa responsabilidade não termina com a entrega do animal. Realizamos visitas de acompanhamento 
                para garantir que tanto o animal quanto o tutor estejam se adaptando bem à nova situação. Este 
                acompanhamento geralmente ocorre durante os primeiros meses após a adoção.
              </p>

              <div className="bg-pet-purple/10 rounded-lg p-6 mt-8">
                <h4 className="font-semibold text-pet-purple mb-3">Compromisso com o Bem-Estar Animal</h4>
                <p className="text-gray-700">
                  Todo este processo existe com um único objetivo: garantir que nossos animais encontrem lares 
                  amorosos e permanentes, onde receberão todos os cuidados necessários para uma vida feliz e saudável.
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Link to="/cadastro" className="px-6 py-3 bg-pet-purple text-white rounded-md hover:bg-pet-purple/90 transition-colors">
                Iniciar processo de adoção
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
