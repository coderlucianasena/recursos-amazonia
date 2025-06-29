
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Droplets, BarChart3, MapPin, TrendingUp, Leaf, Activity } from "lucide-react";
import DataVisualization from "@/components/DataVisualization";
import ClimateAnalysis from "@/components/ClimateAnalysis";
import SocioEconomicAnalysis from "@/components/SocioEconomicAnalysis";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

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
    </div>
  );
};

export default Index;
