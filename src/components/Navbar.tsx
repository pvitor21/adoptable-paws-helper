
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { SearchIcon, Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-pet-purple flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <span className="text-xl font-bold text-pet-purple">AdotaPet</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pet-purple transition-colors font-medium">
              Início
            </Link>
            <Link to="/historias" className="text-gray-700 hover:text-pet-purple transition-colors font-medium">
              Favoritos
            </Link>
            <Link to="/sobre" className="text-gray-700 hover:text-pet-purple transition-colors font-medium">
              Sobre
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-pet-purple transition-colors font-medium">
              Contato
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-pet-purple text-pet-purple hover:bg-pet-purple hover:text-white">
                Entrar
              </Button>
            </Link>
            <Link to="/cadastro">
              <Button className="bg-pet-purple hover:bg-pet-purple/90 text-white">
                Cadastrar
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-pet-purple focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden fixed inset-0 z-50 bg-white pt-16 px-6 transition-transform duration-300 ease-in-out transform",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col space-y-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-pet-purple transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/historias"
              className="text-gray-700 hover:text-pet-purple transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Favoritos
            </Link>
            <Link
              to="/sobre"
              className="text-gray-700 hover:text-pet-purple transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              to="/contato"
              className="text-gray-700 hover:text-pet-purple transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-pet-purple text-pet-purple hover:bg-pet-purple hover:text-white">
                  Entrar
                </Button>
              </Link>
              <Link to="/cadastro" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-pet-purple hover:bg-pet-purple/90 text-white">
                  Cadastrar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
