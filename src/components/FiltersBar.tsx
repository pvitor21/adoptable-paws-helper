
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Filter, X, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FiltersBarProps {
  onFilterChange: (filters: any) => void;
}

export default function FiltersBar({ onFilterChange }: FiltersBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [distance, setDistance] = useState([20]);
  const [age, setAge] = useState<string>("any");
  const [selectedAnimals, setSelectedAnimals] = useState<string[]>([]);
  
  const animalTypes = [
    { id: "dog", label: "Cachorros" },
    { id: "cat", label: "Gatos" },
    { id: "bird", label: "Aves" },
    { id: "other", label: "Outros" },
  ];

  const handleAnimalTypeChange = (animalId: string) => {
    if (selectedAnimals.includes(animalId)) {
      setSelectedAnimals(selectedAnimals.filter(id => id !== animalId));
    } else {
      setSelectedAnimals([...selectedAnimals, animalId]);
    }
  };

  const handleApplyFilters = () => {
    onFilterChange({
      distance: distance[0],
      age,
      animalTypes: selectedAnimals,
    });
  };

  const handleResetFilters = () => {
    setDistance([20]);
    setAge("any");
    setSelectedAnimals([]);
    onFilterChange({
      distance: 20,
      age: "any",
      animalTypes: [],
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
      <div className="flex justify-between items-center">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-gray-700 font-medium"
        >
          <Filter size={18} className="mr-2" />
          Filtros
          {isOpen ? (
            <ChevronUp size={18} className="ml-2" />
          ) : (
            <ChevronDown size={18} className="ml-2" />
          )}
        </button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleResetFilters}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={16} className="mr-1" /> Limpar
        </Button>
      </div>

      {isOpen && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Tipo de Animal</h4>
            <div className="space-y-2">
              {animalTypes.map((animal) => (
                <div key={animal.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={animal.id} 
                    checked={selectedAnimals.includes(animal.id)}
                    onCheckedChange={() => handleAnimalTypeChange(animal.id)}
                  />
                  <Label htmlFor={animal.id} className="cursor-pointer">{animal.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Distância</h4>
            <div className="px-1">
              <Slider
                defaultValue={[20]}
                max={100}
                step={1}
                value={distance}
                onValueChange={setDistance}
                className="pt-3 pb-6"
              />
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">0 km</span>
                <span className="text-sm font-medium text-pet-purple">{distance[0]} km</span>
                <span className="text-sm text-gray-500">100 km</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Idade</h4>
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant={age === "any" ? "default" : "outline"}
                size="sm"
                className={cn(
                  age === "any" && "bg-pet-purple hover:bg-pet-purple/90"
                )}
                onClick={() => setAge("any")}
              >
                Qualquer
              </Button>
              <Button
                type="button"
                variant={age === "baby" ? "default" : "outline"}
                size="sm"
                className={cn(
                  age === "baby" && "bg-pet-purple hover:bg-pet-purple/90"
                )}
                onClick={() => setAge("baby")}
              >
                Filhote
              </Button>
              <Button
                type="button"
                variant={age === "young" ? "default" : "outline"}
                size="sm"
                className={cn(
                  age === "young" && "bg-pet-purple hover:bg-pet-purple/90"
                )}
                onClick={() => setAge("young")}
              >
                Jovem
              </Button>
              <Button
                type="button"
                variant={age === "adult" ? "default" : "outline"}
                size="sm"
                className={cn(
                  age === "adult" && "bg-pet-purple hover:bg-pet-purple/90"
                )}
                onClick={() => setAge("adult")}
              >
                Adulto
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-3 mt-4">
            <Button 
              className="w-full bg-pet-purple hover:bg-pet-purple/90"
              onClick={handleApplyFilters}
            >
              Aplicar Filtros
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
