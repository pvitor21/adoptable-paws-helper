
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Blog() {
  const newAnimals = [
    {
      id: 1,
      name: "Luna",
      type: "Cachorro",
      breed: "Vira-lata",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      arrivalDate: "2023-10-28",
      description: "Luna é uma cachorrinha muito dócil e brincalhona que chegou há apenas 3 dias em nossa instituição. Foi encontrada abandonada em um parque da cidade, mas felizmente está em boas condições de saúde. Ela tem aproximadamente 1 ano de idade e se adapta muito bem com outros animais. Luna adora brincar com bolas e é extremamente carinhosa com pessoas."
    },
    {
      id: 2,
      name: "Tom",
      type: "Gato",
      breed: "Siamês",
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      arrivalDate: "2023-10-25",
      description: "Tom chegou em nossa instituição há 6 dias. Este lindo gato siamês foi resgatado de uma situação de maus-tratos e está se recuperando muito bem. Tem aproximadamente 3 anos, é muito independente como a maioria dos gatos, mas adora receber carinho quando está no clima. Tom é excelente para famílias que buscam um companheiro tranquilo e que não exige tanta atenção constante."
    },
    {
      id: 3,
      name: "Max",
      type: "Cachorro",
      breed: "Labrador",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=662&q=80",
      arrivalDate: "2023-10-24",
      description: "Max é um labrador adulto que chegou conosco há 7 dias. Foi entregue por uma família que não podia mais cuidar dele devido a mudanças na estrutura familiar. É um cachorro extremamente bem treinado, calmo e ótimo com crianças. Max tem 5 anos e está em perfeitas condições de saúde. Ele é ideal para famílias que buscam um companheiro já adestrado e de temperamento estável."
    },
    {
      id: 4,
      name: "Nina",
      type: "Gato",
      breed: "Pelo curto brasileiro",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
      arrivalDate: "2023-10-22",
      description: "Nina chegou há 9 dias em nossa instituição após ser resgatada de uma colônia de gatos de rua. Esta gatinha tem aproximadamente 8 meses de idade e é extremamente brincalhona e sociável. Apesar de sua origem nas ruas, Nina se adaptou muito bem ao convívio humano e adora brincar com outros gatos. Ela será uma companhia perfeita para quem busca um pet ativo e divertido."
    }
  ];

  // Function to calculate days since arrival
  const getDaysSinceArrival = (dateString) => {
    const arrivalDate = new Date(dateString);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - arrivalDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-pet-purple/90 to-pet-teal/90 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Blog AdotaPet
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                Conheça os novos animais que chegaram à nossa instituição e acompanhe suas histórias
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Novos Animais para Adoção
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {newAnimals.map((animal) => (
              <Card key={animal.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{animal.name}</h3>
                    <span className="bg-pet-purple/10 text-pet-purple text-sm font-medium py-1 px-3 rounded-full">
                      {animal.type}
                    </span>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm">
                      Chegou há {getDaysSinceArrival(animal.arrivalDate)} dias • {animal.breed}
                    </p>
                  </div>
                  <p className="text-gray-700 mb-6">
                    {animal.description}
                  </p>
                  <div className="flex justify-end">
                    <Link 
                      to={`/pet/${animal.id}`} 
                      className="text-pet-purple hover:text-pet-purple/80 font-medium transition-colors"
                    >
                      Saiba mais sobre {animal.name} →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/" className="px-6 py-3 bg-pet-purple text-white rounded-md hover:bg-pet-purple/90 transition-colors">
              Ver todos os animais disponíveis
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
