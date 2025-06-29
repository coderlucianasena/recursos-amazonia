
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
    toast.success("Relatório VIBE Coding exportado com sucesso!", {
      description: "PDF completo com análise EDA dos dados climáticos da Amazônia - tarefa3_i2a2.pdf"
    });
    
    // Simula o download do relatório
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'tarefa3_i2a2_luciana_sena.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewDashboard = () => {
    setActiveTab("analysis");
    toast.info("Navegando para o Dashboard VIBE Coding", {
      description: "Visualizando análise exploratória completa com correlações e insights"
    });
  };

  const handleExportCorrelationAnalysis = () => {
    toast.success("Análise de Correlação exportada!", {
      description: "Matriz de correlação com interpretação completa - formato PDF"
    });
    
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'analise_correlacao_amazonia_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            VIBE Coding - Análise Exploratória de Dados Amazônia
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
            Projeto desenvolvido no Instituto I²A² como parte do ciclo de análise de dados,
            transformando informações brutas em insights valiosos para a sustentabilidade amazônica
          </p>
        </div>

        {/* Botões de ação principais */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            onClick={handleExportReport}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3"
          >
            <Download className="w-4 h-4" />
            Exportar Relatório Completo (PDF)
          </Button>
          <Button 
            onClick={handleViewDashboard}
            variant="outline"
            className="flex items-center gap-2 border-red-600 text-red-600 hover:bg-red-50 px-6 py-3"
          >
            <Eye className="w-4 h-4" />
            Dashboard VIBE Coding
          </Button>
          <Button 
            onClick={handleExportCorrelationAnalysis}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
          >
            <Download className="w-4 h-4" />
            Análise de Correlações
          </Button>
        </div>

        {/* Card sobre o processo */}
        <div className="mb-8">
          <Card className="border-red-200 bg-gradient-to-r from-red-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-red-700 text-center">VIBE Coding - Processo de Análise de Dados</CardTitle>
              <CardDescription className="text-center">
                Metodologia I²A² para transformar dados brutos em insights valiosos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-6">
                <div className="text-center p-3 bg-red-100 rounded-lg">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                  <p className="text-xs font-medium text-red-800">Definição do Problema</p>
                </div>
                <div className="text-center p-3 bg-red-100 rounded-lg">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                  <p className="text-xs font-medium text-red-800">Coleta de Dados</p>
                </div>
                <div className="text-center p-3 bg-red-100 rounded-lg">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                  <p className="text-xs font-medium text-red-800">Limpeza e Preparação</p>
                </div>
                <div className="text-center p-3 bg-red-100 rounded-lg">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
                  <p className="text-xs font-medium text-red-800">Análise Exploratória</p>
                </div>
                <div className="text-center p-3 bg-red-100 rounded-lg">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">5</div>
                  <p className="text-xs font-medium text-red-800">Modelagem</p>
                </div>
                <div className="text-center p-3 bg-red-100 rounded-lg">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">6</div>
                  <p className="text-xs font-medium text-red-800">Interpretação dos Resultados</p>
                </div>
                <div className="text-center p-3 bg-red-100 rounded-lg">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">7</div>
                  <p className="text-xs font-medium text-red-800">Comunicação e Ação</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-red-800 mb-2">
                  "Insights valiosos extraídos de informações brutas"
                </p>
                <p className="text-sm text-gray-600">
                  Metodologia aplicada aos dados climáticos e socioeconomicos da região amazônica
                </p>
              </div>
            </CardContent>
          </Card>
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
                    Dataset Climático
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Dados históricos com variáveis climáticas essenciais
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Data de coleta (2024-2025)</li>
                    <li>• Chuvas previstas vs reais (mm)</li>
                    <li>• Temperatura média (°C)</li>
                    <li>• Variação climática (sim/não)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <TrendingUp className="w-5 h-5" />
                    Correlações Identificadas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Análise de relações entre variáveis climáticas
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Chuvas previstas vs reais: 1.00 (forte)</li>
                    <li>• Chuvas vs temperatura: 0.96 (forte)</li>
                    <li>• Temperatura vs chuvas reais: 0.97 (forte)</li>
                    <li>• Padrões sazonais identificados</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Activity className="w-5 h-5" />
                    Metodologia VIBE
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Processo estruturado de análise exploratória
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Exploração inicial com gráficos</li>
                    <li>• Identificação de padrões</li>
                    <li>• Detecção de outliers</li>
                    <li>• Criação de hipóteses</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-700">Instituto I²A² - Desafio da Semana</CardTitle>
                <CardDescription>
                  VIBE Coding para análise das relações entre variáveis climáticas amazônicas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Entregáveis do Projeto:</h4>
                    <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                      <li>Matriz de correlação com interpretação</li>
                      <li>Gráficos de dispersão das variáveis</li>
                      <li>Análise textual de padrões sazonais</li>
                      <li>Dashboard interativo com insights</li>
                      <li>Relatório final em PDF</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Tecnologias Utilizadas:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• VIBE Coding + Prompt Engineering</li>
                      <li>• Pandas para manipulação de dados</li>
                      <li>• Análise estatística exploratória</li>
                      <li>• Visualização interativa</li>
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
