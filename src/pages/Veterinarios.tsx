
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Veterinarios() {
  const veterinarios = [
    {
      id: 1,
      name: "Dra. Carolina Silva",
      specialty: "Clínica Geral e Cirurgia",
      experience: 15,
      animalsAttended: "5.000+",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "A Dra. Carolina é especialista em clínica geral e cirurgia de pequenos animais. Com mais de 15 anos de experiência, ela já atendeu mais de 5.000 pets e é conhecida por seu cuidado excepcional e abordagem compassiva. Formada pela Universidade Federal do Rio de Janeiro, ela se especializou em cirurgias ortopédicas e possui certificações em medicina felina. A Dra. Carolina é uma defensora do bem-estar animal e participa ativamente de projetos de castração em comunidades carentes."
    },
    {
      id: 2,
      name: "Dr. Rafael Mendes",
      specialty: "Dermatologia e Alergologia",
      experience: 12,
      animalsAttended: "4.200+",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      description: "O Dr. Rafael é especialista em problemas dermatológicos e alergias em cães e gatos. Em seus 12 anos de carreira, já tratou mais de 4.200 animais com condições de pele complexas. Formado pela Universidade Federal Fluminense com mestrado em dermatologia veterinária, ele é reconhecido por seu diagnóstico preciso e tratamentos eficazes para condições alérgicas e autoimunes. O Dr. Rafael regularmente ministra palestras sobre cuidados com a pele de animais domésticos e é autor de artigos científicos na área."
    },
    {
      id: 3,
      name: "Dra. Beatriz Oliveira",
      specialty: "Pediatria e Geriatria Animal",
      experience: 10,
      animalsAttended: "3.800+",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "A Dra. Beatriz é especializada em cuidados com filhotes e animais idosos. Durante seus 10 anos de atuação profissional, já atendeu mais de 3.800 animais em diferentes fases da vida. Formada pela Universidade de São Paulo com especialização em geriatria animal, ela tem um olhar atento às necessidades específicas de cada fase da vida dos pets. A Dra. Beatriz desenvolveu protocolos de atendimento para animais seniores e é voluntária em programas educativos sobre cuidados com filhotes recém-nascidos."
    },
    {
      id: 4,
      name: "Dr. André Martins",
      specialty: "Cardiologia e Emergências",
      experience: 13,
      animalsAttended: "4.500+",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "O Dr. André é especialista em cardiologia veterinária e medicina de emergência. Ao longo de seus 13 anos de carreira, já salvou a vida de mais de 4.500 animais em situações críticas. Formado pela Universidade Federal do Rio Grande do Sul com doutorado em cardiologia veterinária, ele utiliza tecnologia avançada para diagnosticar e tratar problemas cardíacos complexos. O Dr. André é referência em procedimentos de emergência e capacita outros profissionais em técnicas de reanimação cardiopulmonar para animais."
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
                Veterinários Parceiros
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                Conheça nossos profissionais dedicados à saúde e bem-estar dos animais
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-700 mb-12">
              Nossa equipe de veterinários parceiros é formada por profissionais altamente qualificados e 
              apaixonados por animais. Eles são responsáveis por garantir a saúde e o bem-estar de todos 
              os pets que passam pela nossa ONG, realizando exames, vacinações, castrações e tratamentos 
              necessários antes da adoção.
            </p>

            <div className="space-y-12">
              {veterinarios.map((vet) => (
                <Card key={vet.id} className="overflow-hidden shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-1 h-64 md:h-auto">
                      <img 
                        src={vet.image} 
                        alt={vet.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <CardContent className="p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{vet.name}</h2>
                        <p className="text-pet-purple font-medium mb-4">{vet.specialty}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="bg-pet-purple/10 px-3 py-1 rounded-full text-sm">
                            <span className="text-pet-purple font-medium">{vet.experience} anos de experiência</span>
                          </div>
                          <div className="bg-pet-teal/10 px-3 py-1 rounded-full text-sm">
                            <span className="text-pet-teal font-medium">{vet.animalsAttended} animais atendidos</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700">
                          {vet.description}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/agendar-consulta" className="px-6 py-3 bg-pet-teal text-white rounded-md hover:bg-pet-teal/90 transition-colors">
                Agendar consulta veterinária
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
