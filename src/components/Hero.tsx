
import { Button } from "@/components/ui/button";
import { ArrowDown, Database, Leaf } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900">
      <div className="relative container mx-auto px-4 py-16 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
            TAREFA INDIVIDUAL III
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-emerald-100">
            O Desafio dos Recursos Hídricos e Produtividade na Amazônia
          </h2>
          <p className="text-lg md:text-xl text-emerald-200 mb-8 leading-relaxed">
            Análise exploratória de dados para compreender os impactos das variações climáticas 
            na segurança alimentar e produtividade das comunidades amazônicas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContent}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <Database className="w-5 h-5" />
              Explorar Dados
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </Button>
            <div className="flex items-center gap-2 text-emerald-200">
              <Leaf className="w-5 h-5" />
              <span className="text-sm">Sustentabilidade • Tecnologia • Inovação</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
