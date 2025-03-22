
import { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PetCardProps {
  id: number;
  name: string;
  breed: string;
  gender: string;
  image: string;
  entryDate?: string;
  weight?: string;
  location: string;
  distance: string;
}

export default function PetCard({
  id,
  name,
  breed,
  gender,
  image,
  entryDate,
  weight,
  location,
  distance,
}: PetCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden pet-card-shadow">
      <div className="relative">
        <Link to={`/pet/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-48 w-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </Link>
        <button
          className={cn(
            "absolute top-3 right-3 p-2 rounded-full",
            isFavorite ? "bg-red-500 text-white" : "bg-white/80 text-gray-600 hover:bg-white"
          )}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            size={18}
            className={cn(isFavorite && "fill-white")}
          />
        </button>
        <div className="absolute bottom-3 left-3 bg-white/90 rounded-full px-3 py-1 text-xs font-medium text-pet-purple">
          {distance}
        </div>
      </div>
      <div className="p-4">
        <Link to={`/pet/${id}`}>
          <h3 className="font-bold text-lg text-gray-800 hover:text-pet-purple transition-colors">{name}</h3>
        </Link>
        <p className="text-sm text-gray-500">{breed} · {gender}{weight ? ` · ${weight}` : ''}</p>
        {entryDate && (
          <p className="text-xs text-gray-400 mt-1">Entrada: {new Date(entryDate).toLocaleDateString('pt-BR')}</p>
        )}
        <div className="mt-3 flex items-center text-xs text-gray-500">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          {location}
        </div>
      </div>
    </div>
  );
}
