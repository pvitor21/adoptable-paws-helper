
import { Tutor } from './types';

// Dados dos tutores
export const tutorsData: Tutor[] = [
  {
    id: 1,
    name: "Carlos Silva",
    cpf: "123.456.789-00",
    phone: "(11) 98765-4321",
    address: "Rua das Flores, 123 - São Paulo, SP",
    hasExistingPet: true,
    hasReturnedPet: false,
    adoptedPets: []
  },
  {
    id: 2,
    name: "Maria Oliveira",
    cpf: "987.654.321-00",
    phone: "(11) 91234-5678",
    address: "Avenida Paulista, 1000 - São Paulo, SP",
    hasExistingPet: false,
    hasReturnedPet: false,
    adoptedPets: []
  }
];
