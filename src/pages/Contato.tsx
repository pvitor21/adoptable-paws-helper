
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contato() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-pet-purple/90 to-pet-teal/90 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Entre em Contato
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                Estamos à disposição para responder suas dúvidas e receber suas sugestões
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Envie uma mensagem</h2>
                <p className="text-gray-700 mb-8">
                  Preencha o formulário abaixo para entrar em contato conosco. Nossa equipe 
                  responderá sua mensagem o mais breve possível.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome</label>
                      <Input id="name" placeholder="Seu nome completo" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                      <Input id="email" type="email" placeholder="seu@email.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Assunto</label>
                    <Input id="subject" placeholder="Assunto da mensagem" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensagem</label>
                    <Textarea id="message" placeholder="Digite sua mensagem aqui..." className="min-h-[150px]" required />
                  </div>
                  
                  <Button type="submit" className="bg-pet-purple hover:bg-pet-purple/90">
                    Enviar mensagem
                  </Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Informações de contato</h2>
                <p className="text-gray-700 mb-8">
                  Você também pode entrar em contato conosco diretamente através dos canais abaixo 
                  ou visitando nossa sede durante o horário de funcionamento.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-pet-purple/10 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-pet-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Endereço</h3>
                      <p className="text-gray-600">
                        Rua Gastão Gonçalves, 79 - Santa Rosa, Niterói - RJ, 24240-030
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-pet-teal/10 rounded-full p-3">
                      <Phone className="h-6 w-6 text-pet-teal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Telefone</h3>
                      <p className="text-gray-600">
                        (21) 96724-2515
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-pet-orange/10 rounded-full p-3">
                      <Mail className="h-6 w-6 text-pet-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">
                        contato@adotapet.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Horário de Funcionamento</h3>
                      <p className="text-gray-600">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábado: 9h às 13h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Nossa Localização</h3>
                  <div className="rounded-lg overflow-hidden h-[300px] shadow-md">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2889612724376!2d-43.10987242397958!3d-22.904352237879397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983ef4d5e6b85%3A0xf6c49f41d7c29ff1!2sR.%20Gast%C3%A3o%20Gon%C3%A7alves%2C%2079%20-%20Santa%20Rosa%2C%20Niter%C3%B3i%20-%20RJ%2C%2024240-030!5e0!3m2!1spt-BR!2sbr!4v1698763213813!5m2!1spt-BR!2sbr" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
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
