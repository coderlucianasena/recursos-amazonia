
import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img 
                src="/lovable-uploads/5ce6bf6f-db31-4661-a8ba-0bef4fd6e9c2.png" 
                alt="I²A² Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">Instituto I²A²</h1>
              <p className="text-emerald-100 text-sm">Intelligence Artificielle Appliquée</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-emerald-100">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Região Amazônica</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
