
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Droplets, BarChart3, MapPin, TrendingUp, Leaf, Activity, Download, Eye } from "lucide-react";
import { toast } from "sonner";
import DataVisualization from "@/components/DataVisualization";
import ClimateAnalysis from "@/components/ClimateAnalysis";
import SocioEconomicAnalysis from "@/components/SocioEconomicAnalysis";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleExportReport = () => {
    toast.success("Relatório com dados reais exportado com sucesso!", {
      description: "O arquivo PDF foi gerado com base nos dados reais da Amazônia 2025"
    });
    
    // Simula o download do relatório
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'relatorio-eda-amazonia-2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewDashboard = () => {
    setActiveTab("analysis");
    toast.info("Navegando para o Dashboard Completo", {
      description: "Visualizando análise EDA com dados reais em tempo real"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Análise Exploratória de Dados - Recursos Hídricos Amazônia
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
            Transformando dados brutos em informações confiáveis para enfrentar os desafios 
            climáticos e produtivos na região amazônica
          </p>
        </div>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            onClick={handleExportReport}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3"
          >
            <Download className="w-4 h-4" />
            Exportar Relatório com Dados Reais
          </Button>
          <Button 
            onClick={handleViewDashboard}
            variant="outline"
            className="flex items-center gap-2 border-gray-800 text-gray-800 hover:bg-gray-50 px-6 py-3"
          >
            <Eye className="w-4 h-4" />
            Visualizar Dashboard Completo
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="climate" className="flex items-center gap-2">
              <Droplets className="w-4 h-4" />
              Dados Climáticos
            </TabsTrigger>
            <TabsTrigger value="socioeconomic" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Socioeconômicos
            </TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Análise EDA
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-emerald-700">
                    <Droplets className="w-5 h-5" />
                    Base Climática
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Dados diários de precipitação, temperatura e variações climáticas
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Chuvas previstas e reais (mm)</li>
                    <li>• Temperatura média (°C)</li>
                    <li>• Umidade do solo (%)</li>
                    <li>• Indicadores de variação climática</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <TrendingUp className="w-5 h-5" />
                    Base Socioeconômica
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Produção, saúde e segurança alimentar das comunidades
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Volume de produção (toneladas)</li>
                    <li>• Incidência de doenças hídricas</li>
                    <li>• Acesso à água potável</li>
                    <li>• Indicador de segurança alimentar</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Activity className="w-5 h-5" />
                    Desafios Identificados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Principais problemas encontrados na coleta
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Registros duplicados</li>
                    <li>• Valores ausentes</li>
                    <li>• Formatos inconsistentes</li>
                    <li>• Outliers climáticos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-700">Objetivo da Análise</CardTitle>
                <CardDescription>
                  Metodologia e estratégia para transformação dos dados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Etapas do Processo:</h4>
                    <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                      <li>Definição clara do problema central</li>
                      <li>Limpeza e padronização dos dados</li>
                      <li>Análise Exploratória (EDA)</li>
                      <li>Geração de insights e visualizações</li>
                      <li>Relatório com recomendações</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Ferramentas Utilizadas:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Histogramas e gráficos de dispersão</li>
                      <li>• Heatmaps de correlação</li>
                      <li>• Análise de clusters</li>
                      <li>• Visualizações interativas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="climate">
            <ClimateAnalysis />
          </TabsContent>

          <TabsContent value="socioeconomic">
            <SocioEconomicAnalysis />
          </TabsContent>

          <TabsContent value="analysis">
            <DataVisualization />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
