
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Phone, Mail, MapPin, Clock, Star, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { petsData } from "@/data/pets";
import { cn } from "@/lib/utils";

// Define default values for optional properties
const DEFAULT_SHELTER = {
  name: "Abrigo Amigo dos Animais",
  image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
  phone: "(11) 99999-9999",
  email: "contato@abrigoamigo.org",
  rating: "4.8 (120 avaliações)"
};

// Define default traits for pets
const DEFAULT_TRAITS = {
  personality: ["Amoroso", "Brincalhão", "Sociável"],
  health: ["Vacinado", "Vermifugado", "Castrado"],
  requirements: ["Ambiente seguro", "Visita prévia", "Termo de adoção"]
};

export default function PetDetail() {
  const { id } = useParams<{ id: string }>();
  const pet = petsData.find((p) => p.id === Number(id));
  
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!pet) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Pet não encontrado</h2>
            <p className="mb-6">
              O pet que você está procurando não existe ou foi adotado.
            </p>
            <Link to="/">
              <Button>Voltar para a página inicial</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev === pet.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? pet.images.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-pet-purple transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            Voltar para a Busca
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="relative rounded-lg overflow-hidden mb-4 h-[300px] md:h-[400px] bg-gray-100">
                <img
                  src={pet.images[activeImage]}
                  alt={pet.name}
                  className="w-full h-full object-cover"
                />
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 text-gray-800"
                  onClick={prevImage}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 text-gray-800"
                  onClick={nextImage}
                >
                  <ChevronRight size={24} />
                </button>
                <button
                  className={cn(
                    "absolute top-4 right-4 p-2 rounded-full shadow-sm",
                    isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-600 hover:bg-gray-100"
                  )}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart
                    size={20}
                    className={cn(isFavorite && "fill-white")}
                  />
                </button>
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {pet.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={cn(
                      "rounded-md overflow-hidden border-2 h-16 w-16 flex-shrink-0",
                      activeImage === idx ? "border-pet-purple" : "border-transparent"
                    )}
                    onClick={() => setActiveImage(idx)}
                  >
                    <img
                      src={img}
                      alt={`${pet.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{pet.name}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  {pet.breed}
                </span>
                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  {pet.gender}
                </span>
                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  {pet.weight}
                </span>
                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  {pet.type}
                </span>
              </div>
              <div className="flex items-center mb-6 text-sm text-gray-500">
                <MapPin size={16} className="mr-1" />
                <span>{pet.location}</span>
                <span className="mx-2">•</span>
                <span>{pet.distance} de distância</span>
              </div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Sobre {pet.name}</h2>
                <p className="text-gray-700 leading-relaxed">{pet.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card className="p-4">
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Personalidade</h3>
                  <div className="flex flex-wrap gap-2">
                    {DEFAULT_TRAITS.personality.map((trait, idx) => (
                      <span key={idx} className="bg-pet-purple/10 text-pet-purple text-sm font-medium px-3 py-1 rounded-full">
                        {trait}
                      </span>
                    ))}
                  </div>
                </Card>
                <Card className="p-4">
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Saúde</h3>
                  <div className="flex flex-wrap gap-2">
                    {DEFAULT_TRAITS.health.map((item, idx) => (
                      <span key={idx} className="bg-pet-teal/10 text-pet-teal text-sm font-medium px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
                <Card className="p-4">
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Requisitos</h3>
                  <ul className="space-y-2 text-gray-700">
                    {DEFAULT_TRAITS.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-pet-orange mr-2"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="p-6 mb-6">
                <div className="flex items-center mb-4">
                  <img
                    src={DEFAULT_SHELTER.image}
                    alt={DEFAULT_SHELTER.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{DEFAULT_SHELTER.name}</h3>
                    <div className="flex items-center text-amber-500">
                      <Star size={16} className="fill-amber-500" />
                      <span className="ml-1 text-sm text-gray-700">{DEFAULT_SHELTER.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <MapPin size={18} className="text-pet-purple mr-3" />
                    <span>{pet.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone size={18} className="text-pet-purple mr-3" />
                    <span>{DEFAULT_SHELTER.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail size={18} className="text-pet-purple mr-3" />
                    <span className="truncate">{DEFAULT_SHELTER.email}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock size={18} className="text-pet-purple mr-3" />
                    <span>Disponível para adoção</span>
                  </div>
                </div>
                <Button className="w-full bg-pet-purple hover:bg-pet-purple/90 mb-3">
                  Quero Adotar
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-pet-purple text-pet-purple hover:bg-pet-purple hover:text-white"
                >
                  Entrar em Contato
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Processo de Adoção
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pet-purple text-white flex items-center justify-center text-sm mr-3">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Contato</h4>
                      <p className="text-sm text-gray-600">Entre em contato com o abrigo</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pet-purple text-white flex items-center justify-center text-sm mr-3">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Visita</h4>
                      <p className="text-sm text-gray-600">Conheça o pet pessoalmente</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pet-purple text-white flex items-center justify-center text-sm mr-3">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Entrevista</h4>
                      <p className="text-sm text-gray-600">Avaliação do ambiente familiar</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pet-purple text-white flex items-center justify-center text-sm mr-3">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Adoção</h4>
                      <p className="text-sm text-gray-600">Assinatura do termo e adoção</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
