
import { Pet } from './types';

// Exemplo de dados de pets
export const petsData: Pet[] = [
  {
    id: 1,
    name: "Luna",
    type: "dog",
    breed: "Labrador Retriever",
    entryDate: "2023-05-15",
    gender: "Fêmea",
    weight: "15kg",
    description: "Luna é uma cachorra muito amorosa e brincalhona. Ela adora correr e brincar ao ar livre. É muito carinhosa com crianças e se dá bem com outros animais. Ela está em busca de um lar amoroso onde possa receber muita atenção e carinho.",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1548658166-136d9f6a7e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    ],
    location: "São Paulo, SP",
    distance: "5 km",
    situation: "Saudável",
    vaccinations: [
      {
        date: "2023-06-10",
        type: "Antirrábica",
        validity: "2024-06-10"
      },
      {
        date: "2023-05-20",
        type: "V10",
        validity: "2024-05-20"
      }
    ]
  },
  {
    id: 2,
    name: "Felix",
    type: "cat",
    breed: "Siamês",
    entryDate: "2023-06-01",
    gender: "Macho",
    weight: "4kg",
    description: "Felix é um gato elegante e tranquilo. Ele adora tomar sol na janela e brincar com bolinhas. É independente, mas também gosta de receber carinho e atenção. Ele está procurando um lar calmo e acolhedor.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    ],
    location: "São Paulo, SP",
    distance: "7 km",
    situation: "Saudável",
    vaccinations: [
      {
        date: "2023-07-01",
        type: "V4",
        validity: "2024-07-01"
      }
    ]
  },
  {
    id: 3,
    name: "Thor",
    type: "dog",
    breed: "Golden Retriever",
    entryDate: "2023-04-20",
    gender: "Macho",
    weight: "25kg",
    description: "Thor é um cão maduro, tranquilo e muito bem treinado. Ele é extremamente leal e amoroso. Adoraria encontrar uma família para acompanhar em longas caminhadas e receber muito carinho. É muito paciente com crianças e se dá bem com outros animais.",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1582068955580-dcc6c0812b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvbGRlbiUyMHJldHJpZXZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ],
    location: "São Paulo, SP",
    distance: "12 km",
    situation: "Saudável",
    vaccinations: [
      {
        date: "2023-05-01",
        type: "V10",
        validity: "2024-05-01"
      },
      {
        date: "2023-05-01",
        type: "Giardia",
        validity: "2024-05-01"
      }
    ]
  },
  {
    id: 4,
    name: "Mia",
    type: "cat",
    breed: "Persa",
    entryDate: "2023-07-10",
    gender: "Fêmea",
    weight: "5kg",
    description: "Mia é uma gata elegante e requintada. Ela aprecia ambientes tranquilos e organizados. Adora ser escovada e receber carinho, mas também valoriza seu espaço pessoal. Ela procura um lar sem outros pets, onde possa ser a rainha da casa.",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    ],
    location: "São Paulo, SP",
    distance: "3 km",
    situation: "Saudável",
    vaccinations: [
      {
        date: "2023-08-01",
        type: "V4",
        validity: "2024-08-01"
      },
      {
        date: "2023-08-01",
        type: "Leucemia Felina",
        validity: "2024-08-01"
      }
    ]
  },
  {
    id: 5,
    name: "Bob",
    type: "dog",
    breed: "Bulldog Francês",
    entryDate: "2023-06-25",
    gender: "Macho",
    weight: "12kg",
    description: "Bob é um cachorro divertido e cheio de personalidade. Apesar de pequeno, tem muita energia e adora brincar. É muito sociável e se dá bem com todos, inclusive crianças e outros pets. Ele está procurando um lar amoroso onde possa se divertir e receber muitos carinhos.",
    image: "https://images.unsplash.com/photo-1612774412771-005aa03c6c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1612774412771-005aa03c6c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593077330786-8ed53838dc1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    location: "Niterói, RJ",
    distance: "8 km",
    situation: "Saudável",
    vaccinations: [
      {
        date: "2023-07-01",
        type: "V10",
        validity: "2024-07-01"
      },
      {
        date: "2023-07-01",
        type: "Tosse dos Canis",
        validity: "2024-07-01"
      }
    ]
  },
  {
    id: 6,
    name: "Nina",
    type: "cat",
    breed: "Ragdoll",
    entryDate: "2023-08-01",
    gender: "Fêmea",
    weight: "3kg",
    description: "Nina é uma filhote super brincalhona e cheia de vida. Adora brincar com bolinhas e perseguir brinquedos. É muito sociável e se adapta facilmente a novos ambientes. Está à procura de uma família que lhe dê muito amor e atenção.",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1626602411112-10742f9a3ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ],
    location: "Niterói, RJ",
    distance: "15 km",
    situation: "Saudável",
    vaccinations: [
      {
        date: "2023-08-15",
        type: "V4",
        validity: "2024-08-15"
      }
    ]
  },
  {
    id: 7,
    name: "Rex",
    type: "dog",
    breed: "Pastor Alemão",
    entryDate: "2023-03-01",
    gender: "Macho",
    weight: "30kg",
    description: "Rex é um cão inteligente, leal e protetor. Muito bem treinado e obediente. Adoraria fazer parte de uma família ativa que possa proporcionar atividades físicas e mentais. É um companheiro fiel e protetor.",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2VybWFuJTIwc2hlcGhlcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2VybWFuJTIwc2hlcGhlcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1555191499-2b71661954b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2VybWFuJTIwc2hlcGhlcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2VybWFuJTIwc2hlcGhlcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    ],
    location: "São Paulo, SP",
    distance: "20 km",
    situation: "Saudável",
    vaccinations: [
      {
        date: "2023-03-15",
        type: "V10",
        validity: "2024-03-15"
      },
      {
        date: "2023-03-15",
        type: "Raiva",
        validity: "2024-03-15"
      }
    ]
  },
  {
    id: 8,
    name: "Pipoca",
    type: "bird",
    breed: "Calopsita",
    entryDate: "2023-09-01",
    gender: "Fêmea",
    weight: "0.1kg",
    description: "Pipoca é uma calopsita alegre e tagarela. Ela assobia melodias e adora interagir com pessoas. Já está domesticada e adora ficar solta fora da gaiola. É muito sociável e gosta de atenção.",
    image: "https://images.unsplash.com/photo-1591198936750-16d8e15edc9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1591198936750-16d8e15edc9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1553217420-e8f8dde808a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1557499305-0af888c3d8ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    location: "Niterói, RJ",
    distance: "10 km",
    situation: "Saudável",
    vaccinations: []
  }
];
