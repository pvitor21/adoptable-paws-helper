
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import FiltersBar from "@/components/FiltersBar";
import PetCard from "@/components/PetCard";
import Footer from "@/components/Footer";
import { petsData } from "@/data/pets";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    distance: 100,
    entryDate: "any", // Changed from age to entryDate
    animalTypes: [] as string[],
  });

  const [displayedPets, setDisplayedPets] = useState(petsData);
  const [visiblePets, setVisiblePets] = useState(8);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterPets(query, activeFilters);
  };

  const handleFilterChange = (filters: any) => {
    setActiveFilters(filters);
    filterPets(searchQuery, filters);
  };

  const filterPets = (query: string, filters: any) => {
    let filteredPets = [...petsData];

    // Apply search query
    if (query) {
      const queryLower = query.toLowerCase();
      filteredPets = filteredPets.filter(
        (pet) =>
          pet.id.toString().includes(queryLower) || // Search by código_animal
          pet.name.toLowerCase().includes(queryLower) ||
          pet.type.toLowerCase().includes(queryLower) || // Search by espécie
          pet.location.toLowerCase().includes(queryLower) ||
          (pet.situation && pet.situation.toLowerCase().includes(queryLower)) // Search by situação
      );
    }

    // Apply animal type filter
    if (filters.animalTypes && filters.animalTypes.length > 0) {
      filteredPets = filteredPets.filter((pet) =>
        filters.animalTypes.includes(pet.type)
      );
    }

    // Apply entry date filter instead of age
    if (filters.entryDate && filters.entryDate !== "any") {
      const now = new Date();
      filteredPets = filteredPets.filter((pet) => {
        if (!pet.entryDate) return true;
        
        const entryDate = new Date(pet.entryDate);
        const diffTime = Math.abs(now.getTime() - entryDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (filters.entryDate === "recent") return diffDays <= 30; // Last month
        if (filters.entryDate === "medium") return diffDays > 30 && diffDays <= 90; // 1-3 months
        if (filters.entryDate === "old") return diffDays > 90; // More than 3 months
        
        return true;
      });
    }

    // Apply distance filter
    filteredPets = filteredPets.filter((pet) => {
      const distanceValue = parseInt(pet.distance);
      return distanceValue <= filters.distance;
    });

    setDisplayedPets(filteredPets);
    setVisiblePets(8);
  };

  const loadMorePets = () => {
    setVisiblePets((prev) => prev + 4);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-pet-purple/90 to-pet-teal/90 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Encontre seu novo melhor amigo
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                Milhares de animais adoráveis estão esperando por um lar amoroso.
                Adote, não compre!
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <FiltersBar onFilterChange={handleFilterChange} />
            
            <div className="flex gap-3">
              <Link to="/agendar-entrevista" className="whitespace-nowrap text-sm md:text-base px-3 py-2 bg-pet-teal text-white rounded-md hover:bg-pet-teal/90 transition-colors">
                Agendar Entrevista
              </Link>
              <Link to="/agendar-consulta" className="whitespace-nowrap text-sm md:text-base px-3 py-2 bg-pet-orange text-white rounded-md hover:bg-pet-orange/90 transition-colors">
                Agendar Consulta
              </Link>
            </div>
          </div>

          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Pets disponíveis para adoção
            </h2>
            <span className="text-gray-500 font-medium">
              {displayedPets.length} encontrados
            </span>
          </div>

          {displayedPets.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 text-pet-purple/30">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-700 mb-2">
                Nenhum pet encontrado
              </h3>
              <p className="text-gray-500 mb-6">
                Tente ajustar seus filtros ou fazer uma busca diferente.
              </p>
              <Button
                variant="outline"
                className="border-pet-purple text-pet-purple"
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilters({
                    distance: 100,
                    entryDate: "any",
                    animalTypes: [],
                  });
                  setDisplayedPets(petsData);
                }}
              >
                Limpar todos os filtros
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedPets.slice(0, visiblePets).map((pet) => (
                  <PetCard
                    key={pet.id}
                    id={pet.id}
                    name={pet.name}
                    entryDate={pet.entryDate}
                    breed={pet.breed}
                    gender={pet.gender}
                    weight={pet.weight}
                    image={pet.id === 1 ? "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" : 
                           pet.id === 2 ? "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" : 
                           pet.image}
                    location={pet.location}
                    distance={pet.distance}
                  />
                ))}
              </div>

              {visiblePets < displayedPets.length && (
                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    className="border-pet-purple text-pet-purple hover:bg-pet-purple hover:text-white"
                    onClick={loadMorePets}
                  >
                    Carregar mais pets
                  </Button>
                </div>
              )}
            </>
          )}
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Como funciona nosso processo de adoção
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Nossa ONG segue um processo cuidadoso para garantir que os animais encontrem lares adequados e amorosos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 bg-pet-purple/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-pet-purple">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Cadastro</h3>
                <p className="text-gray-600">
                  Realize seu cadastro como tutor fornecendo as informações necessárias.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 bg-pet-teal/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-pet-teal">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Entrevista</h3>
                <p className="text-gray-600">
                  Agende uma entrevista para verificarmos se você está apto para adoção.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 bg-pet-orange/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-pet-orange">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Adoção</h3>
                <p className="text-gray-600">
                  Após aprovação, você poderá escolher um pet compatível com seu perfil.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Acompanhamento</h3>
                <p className="text-gray-600">
                  Realizamos acompanhamento periódico para garantir o bem-estar do animal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Área do colaborador</h2>
                <p className="text-gray-600 mb-8">
                  Se você é secretário ou veterinário da nossa ONG, acesse a área restrita para 
                  gerenciar cadastros de animais, tutores, agendar consultas e muito mais.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/login" className="px-6 py-3 bg-pet-purple text-white rounded-md hover:bg-pet-purple/90 transition-colors">
                    Acessar área restrita
                  </Link>
                  <Link to="/cadastro" className="px-6 py-3 border border-pet-purple text-pet-purple rounded-md hover:bg-pet-purple/10 transition-colors">
                    Cadastrar novo usuário
                  </Link>
                </div>
              </div>
              <div className="bg-gray-200 h-64 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Área do colaborador" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
