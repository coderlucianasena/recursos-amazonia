
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Análise EDA - Recursos Hídricos Amazônia</h3>
            <p className="text-gray-300 text-sm mt-1">
              Transformando dados em insights para a sustentabilidade
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Criado por <span className="text-emerald-400 font-medium">Luciana Sena</span>
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">Conecte-se:</span>
            <a
              href="https://www.linkedin.com/in/coderlucianasena/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://github.com/coderlucianasena/recursos-amazonia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Análise EDA Amazônia - VIBE Coding para o Ciclo de Análise de Dados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
