
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-pet-purple flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <span className="text-xl font-bold text-pet-purple">AdotaPet</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Conectando animais que precisam de amor com pessoas que querem amar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-pet-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pet-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pet-purple transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">AdotaPet</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-gray-600 hover:text-pet-purple transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-gray-600 hover:text-pet-purple transition-colors text-sm">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-pet-purple transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-pet-purple transition-colors text-sm">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cuidados" className="text-gray-600 hover:text-pet-purple transition-colors text-sm">
                  Guia de Cuidados
                </Link>
              </li>
              <li>
                <Link to="/veterinarios" className="text-gray-600 hover:text-pet-purple transition-colors text-sm">
                  Veterinários Parceiros
                </Link>
              </li>
              <li>
                <Link to="/adocao" className="text-gray-600 hover:text-pet-purple transition-colors text-sm">
                  Processo de Adoção
                </Link>
              </li>
              <li>
                <Link to="/historias" className="text-gray-600 hover:text-pet-purple transition-colors text-sm">
                  Histórias de Sucesso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">
                contato@adotapet.com
              </li>
              <li className="text-gray-600 text-sm">
                (11) 99999-9999
              </li>
              <li className="text-gray-600 text-sm">
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AdotaPet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
