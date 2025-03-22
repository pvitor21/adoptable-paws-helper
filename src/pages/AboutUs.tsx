
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-pet-purple/90 to-pet-teal/90 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Sobre Nós
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                Conheça nossa missão e valores na promoção da adoção responsável de animais
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa Missão</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Nossa missão é promover a adoção responsável de animais, proporcionando uma 
                  plataforma segura e eficiente para conectar tutores e pets que precisam 
                  de um novo lar. Nos dedicamos a oferecer suporte completo durante todo o 
                  processo de adoção, desde a gestão dos animais disponíveis até a integração 
                  com seus novos tutores.
                </p>
                <p className="text-gray-700 mb-4">
                  Acreditamos que todo pet merece um lar amoroso, e nossa ONG trabalha para 
                  garantir que cada adoção seja uma experiência positiva, tanto para os animais 
                  quanto para as famílias. Com um sistema organizado e transparente, buscamos 
                  facilitar a adoção de animais e contribuir para o bem-estar de todos os 
                  envolvidos, enquanto mantemos um controle eficaz dos recursos e processos.
                </p>
                <p className="text-gray-700 font-medium">
                  Nosso compromisso é criar um futuro melhor para os animais, promovendo um 
                  ambiente de carinho, segurança e amor para cada um deles.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Cachorro e gato juntos" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-pet-purple/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pet-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Amor e Respeito</h3>
                  <p className="text-gray-600">
                    Tratamos cada animal com amor e respeito, reconhecendo suas necessidades individuais e trabalhando para garantir seu bem-estar em todas as etapas do processo de adoção.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-pet-teal/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pet-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Responsabilidade</h3>
                  <p className="text-gray-600">
                    Promovemos a adoção responsável, educando os tutores sobre os cuidados necessários e garantindo que os animais sejam adotados por famílias comprometidas com seu bem-estar.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-pet-orange/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pet-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Transparência</h3>
                  <p className="text-gray-600">
                    Mantemos um sistema transparente e organizado, compartilhando informações claras sobre os animais disponíveis e os processos de adoção para criar uma relação de confiança com os tutores.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gray-200 h-64 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Voluntários trabalhando com animais" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Junte-se a Nós</h2>
                <p className="text-gray-600 mb-8">
                  Você pode fazer a diferença na vida dos animais! Seja como voluntário, doador ou tutor, 
                  há muitas maneiras de contribuir para nossa missão. Juntos, podemos criar um 
                  futuro melhor para os animais que precisam de ajuda.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/cadastro" className="px-6 py-3 bg-pet-purple text-white rounded-md hover:bg-pet-purple/90 transition-colors">
                    Quero adotar
                  </Link>
                  <Link to="/contato" className="px-6 py-3 border border-pet-purple text-pet-purple rounded-md hover:bg-pet-purple/10 transition-colors">
                    Entre em contato
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
