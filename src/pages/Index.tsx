
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import FiltersBar from "@/components/FiltersBar";
import PetCard from "@/components/PetCard";
import Footer from "@/components/Footer";
import { petsData } from "@/data/pets";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    distance: 100,
    age: "any",
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
          pet.name.toLowerCase().includes(queryLower) ||
          pet.breed.toLowerCase().includes(queryLower) ||
          pet.location.toLowerCase().includes(queryLower)
      );
    }

    // Apply animal type filter
    if (filters.animalTypes && filters.animalTypes.length > 0) {
      filteredPets = filteredPets.filter((pet) =>
        filters.animalTypes.includes(pet.type)
      );
    }

    // Apply age filter
    if (filters.age && filters.age !== "any") {
      filteredPets = filteredPets.filter((pet) => {
        if (filters.age === "baby") return pet.age.includes("meses");
        if (filters.age === "young") return pet.age.includes("1 ano") || pet.age.includes("2 anos");
        if (filters.age === "adult") {
          const ageNum = parseInt(pet.age);
          return ageNum >= 3;
        }
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
          <FiltersBar onFilterChange={handleFilterChange} />

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
                    age: "any",
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
                    age={pet.age}
                    breed={pet.breed}
                    gender={pet.gender}
                    image={pet.image}
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
                Por que adotar um pet?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Adotar um animal de estimação não só muda a vida dele, mas também a sua. 
                Conheça algumas razões para escolher a adoção.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 bg-pet-purple/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-pet-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Salve uma vida</h3>
                <p className="text-gray-600">
                  Ao adotar, você está dando uma segunda chance a um animal que precisa de um lar amoroso.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 bg-pet-teal/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-pet-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Combata o comércio</h3>
                <p className="text-gray-600">
                  A adoção ajuda a reduzir a demanda por criações comerciais e o abandono de animais.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 bg-pet-orange/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-pet-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Ganhe um amigo</h3>
                <p className="text-gray-600">
                  Os pets adotados frequentemente desenvolvem laços mais fortes e demonstram mais gratidão.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
