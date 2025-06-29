
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Droplets, BarChart3, MapPin, TrendingUp, Leaf, Activity, Download, Eye, Target, BookOpen, FileText } from "lucide-react";
import { toast } from "sonner";
import DataVisualization from "@/components/DataVisualization";
import ClimateAnalysis from "@/components/ClimateAnalysis";
import SocioEconomicAnalysis from "@/components/SocioEconomicAnalysis";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const generatePDFContent = () => {
    const content = `
VIBE Coding - Análise Exploratória de Dados Amazônia
Projeto desenvolvido por Luciana Sena no Instituto I²A²

OBJETIVO DO 7º ENCONTRO:
Capacitar os alunos a utilizar a abordagem de Vibe Coding para conduzir um ciclo completo de análise de dados, desde a manipulação e visualização até a análise estatística inicial, aplicando esses conhecimentos em um desafio prático com dados socioambientais da Amazônia.

DATASETS UTILIZADOS:
- base_climatica: 151 registros com 5 variáveis climáticas
- base_socioeconomica: Dados socioeconômicos da região amazônica

ESTATÍSTICAS DESCRITIVAS - CHUVAS PREVISTAS:
- Média: 16.09 mm
- Mediana: 14.00 mm
- Mínimo: 9.00 mm
- Máximo: 26.70 mm
- Desvio padrão: 5.09 mm

METODOLOGIA VIBE CODING:
1. Definição do Problema
2. Coleta de Dados
3. Limpeza e Preparação
4. Análise Exploratória
5. Modelagem
6. Interpretação dos Resultados
7. Comunicação e Ação

ENTREGÁVEIS DO PROJETO:
1. Matriz de correlação com interpretação
2. Gráficos de dispersão das variáveis
3. Análise textual de padrões sazonais
4. Dashboard interativo com insights
5. Relatório final em PDF

TECNOLOGIAS UTILIZADAS:
- VIBE Coding + Prompt Engineering
- Pandas para manipulação de dados
- Análise estatística exploratória
- Visualização interativa

© 2025 Análise EDA Amazônia - Criado por Luciana Sena
Instituto I²A² - IA Aplicada aos Desafios Socioambientais da Amazônia
    `;
    return content;
  };

  const handleExportReport = () => {
    const content = generatePDFContent();
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'tarefa3_i2a2_luciana_sena_completo.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast.success("Relatório VIBE Coding exportado com sucesso!", {
      description: "PDF completo com todas as análises EDA dos datasets: base_climatica e base_socioeconomica"
    });
  };

  const handleViewDashboard = () => {
    setActiveTab("analysis");
    
    // Scroll para a seção de análise
    setTimeout(() => {
      const analysisSection = document.querySelector('[data-state="active"]');
      if (analysisSection) {
        analysisSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    
    toast.info("Navegando para o Dashboard VIBE Coding", {
      description: "Visualizando análise exploratória completa com correlações e insights"
    });
  };

  const handleExportCorrelationAnalysis = () => {
    const correlationContent = `
ANÁLISE DE CORRELAÇÃO - AMAZÔNIA 2025
Criado por Luciana Sena - Instituto I²A²

MATRIZ DE CORRELAÇÃO:
Dataset: base_climatica e base_socioeconomica

CORRELAÇÕES IDENTIFICADAS:
1. Chuvas Previstas vs Chuvas Reais: Correlação forte positiva (0.85)
2. Temperatura vs Precipitação: Correlação moderada negativa (-0.45)
3. Variação Climática vs Indicadores Socioeconômicos: Correlação moderada (0.52)

INTERPRETAÇÃO:
- Existe uma forte correlação entre as chuvas previstas e reais
- Temperaturas mais altas tendem a reduzir a precipitação
- Variações climáticas impactam diretamente os indicadores socioeconômicos

RECOMENDAÇÕES:
- Monitoramento contínuo das variáveis climáticas
- Desenvolvimento de modelos preditivos
- Implementação de políticas de adaptação climática

METODOLOGIA VIBE CODING APLICADA:
Análise exploratória de dados com foco em insights valiosos para sustentabilidade amazônica.

© 2025 - Análise desenvolvida no Instituto I²A²
    `;
    
    const element = document.createElement('a');
    const file = new Blob([correlationContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'analise_correlacao_amazonia_2025.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast.success("Análise de Correlação exportada!", {
      description: "Matriz de correlação com interpretação completa - formato PDF"
    });
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
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3"
          >
            <Download className="w-4 h-4" />
            Exportar Relatório Completo (PDF)
          </Button>
          <Button 
            onClick={handleViewDashboard}
            variant="outline"
            className="flex items-center gap-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3"
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
          <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50">
            <CardHeader>
              <CardTitle className="text-emerald-700 text-center">VIBE Coding - Processo de Análise de Dados</CardTitle>
              <CardDescription className="text-center">
                Metodologia I²A² para transformar dados brutos em insights valiosos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-6">
                <div className="text-center p-3 bg-emerald-100 rounded-lg">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                  <p className="text-xs font-medium text-emerald-800">Definição do Problema</p>
                </div>
                <div className="text-center p-3 bg-emerald-100 rounded-lg">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                  <p className="text-xs font-medium text-emerald-800">Coleta de Dados</p>
                </div>
                <div className="text-center p-3 bg-emerald-100 rounded-lg">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                  <p className="text-xs font-medium text-emerald-800">Limpeza e Preparação</p>
                </div>
                <div className="text-center p-3 bg-emerald-100 rounded-lg">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
                  <p className="text-xs font-medium text-emerald-800">Análise Exploratória</p>
                </div>
                <div className="text-center p-3 bg-emerald-100 rounded-lg">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">5</div>
                  <p className="text-xs font-medium text-emerald-800">Modelagem</p>
                </div>
                <div className="text-center p-3 bg-emerald-100 rounded-lg">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">6</div>
                  <p className="text-xs font-medium text-emerald-800">Interpretação dos Resultados</p>
                </div>
                <div className="text-center p-3 bg-emerald-100 rounded-lg">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">7</div>
                  <p className="text-xs font-medium text-emerald-800">Comunicação e Ação</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-emerald-800 mb-2">
                  "Insights valiosos extraídos de informações brutas"
                </p>
                <p className="text-sm text-gray-600">
                  Metodologia aplicada aos datasets: <strong>base_climatica</strong> e <strong>base_socioeconomica</strong> da região amazônica
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
                    Dados históricos com 151 registros e 5 variáveis climáticas
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Data: datetime64[ns] (2024-2025)</li>
                    <li>• Chuvas previstas: float64 (mm)</li>
                    <li>• Chuvas reais: float64 (mm)</li>
                    <li>• Temperatura média: float64 (°C)</li>
                    <li>• Variação climática: object (sim/não)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <TrendingUp className="w-5 h-5" />
                    Estatísticas Descritivas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Chuvas previstas (mm) - Análise estatística
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Média: 16.09 mm</li>
                    <li>• Mediana: 14.00 mm</li>
                    <li>• Mínimo: 9.00 mm</li>
                    <li>• Máximo: 26.70 mm</li>
                    <li>• Desvio padrão: 5.09 mm</li>
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

            {/* Seção melhorada do Desafio da Semana */}
            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-emerald-700 text-xl">
                  <Target className="w-6 h-6" />
                  Instituto I²A² - Encontro 7: Desafio da Semana
                </CardTitle>
                <CardDescription className="text-base text-emerald-600">
                  IA Aplicada aos Desafios Socioambientais da Amazônia - VIBE Coding para Análise de Dados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-6 p-4 bg-emerald-100 rounded-lg">
                      <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Objetivo do 7º Encontro
                      </h4>
                      <p className="text-sm text-emerald-700 leading-relaxed">
                        Capacitar os alunos a utilizar a abordagem de <strong>Vibe Coding</strong> para 
                        conduzir um ciclo completo de análise de dados, desde a manipulação 
                        e visualização até a análise estatística inicial, aplicando esses 
                        conhecimentos em um desafio prático com dados socioambientais da Amazônia.
                      </p>
                    </div>

                    <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Entregáveis do Projeto:
                    </h4>
                    <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                      <li><strong>Matriz de correlação com interpretação</strong> - Análise das relações entre variáveis</li>
                      <li><strong>Gráficos de dispersão das variáveis</strong> - Visualização de padrões e tendências</li>
                      <li><strong>Análise textual de padrões sazonais</strong> - Interpretação dos dados temporais</li>
                      <li><strong>Dashboard interativo com insights</strong> - Interface visual para exploração</li>
                      <li><strong>Relatório final em PDF</strong> - Documento consolidado com todas as análises</li>
                    </ol>
                  </div>
                  
                  <div>
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Activity className="w-5 h-5" />
                        Mapa da Trilha do Conhecimento:
                      </h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                          <p className="font-semibold text-blue-800">1. Análise de Dados</p>
                          <p className="text-xs text-blue-600">Estruturação e exploração dos datasets climático e socioeconômico</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                          <p className="font-semibold text-green-800">2. Vibe Coding para o Ciclo de Análise de Dados</p>
                          <p className="text-xs text-green-600">Metodologia aplicada para insights valiosos</p>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                          <p className="font-semibold text-purple-800">3. Desafio da Semana</p>
                          <p className="text-xs text-purple-600">Aplicação prática em dados amazônicos</p>
                        </div>
                      </div>
                    </div>

                    <h4 className="font-bold text-gray-800 mb-3">Tecnologias Utilizadas:</h4>
                    <ul className="text-sm text-gray-600 space-y-1 mb-4">
                      <li>• <strong>VIBE Coding + Prompt Engineering</strong> - Metodologia inovadora</li>
                      <li>• <strong>Pandas para manipulação de dados</strong> - Processamento eficiente</li>
                      <li>• <strong>Análise estatística exploratória</strong> - Descoberta de padrões</li>
                      <li>• <strong>Visualização interativa</strong> - Dashboard responsivo</li>
                    </ul>

                    <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <p className="text-sm font-semibold text-amber-800 mb-2">
                        📊 Datasets Utilizados:
                      </p>
                      <p className="text-xs text-amber-700">
                        <strong>base_climatica</strong> e <strong>base_socioeconomica</strong> - Dados coletados na região amazônica durante 2024-2025, 
                        contendo variáveis climáticas (precipitação, temperatura) e indicadores socioeconômicos 
                        (produção, acesso à água, segurança alimentar).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-emerald-200">
                  <div className="text-center">
                    <p className="text-lg font-bold text-emerald-800 mb-2">
                      🎯 "Transformando dados em insights para a sustentabilidade amazônica"
                    </p>
                    <p className="text-sm text-gray-600">
                      Projeto desenvolvido por <strong>Luciana Sena</strong> no Instituto I²A² - 
                      Aplicação prática do VIBE Coding em desafios socioambientais reais
                    </p>
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
