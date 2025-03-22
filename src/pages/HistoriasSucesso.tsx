
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function HistoriasSucesso() {
  const historias = [
    {
      id: 1,
      tutorName: "Família Oliveira",
      petName: "Thor",
      petType: "Cachorro",
      image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
      adoptionDate: "Março de 2023",
      story: "Quando decidimos adotar um animal, queríamos um companheiro para nossos dois filhos. Thor, um vira-lata de porte médio, chegou em nossas vidas trazendo mais alegria do que poderíamos imaginar. No início, ele era um pouco tímido e assustado, mas com paciência e muito carinho, ele se transformou em um cachorro confiante e brincalhão. Hoje, Thor é inseparável das crianças e participa de todas as atividades familiares. As manhãs de domingo no parque se tornaram muito mais divertidas! A adaptação foi tão natural que parece que ele sempre fez parte da nossa família. Adotar o Thor foi uma das melhores decisões que já tomamos, e somos extremamente gratos à AdotaPet por ter nos unido a esse amigo tão especial."
    },
    {
      id: 2,
      tutorName: "Carlos e Ana",
      petName: "Luna",
      petType: "Gato",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
      adoptionDate: "Janeiro de 2023",
      story: "Morando em um apartamento pequeno, sempre achamos que um gato seria o pet ideal para nós. A Luna, uma gatinha preta, estava na AdotaPet há mais de 3 meses, pois muitas pessoas ainda têm preconceito com gatos de pelagem escura. Assim que a vimos, foi amor à primeira vista. Ela é extremamente carinhosa e sociável, sempre nos recebendo na porta quando chegamos do trabalho. Luna adaptou-se perfeitamente à nossa rotina e transformou nosso apartamento em um verdadeiro lar. O mais incrível é como ela parece entender nossos momentos de alegria ou tristeza, sempre oferecendo sua companhia silenciosa e reconfortante. Adotar a Luna não apenas trouxe um animal para nossa casa, mas completou nossa família de uma maneira que não imaginávamos ser possível."
    },
    {
      id: 3,
      tutorName: "Pedro Silva",
      petName: "Bob",
      petType: "Cachorro",
      image: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      adoptionDate: "Outubro de 2022",
      story: "Depois que me aposentei, sentia falta de companhia e de uma rotina mais ativa. Decidi adotar o Bob, um labrador de 4 anos que havia sido abandonado por sua família anterior devido a mudanças. Desde o primeiro dia, Bob trouxe uma nova energia para minha vida. Nossas caminhadas matinais se tornaram sagradas, e graças a ele, conheci vários vizinhos e fiz novas amizades no bairro. Bob é extremamente carinhoso e protetor, sempre alerta e ao meu lado. Ele me deu um novo propósito e alegria para viver cada dia. Minha pressão arterial até melhorou desde que ele chegou! A equipe da AdotaPet foi fundamental nesse processo, oferecendo todo o suporte necessário e fazendo um acompanhamento cuidadoso nos primeiros meses. Sou eternamente grato por terem me apresentado ao meu melhor amigo."
    },
    {
      id: 4,
      tutorName: "Juliana Martins",
      petName: "Nina e Simba",
      petType: "Gatos",
      image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      adoptionDate: "Maio de 2023",
      story: "Sempre tive gatos na minha vida, e após me mudar para uma casa nova, decidi adotar um par de irmãos para que eles tivessem companhia. Nina e Simba estavam disponíveis para adoção na AdotaPet, e não pude resistir aos dois filhotes de 6 meses. A adaptação foi impressionantemente rápida - em poucas horas já estavam explorando cada canto da casa. O mais fascinante tem sido observar a personalidade única de cada um: enquanto Nina é mais independente e curiosa, Simba é extremamente carinhoso e solicita colo constantemente. Os dois transformaram minha casa em um lugar muito mais alegre e cheio de vida. É impossível ter um dia ruim com esses dois pequenos travessos por perto! O processo de adoção foi simples e bem conduzido pela equipe da AdotaPet, que me deu todas as orientações necessárias para receber os filhotes. Recomendo a todos que estão pensando em adotar!"
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
                Histórias de Sucesso
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                Conheça histórias inspiradoras de tutores que encontraram seus melhores amigos através da nossa ONG
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-700 mb-12">
              Cada adoção é uma história única de amor e transformação, tanto para os animais quanto para os tutores. 
              Compartilhamos aqui algumas das histórias mais especiais de famílias que abriram seus corações e lares 
              para nossos animais, criando laços que durarão para sempre.
            </p>

            <div className="space-y-12">
              {historias.map((historia) => (
                <Card key={historia.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-64 md:h-auto">
                      <img 
                        src={historia.image} 
                        alt={`${historia.tutorName} com ${historia.petName}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col">
                      <div className="mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">{historia.tutorName} & {historia.petName}</h2>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <span>{historia.petType}</span>
                          <span className="mx-2">•</span>
                          <span>Adotado em {historia.adoptionDate}</span>
                        </div>
                      </div>
                      
                      <div className="prose prose-sm flex-grow">
                        <p className="text-gray-700">
                          {historia.story}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-pet-purple/10 to-pet-teal/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Crie sua própria história de amor</h3>
              <p className="text-gray-700 mb-6">
                Você também pode fazer parte dessa transformação e criar sua própria história de sucesso. 
                Vários animais estão esperando por um lar amoroso e uma chance de trazer alegria para sua vida.
              </p>
              <Link to="/" className="px-6 py-3 bg-pet-purple text-white rounded-md hover:bg-pet-purple/90 transition-colors">
                Conheça nossos animais
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
