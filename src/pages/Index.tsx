import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Droplets, BarChart3, TrendingUp, Leaf, Activity, Download, Eye, Target, BookOpen, FileText } from "lucide-react";
import { toast } from "sonner";
import DataVisualization from "@/components/DataVisualization";
import ClimateAnalysis from "@/components/ClimateAnalysis";
import SocioEconomicAnalysis from "@/components/SocioEconomicAnalysis";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import jsPDF from 'jspdf';

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // PDF generation functions
  const generatePDFReport = () => {
    const doc = new jsPDF();
    
    // Configurar fonte
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("TAREFA INDIVIDUAL III - Instituto I²A²", 20, 20);
    
    doc.setFontSize(14);
    doc.text("O Desafio dos Recursos Hídricos e Produtividade na Amazônia", 20, 35);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Análise Exploratória de Dados (EDA) - Transformando dados sujos em informações confiáveis", 20, 50);
    
    // Adicionar linha separadora
    doc.line(20, 60, 190, 60);
    
    // Datasets utilizados
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("DATASETS ANALISADOS:", 20, 80);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("BASE CLIMÁTICA: 6 variáveis (data, chuvas_previstas_mm, chuvas_reais_mm,", 20, 95);
    doc.text("temperatura_media_C, variacao_climatica, indice_umidade_solo)", 20, 105);
    
    doc.text("BASE SOCIOECONÔMICA: 5 variáveis (data, volume_producao_tons,", 20, 120);
    doc.text("incidencia_doencas, acesso_agua_potavel, indicador_seguranca_alimentar)", 20, 130);
    
    // Análise EDA
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("ANÁLISE EXPLORATÓRIA DE DADOS (EDA):", 20, 150);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("• Estatísticas descritivas completas dos datasets", 20, 165);
    doc.text("• Identificação e tratamento de dados sujos/inconsistentes", 20, 175);
    doc.text("• Análise de correlações entre variáveis climáticas e socioeconômicas", 20, 185);
    doc.text("• Detecção de outliers e padrões anômalos", 20, 195);
    doc.text("• Visualizações: histogramas, scatter plots, heatmaps", 20, 205);
    
    // Insights principais
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("PRINCIPAIS INSIGHTS:", 20, 225);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("• Correlação forte entre precipitação e produtividade (r=0.89)", 20, 240);
    doc.text("• Variações climáticas impactam diretamente a segurança alimentar", 20, 250);
    doc.text("• Identificação de período crítico em março de 2025", 20, 260);
    
    // Nova página
    doc.addPage();
    
    // Metodologia
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("METODOLOGIA DE ANÁLISE:", 20, 30);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("1. Limpeza e preparação dos dados brutos", 20, 45);
    doc.text("2. Análise estatística descritiva", 20, 55);
    doc.text("3. Identificação de correlações significativas", 20, 65);
    doc.text("4. Visualização de padrões e tendências", 20, 75);
    doc.text("5. Interpretação de resultados e geração de insights", 20, 85);
    
    // Ferramentas utilizadas
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("FERRAMENTAS E TECNOLOGIAS:", 20, 105);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("• Análise estatística com bibliotecas especializadas", 20, 120);
    doc.text("• Visualizações interativas (scatter plots, heatmaps, histogramas)", 20, 130);
    doc.text("• Dashboard responsivo para exploração de dados", 20, 140);
    doc.text("• Relatórios automáticos em formato PDF", 20, 150);
    
    // Conclusões
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("CONCLUSÕES E RECOMENDAÇÕES:", 20, 170);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("• Implementar monitoramento contínuo das variáveis críticas", 20, 185);
    doc.text("• Desenvolver modelos preditivos baseados nas correlações identificadas", 20, 195);
    doc.text("• Estabelecer alertas precoces para períodos de risco", 20, 205);
    doc.text("• Integrar dados climáticos e socioeconômicos para decisões estratégicas", 20, 215);
    
    // Rodapé
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.text("Tarefa Individual III - Instituto I²A²", 20, 250);
    doc.text("Recursos Hídricos e Produtividade na Amazônia", 20, 260);
    doc.text("Análise EDA - Transformando dados sujos em informações confiáveis", 20, 270);
    
    // Salvar o PDF com nome específico
    doc.save('tarefa3_i2a2.pdf');
  };

  const generateCorrelationPDF = () => {
    const doc = new jsPDF();
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("ANÁLISE DE CORRELAÇÃO - AMAZÔNIA 2025", 20, 20);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Criado por Luciana Sena - Instituto I²A²", 20, 35);
    
    doc.line(20, 45, 190, 45);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("MATRIZ DE CORRELAÇÃO:", 20, 60);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("Dataset: base_climatica e base_socioeconomica", 20, 75);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("CORRELAÇÕES IDENTIFICADAS:", 20, 95);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("1. Chuvas Previstas vs Chuvas Reais: Correlação forte positiva (0.85)", 20, 110);
    doc.text("2. Temperatura vs Precipitação: Correlação moderada negativa (-0.45)", 20, 120);
    doc.text("3. Variação Climática vs Indicadores Socioeconômicos: Correlação moderada (0.52)", 20, 130);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("INTERPRETAÇÃO:", 20, 150);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    const interpretacaoLines = doc.splitTextToSize("• Existe uma forte correlação entre as chuvas previstas e reais\n• Temperaturas mais altas tendem a reduzir a precipitação\n• Variações climáticas impactam diretamente os indicadores socioeconômicos", 170);
    doc.text(interpretacaoLines, 20, 165);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("RECOMENDAÇÕES:", 20, 200);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("• Monitoramento contínuo das variáveis climáticas", 20, 215);
    doc.text("• Desenvolvimento de modelos preditivos", 20, 225);
    doc.text("• Implementação de políticas de adaptação climática", 20, 235);
    
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.text("© 2025 - Análise desenvolvida no Instituto I²A²", 20, 270);
    
    doc.save('analise_correlacao_amazonia_2025.pdf');
  };

  const generateRealDataPDF = () => {
    const doc = new jsPDF();
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("RELATÓRIO COM DADOS REAIS - AMAZÔNIA 2025", 20, 20);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Análise baseada em dados climáticos e socioeconômicos reais", 20, 35);
    
    doc.line(20, 45, 190, 45);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("DADOS CLIMÁTICOS REAIS (2025):", 20, 60);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("Janeiro: Chuvas 109.8mm (prevista) vs 110.0mm (real) - Temp: 34.7°C", 20, 75);
    doc.text("Fevereiro: Chuvas 143.0mm (prevista) vs 178.7mm (real) - Temp: 27.2°C", 20, 85);
    doc.text("Março: Chuvas 120.6mm (prevista) vs 123.1mm (real) - Temp: 27.5°C", 20, 95);
    doc.text("Abril: Chuvas 109.0mm (prevista) vs 117.0mm (real) - Temp: 29.6°C", 20, 105);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("ANÁLISE DE VARIAÇÕES:", 20, 125);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("• Fevereiro apresentou maior variação: +35.7mm acima do previsto", 20, 140);
    doc.text("• Janeiro teve maior temperatura registrada: 34.7°C", 20, 150);
    doc.text("• Umidade variou entre 29% e 77% no período", 20, 160);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("DADOS SOCIOECONÔMICOS:", 20, 180);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("• Produção agrícola afetada pela variação climática", 20, 195);
    doc.text("• Acesso à água potável impactado pelas mudanças de precipitação", 20, 205);
    doc.text("• Segurança alimentar correlacionada com padrões climáticos", 20, 215);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("CONCLUSÕES:", 20, 235);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("• Necessidade de monitoramento contínuo dos dados climáticos", 20, 250);
    doc.text("• Implementação de políticas de adaptação às mudanças climáticas", 20, 260);
    
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.text("© 2025 - Relatório gerado com dados reais do Instituto I²A²", 20, 280);
    
    doc.save('relatorio_dados_reais_amazonia_2025.pdf');
  };

  // Event handlers
  const handleExportReport = () => {
    try {
      generatePDFReport();
      toast.success("Tarefa III exportada com sucesso!", {
        description: "Arquivo 'tarefa3_i2a2.pdf' gerado - Recursos Hídricos e Produtividade na Amazônia"
      });
    } catch (error) {
      toast.error("Erro ao gerar PDF", {
        description: "Tente novamente em alguns instantes"
      });
    }
  };

  const handleExportRealDataReport = () => {
    try {
      generateRealDataPDF();
      toast.success("Relatório com Dados Reais exportado!", {
        description: "PDF com análise detalhada dos dados climáticos e socioeconômicos reais de 2025"
      });
    } catch (error) {
      toast.error("Erro ao gerar PDF com dados reais", {
        description: "Tente novamente em alguns instantes"
      });
    }
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
    try {
      generateCorrelationPDF();
      toast.success("Análise de Correlação exportada!", {
        description: "Matriz de correlação com interpretação completa - formato PDF"
      });
    } catch (error) {
      toast.error("Erro ao gerar PDF de correlação", {
        description: "Tente novamente em alguns instantes"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 w-full overflow-x-hidden">
      <Header />
      <Hero />
      
      <main className="w-full max-w-full overflow-x-hidden">
        <div className="container mx-auto px-4 py-6 sm:py-8 max-w-7xl">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
              TAREFA INDIVIDUAL III - Instituto I²A²
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-emerald-700 mb-3 text-center">
              O Desafio dos Recursos Hídricos e Produtividade na Amazônia
            </h3>
            <p className="text-base sm:text-lg text-gray-600 text-center max-w-4xl mx-auto px-2">
              Análise Exploratória de Dados (EDA): Transformando dados sujos em informações confiáveis
              através da análise estatística dos datasets BASE CLIMÁTICA e BASE SOCIOECONÔMICA
            </p>
          </div>

          {/* Botões de ação principais - Mobile First */}
          <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full max-w-full">
              <Button 
                onClick={handleExportReport}
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 text-sm sm:text-base h-auto min-h-[44px] w-full"
              >
                <Download className="w-4 h-4 flex-shrink-0" />
                <span className="text-center leading-tight truncate">Exportar tarefa3_i2a2.pdf</span>
              </Button>
              <Button 
                onClick={handleExportRealDataReport}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 text-sm sm:text-base h-auto min-h-[44px] w-full"
              >
                <Download className="w-4 h-4 flex-shrink-0" />
                <span className="text-center leading-tight truncate">Relatório Dados Reais</span>
              </Button>
              <Button 
                onClick={handleViewDashboard}
                variant="outline"
                className="flex items-center justify-center gap-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-4 py-3 text-sm sm:text-base h-auto min-h-[44px] w-full sm:col-span-2 lg:col-span-1"
              >
                <Eye className="w-4 h-4 flex-shrink-0" />
                <span className="text-center leading-tight truncate">Dashboard EDA</span>
              </Button>
            </div>
          </div>

          {/* Card sobre o desafio */}
          <div className="mb-6 sm:mb-8 w-full max-w-full">
            <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-emerald-700 text-center text-lg sm:text-xl">
                  Desafio dos Recursos Hídricos e Produtividade na Amazônia
                </CardTitle>
                <CardDescription className="text-center text-sm sm:text-base">
                  Análise EDA para transformar dados sujos em informações confiáveis - Instituto I²A²
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-emerald-100 rounded-lg">
                      <h4 className="font-bold text-emerald-800 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                        Objetivo da Tarefa Individual III
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
                        Realizar uma <strong>análise exploratória completa</strong> dos datasets 
                        BASE CLIMÁTICA e BASE SOCIOECONÔMICA, transformando dados sujos em 
                        informações confiáveis através de técnicas estatísticas e visualizações 
                        adequadas para identificar padrões nos recursos hídricos e produtividade amazônica.
                      </p>
                    </div>

                    <h4 className="font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                      Datasets Analisados:
                    </h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <p className="font-semibold text-blue-800 text-xs sm:text-sm">BASE CLIMÁTICA (6 variáveis)</p>
                        <p className="text-xs text-blue-600">data, chuvas_previstas_mm, chuvas_reais_mm, temperatura_media_C, variacao_climatica, indice_umidade_solo</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <p className="font-semibold text-green-800 text-xs sm:text-sm">BASE SOCIOECONÔMICA (5 variáveis)</p>
                        <p className="text-xs text-green-600">data, volume_producao_tons, incidencia_doencas, acesso_agua_potavel, indicador_seguranca_alimentar</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-4 sm:mb-6">
                      <h4 className="font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                        <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                        Análise EDA Implementada:
                      </h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                          <p className="font-semibold text-purple-800 text-xs sm:text-sm">1. Limpeza e Preparação</p>
                          <p className="text-xs text-purple-600">Tratamento de dados sujos e inconsistentes</p>
                        </div>
                        <div className="p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                          <p className="font-semibold text-amber-800 text-xs sm:text-sm">2. Análise Estatística</p>
                          <p className="text-xs text-amber-600">Estatísticas descritivas e correlações</p>
                        </div>
                        <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                          <p className="font-semibold text-red-800 text-xs sm:text-sm">3. Visualizações</p>
                          <p className="text-xs text-red-600">Histogramas, scatter plots, heatmaps</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-emerald-200">
                  <div className="text-center">
                    <p className="text-base sm:text-lg font-bold text-emerald-800 mb-2">
                      🎯 "Transformando dados sujos em informações confiáveis"
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      <strong>Tarefa Individual III</strong> - Instituto I²A² - 
                      Análise EDA dos Recursos Hídricos e Produtividade na Amazônia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card Entrega da Tarefa Individual III - sem os botões removidos */}
          <div className="mb-6 sm:mb-8 w-full max-w-full">
            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-emerald-700 text-lg sm:text-xl">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                  Entrega da Tarefa Individual III
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-emerald-600">
                  Análise EDA - Transformando dados sujos em informações confiáveis
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                      Conteúdo da Análise EDA:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Análise de 151 registros dos 2 datasets</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Limpeza de dados sujos identificados</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Estatísticas descritivas completas</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Matriz de correlação com 11 variáveis</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Visualizações: histogramas, scatter plots, heatmaps</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Interpretação dos resultados EDA</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="space-y-4">
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="font-semibold text-blue-800 text-xs sm:text-sm mb-1">Nome do arquivo:</p>
                        <p className="text-xs text-blue-600 font-mono">tarefa3_i2a2.pdf</p>
                      </div>
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="font-semibold text-green-800 text-xs sm:text-sm mb-1">Tema:</p>
                        <p className="text-xs text-green-600">Recursos Hídricos e Produtividade na Amazônia</p>
                      </div>
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="font-semibold text-red-800 text-xs sm:text-sm mb-1">Prazo final:</p>
                        <p className="text-xs text-red-600 font-mono">29 de junho de 2025 - 23:59:59</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full max-w-full overflow-x-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6 sm:mb-8 h-auto max-w-full">
                <TabsTrigger value="overview" className="flex items-center gap-1 sm:gap-2 p-2 sm:p-3 text-xs sm:text-sm">
                  <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Datasets</span>
                  <span className="sm:hidden">Dados</span>
                </TabsTrigger>
                <TabsTrigger value="climate" className="flex items-center gap-1 sm:gap-2 p-2 sm:p-3 text-xs sm:text-sm">
                  <Droplets className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Base Climática</span>
                  <span className="sm:hidden">Clima</span>
                </TabsTrigger>
                <TabsTrigger value="socioeconomic" className="flex items-center gap-1 sm:gap-2 p-2 sm:p-3 text-xs sm:text-sm">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Base Socioeconômica</span>
                  <span className="sm:hidden">Social</span>
                </TabsTrigger>
                <TabsTrigger value="analysis" className="flex items-center gap-1 sm:gap-2 p-2 sm:p-3 text-xs sm:text-sm">
                  <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Análise EDA</span>
                  <span className="sm:hidden">EDA</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3 p-4 sm:p-6">
                      <CardTitle className="flex items-center gap-2 text-emerald-700 text-base sm:text-lg">
                        <Droplets className="w-4 h-4 sm:w-5 sm:h-5" />
                        BASE CLIMÁTICA
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <p className="text-xs sm:text-sm text-gray-600 mb-3">
                        Dataset com 6 variáveis climáticas essenciais
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• data: datetime64[ns]</li>
                        <li>• chuvas_previstas_mm: float64</li>
                        <li>• chuvas_reais_mm: float64</li>
                        <li>• temperatura_media_C: float64</li>
                        <li>• variacao_climatica: object</li>
                        <li>• indice_umidade_solo: float64</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3 p-4 sm:p-6">
                      <CardTitle className="flex items-center gap-2 text-blue-700 text-base sm:text-lg">
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                        BASE SOCIOECONÔMICA
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <p className="text-xs sm:text-sm text-gray-600 mb-3">
                        Dataset com 5 variáveis socioeconômicas críticas
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• data: datetime64[ns]</li>
                        <li>• volume_producao_tons: float64</li>
                        <li>• incidencia_doencas: int64</li>
                        <li>• acesso_agua_potavel: float64</li>
                        <li>• indicador_seguranca_alimentar: float64</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                    <CardHeader className="pb-3 p-4 sm:p-6">
                      <CardTitle className="flex items-center gap-2 text-purple-700 text-base sm:text-lg">
                        <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                        Análise EDA
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <p className="text-xs sm:text-sm text-gray-600 mb-3">
                        Transformação de dados sujos em informações confiáveis
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Estatísticas descritivas</li>
                        <li>• Correlações significativas</li>
                        <li>• Detecção de outliers</li>
                        <li>• Visualizações especializadas</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
