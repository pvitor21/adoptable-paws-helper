
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Quais são os critérios para eu ser aprovado no processo de adoção de um animal?",
      answer: "Para ser aprovado no processo de adoção, avaliamos diversos critérios como: sua experiência prévia com animais, condições de moradia adequadas ao porte e necessidades do animal, disponibilidade de tempo para cuidados, estabilidade financeira para arcar com alimentação e cuidados veterinários, e ausência de histórico negativo de adoções anteriores. Também consideramos a compatibilidade entre seu estilo de vida e o perfil do animal desejado. Todos esses fatores são analisados durante a entrevista e possível visita ao seu domicílio."
    },
    {
      question: "Como posso saber se meu histórico de adoções anteriores pode influenciar no processo de adoção de um novo pet?",
      answer: "Seu histórico de adoções anteriores é um fator importante em nossa avaliação. Se você já adotou animais anteriormente e cuidou bem deles, isso conta positivamente. No entanto, se há registros de devolução de animais sem justificativa adequada, maus-tratos ou negligência, isso pode resultar em reprovação no processo. Durante a entrevista, conversaremos abertamente sobre suas experiências anteriores. Se houver preocupações específicas sobre seu histórico, recomendamos ser transparente desde o início do processo."
    },
    {
      question: "Quais exames veterinários o animal passa antes de ser entregue ao novo tutor?",
      answer: "Antes da entrega ao novo tutor, todos os nossos animais passam por uma avaliação veterinária completa que inclui: exame clínico geral, hemograma completo quando necessário, vacinação apropriada para a idade e espécie (incluindo vacina antirrábica para animais adultos), vermifugação, tratamento contra ectoparasitas (pulgas e carrapatos), castração (quando em idade adequada), microchipagem para identificação permanente, e tratamentos específicos para quaisquer condições de saúde identificadas. Esta abordagem garante que o animal esteja em condições ótimas de saúde no momento da adoção."
    },
    {
      question: "O que acontece se eu tiver outro animal em casa? Há algum requisito especial para quem já tem pets?",
      answer: "Ter outros animais em casa não é impedimento para uma nova adoção, mas requer considerações adicionais. Avaliamos a compatibilidade entre o animal a ser adotado e seus pets atuais, considerando temperamento, porte, idade e histórico de socialização. Pedimos informações sobre a vacinação dos seus animais atuais, que devem estar em dia. Em alguns casos, podemos sugerir um período de adaptação gradual ou mesmo um teste de convivência antes da finalização da adoção. A experiência prévia com o manejo de múltiplos animais é vista como positiva, desde que você demonstre capacidade de dar atenção adequada a todos."
    },
    {
      question: "Quanto tempo leva todo o processo de adoção até o momento da entrega do animal?",
      answer: "O tempo do processo de adoção varia conforme cada caso, mas geralmente leva entre 1 a 3 semanas. Este período inclui: análise inicial do cadastro (1-2 dias), agendamento e realização da entrevista (3-5 dias), visita domiciliar quando necessária (3-7 dias), finalização dos procedimentos veterinários do animal (que podem incluir castração, vacinação e outros tratamentos - 7-14 dias). Se o animal já estiver totalmente preparado do ponto de vista médico e seu processo de aprovação for rápido, a adoção pode ser concluída em aproximadamente uma semana. Casos mais complexos podem levar mais tempo. Mantemos os adotantes informados durante todo o processo."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-pet-purple/90 to-pet-teal/90 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Perguntas Frequentes
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                Encontre respostas para as dúvidas mais comuns sobre nosso processo de adoção
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-gray-800">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 p-6 bg-pet-purple/10 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ainda tem dúvidas?</h3>
              <p className="text-gray-700 mb-4">
                Se você não encontrou a resposta para sua pergunta, entre em contato conosco. 
                Estamos aqui para ajudar e garantir que você tenha todas as informações necessárias 
                para uma adoção responsável.
              </p>
              <Link to="/contato" className="text-pet-purple hover:text-pet-purple/80 font-medium transition-colors">
                Entre em contato →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
