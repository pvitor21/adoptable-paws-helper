
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex w-full items-center space-x-2">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Buscar por código, nome, espécie ou situação..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border-gray-300 focus:border-pet-purple focus:ring-pet-purple rounded-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <Button type="submit" className="bg-pet-purple hover:bg-pet-purple/90">
          Buscar
        </Button>
      </div>
    </form>
  );
}
