
export interface Pet {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: string;
  gender: string;
  size: string;
  color: string;
  image: string;
  images: string[];
  description: string;
  personality: string[];
  health: string[];
  requirements: string[];
  location: string;
  distance: string;
  shelterName: string;
  shelterImage: string;
  shelterRating: number;
  shelterPhone: string;
  shelterEmail: string;
}

export const petsData: Pet[] = [
  {
    id: 1,
    name: "Luna",
    type: "dog",
    breed: "Labrador Retriever",
    age: "2 anos",
    gender: "Fêmea",
    size: "Médio",
    color: "Caramelo",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1548658166-136d9f6a7e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    ],
    description: "Luna é uma cachorra muito amorosa e brincalhona. Ela adora correr e brincar ao ar livre. É muito carinhosa com crianças e se dá bem com outros animais. Ela está em busca de um lar amoroso onde possa receber muita atenção e carinho.",
    personality: ["Brincalhona", "Amorosa", "Sociável", "Energética"],
    health: ["Vacinada", "Castrada", "Vermifugada", "Saudável"],
    requirements: ["Espaço para brincar", "Passeios frequentes", "Família amorosa"],
    location: "São Paulo, SP",
    distance: "5 km",
    shelterName: "Abrigo Patinhas Felizes",
    shelterImage: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldCUyMHNoZWx0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    shelterRating: 4.8,
    shelterPhone: "(11) 98765-4321",
    shelterEmail: "contato@patinhasfelizes.org"
  },
  {
    id: 2,
    name: "Felix",
    type: "cat",
    breed: "Siamês",
    age: "1 ano",
    gender: "Macho",
    size: "Pequeno",
    color: "Branco e Marrom",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    ],
    description: "Felix é um gato elegante e tranquilo. Ele adora tomar sol na janela e brincar com bolinhas. É independente, mas também gosta de receber carinho e atenção. Ele está procurando um lar calmo e acolhedor.",
    personality: ["Tranquilo", "Independente", "Curioso", "Carinhoso"],
    health: ["Vacinado", "Castrado", "Vermifugado", "Testado FIV/FeLV negativo"],
    requirements: ["Ambiente calmo", "Arranhador", "Brinquedos"],
    location: "São Paulo, SP",
    distance: "7 km",
    shelterName: "Abrigo Patinhas Felizes",
    shelterImage: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldCUyMHNoZWx0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    shelterRating: 4.8,
    shelterPhone: "(11) 98765-4321",
    shelterEmail: "contato@patinhasfelizes.org"
  },
  {
    id: 3,
    name: "Thor",
    type: "dog",
    breed: "Golden Retriever",
    age: "5 anos",
    gender: "Macho",
    size: "Grande",
    color: "Dourado",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1582068955580-dcc6c0812b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvbGRlbiUyMHJldHJpZXZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ],
    description: "Thor é um cão maduro, tranquilo e muito bem treinado. Ele é extremamente leal e amoroso. Adoraria encontrar uma família para acompanhar em longas caminhadas e receber muito carinho. É muito paciente com crianças e se dá bem com outros animais.",
    personality: ["Leal", "Calmo", "Obediente", "Amoroso"],
    health: ["Vacinado", "Castrado", "Vermifugado", "Saudável"],
    requirements: ["Família amorosa", "Passeios regulares", "Espaço adequado"],
    location: "São Paulo, SP",
    distance: "12 km",
    shelterName: "Abrigo Amigos dos Animais",
    shelterImage: "https://images.unsplash.com/photo-1593419528756-3cdfa1361dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBldCUyMHNoZWx0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    shelterRating: 4.6,
    shelterPhone: "(11) 91234-5678",
    shelterEmail: "contato@amigosanimais.org"
  },
  {
    id: 4,
    name: "Mia",
    type: "cat",
    breed: "Persa",
    age: "3 anos",
    gender: "Fêmea",
    size: "Médio",
    color: "Cinza",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    ],
    description: "Mia é uma gata elegante e requintada. Ela aprecia ambientes tranquilos e organizados. Adora ser escovada e receber carinho, mas também valoriza seu espaço pessoal. Ela procura um lar sem outros pets, onde possa ser a rainha da casa.",
    personality: ["Elegante", "Calma", "Afetuosa", "Independente"],
    health: ["Vacinada", "Castrada", "Vermifugada", "Saudável"],
    requirements: ["Sem outros animais", "Ambiente calmo", "Escovação regular"],
    location: "São Paulo, SP",
    distance: "3 km",
    shelterName: "Abrigo Patinhas Felizes",
    shelterImage: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldCUyMHNoZWx0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    shelterRating: 4.8,
    shelterPhone: "(11) 98765-4321",
    shelterEmail: "contato@patinhasfelizes.org"
  },
  {
    id: 5,
    name: "Bob",
    type: "dog",
    breed: "Bulldog Francês",
    age: "4 anos",
    gender: "Macho",
    size: "Pequeno",
    color: "Branco e Preto",
    image: "https://images.unsplash.com/photo-1583511655826-05700442976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlbmNoJTIwYnVsbGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1583511655826-05700442976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlbmNoJTIwYnVsbGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlbmNoJTIwYnVsbGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1588269965522-1b6b73a6ce7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlbmNoJTIwYnVsbGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ],
    description: "Bob é um cachorro divertido e cheio de personalidade. Apesar de pequeno, tem muita energia e adora brincar. É muito sociável e se dá bem com todos, inclusive crianças e outros pets. Ele está procurando um lar amoroso onde possa se divertir e receber muitos carinhos.",
    personality: ["Brincalhão", "Sociável", "Carinhoso", "Enérgico"],
    health: ["Vacinado", "Castrado", "Vermifugado", "Saudável"],
    requirements: ["Passeios diários", "Brinquedos", "Muito carinho"],
    location: "São Paulo, SP",
    distance: "8 km",
    shelterName: "Abrigo Amigos dos Animais",
    shelterImage: "https://images.unsplash.com/photo-1593419528756-3cdfa1361dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBldCUyMHNoZWx0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    shelterRating: 4.6,
    shelterPhone: "(11) 91234-5678",
    shelterEmail: "contato@amigosanimais.org"
  },
  {
    id: 6,
    name: "Nina",
    type: "cat",
    breed: "Ragdoll",
    age: "7 meses",
    gender: "Fêmea",
    size: "Pequeno",
    color: "Branco e Marrom",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1626602411112-10742f9a3ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ],
    description: "Nina é uma filhote super brincalhona e cheia de vida. Adora brincar com bolinhas e perseguir brinquedos. É muito sociável e se adapta facilmente a novos ambientes. Está à procura de uma família que lhe dê muito amor e atenção.",
    personality: ["Brincalhona", "Curiosa", "Afetuosa", "Ativa"],
    health: ["Vacinada", "Vermifugada", "Saudável"],
    requirements: ["Brinquedos interativos", "Arranhador", "Muito carinho"],
    location: "São Paulo, SP",
    distance: "15 km",
    shelterName: "Gatinhos Felizes",
    shelterImage: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0JTIwcmVzY3VlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    shelterRating: 4.9,
    shelterPhone: "(11) 97890-1234",
    shelterEmail: "contato@gatinhosfelizes.org"
  },
  {
    id: 7,
    name: "Rex",
    type: "dog",
    breed: "Pastor Alemão",
    age: "3 anos",
    gender: "Macho",
    size: "Grande",
    color: "Preto e Marrom",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2VybWFuJTIwc2hlcGhlcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2VybWFuJTIwc2hlcGhlcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1555191499-2b71661954b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2VybWFuJTIwc2hlcGhlcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2VybWFuJTIwc2hlcGhlcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    ],
    description: "Rex é um cão inteligente, leal e protetor. Muito bem treinado e obediente. Adoraria fazer parte de uma família ativa que possa proporcionar atividades físicas e mentais. É um companheiro fiel e protetor.",
    personality: ["Inteligente", "Leal", "Protetor", "Obediente"],
    health: ["Vacinado", "Castrado", "Vermifugado", "Saudável"],
    requirements: ["Família ativa", "Espaço amplo", "Treinamento contínuo"],
    location: "São Paulo, SP",
    distance: "20 km",
    shelterName: "Abrigo Amigos dos Animais",
    shelterImage: "https://images.unsplash.com/photo-1593419528756-3cdfa1361dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBldCUyMHNoZWx0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    shelterRating: 4.6,
    shelterPhone: "(11) 91234-5678",
    shelterEmail: "contato@amigosanimais.org"
  },
  {
    id: 8,
    name: "Pipoca",
    type: "bird",
    breed: "Calopsita",
    age: "1 ano",
    gender: "Fêmea",
    size: "Pequeno",
    color: "Amarelo e Cinza",
    image: "https://images.unsplash.com/photo-1522858547137-f98a3845f1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ja2F0aWVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1522858547137-f98a3845f1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ja2F0aWVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1595780413269-f3740801c656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ja2F0aWVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyZCUyMGNhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    ],
    description: "Pipoca é uma calopsita alegre e tagarela. Ela assobia melodias e adora interagir com pessoas. Já está domesticada e adora ficar solta fora da gaiola. É muito sociável e gosta de atenção.",
    personality: ["Alegre", "Social", "Curiosa", "Musical"],
    health: ["Vacinada", "Saudável", "Exame veterinário recente"],
    requirements: ["Gaiola espaçosa", "Tempo fora da gaiola", "Interação diária"],
    location: "São Paulo, SP",
    distance: "10 km",
    shelterName: "Asas e Penas",
    shelterImage: "https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcmQlMjByZXNjdWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    shelterRating: 4.5,
    shelterPhone: "(11) 95678-9012",
    shelterEmail: "contato@asasepenas.org"
  }
];
