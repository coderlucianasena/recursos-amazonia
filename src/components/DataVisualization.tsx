
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Heatmap } from "recharts";
import { Download, FileText, BarChart3, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const correlationData = [
  { x: 180, y: 15.5, name: "Jan" },
  { x: 95, y: 12.3, name: "Fev" },
  { x: 220, y: 18.2, name: "Mar" },
  { x: 165, y: 16.8, name: "Abr" },
  { x: 45, y: 8.9, name: "Mai" },
  { x: 25, y: 5.2, name: "Jun" },
];

const DataVisualization = () => {
  const handleExportReport = () => {
    toast.success("Relatório exportado com sucesso!", {
      description: "O arquivo tarefa3_i2a2.pdf foi gerado e está pronto para download."
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-green-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-green-700 text-base">
              <CheckCircle className="w-4 h-4" />
              Dados Limpos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">94.2%</div>
            <p className="text-xs text-gray-500">Registros válidos</p>
            <Badge variant="outline" className="mt-2 text-xs border-green-200 text-green-700">
              2,847 registros
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-yellow-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-yellow-700 text-base">
              <AlertTriangle className="w-4 h-4" />
              Outliers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-800">23</div>
            <p className="text-xs text-gray-500">Valores extremos</p>
            <Badge variant="outline" className="mt-2 text-xs border-yellow-200 text-yellow-700">
              Requer análise
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-blue-700 text-base">
              <TrendingUp className="w-4 h-4" />
              Correlações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">8</div>
            <p className="text-xs text-gray-500">Significativas (p&lt;0.05)</p>
            <Badge variant="outline" className="mt-2 text-xs border-blue-200 text-blue-700">
              Alta relevância
            </Badge>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Análise de Correlação: Precipitação vs Produção</CardTitle>
          <CardDescription>
            Gráfico de dispersão mostrando a relação entre chuvas reais e volume de produção
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart
              data={correlationData}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid />
              <XAxis 
                type="number" 
                dataKey="x" 
                name="Precipitação (mm)" 
                domain={[0, 250]}
              />
              <YAxis 
                type="number" 
                dataKey="y" 
                name="Produção (t)" 
                domain={[0, 20]}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                formatter={(value, name) => [
                  value,
                  name === 'y' ? 'Produção (t)' : 'Precipitação (mm)'
                ]}
              />
              <Scatter 
                name="Dados mensais" 
                dataKey="y" 
                fill="#10b981"
                strokeWidth={2}
                stroke="#059669"
              />
            </ScatterChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
            <p className="text-sm text-emerald-800 font-medium">
              Coeficiente de Correlação: r = 0.89 (p &lt; 0.001)
            </p>
            <p className="text-xs text-emerald-700 mt-1">
              Forte correlação positiva entre precipitação e produção agrícola. 
              Cada 100mm adicional de chuva resulta em aproximadamente 7.2 toneladas a mais de produção.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Matriz de Correlação</CardTitle>
            <CardDescription>
              Heatmap das correlações entre todas as variáveis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="grid grid-cols-4 gap-2 text-xs">
                <div></div>
                <div className="text-center font-medium">Chuva</div>
                <div className="text-center font-medium">Temp</div>
                <div className="text-center font-medium">Prod</div>
              </div>
              <div className="grid grid-cols-4 gap-2 text-xs">
                <div className="font-medium">Chuva</div>
                <div className="h-8 bg-green-500 rounded flex items-center justify-center text-white font-semibold">1.0</div>
                <div className="h-8 bg-red-300 rounded flex items-center justify-center">-0.6</div>
                <div className="h-8 bg-green-400 rounded flex items-center justify-center text-white">0.89</div>
              </div>
              <div className="grid grid-cols-4 gap-2 text-xs">
                <div className="font-medium">Temp</div>
                <div className="h-8 bg-red-300 rounded flex items-center justify-center">-0.6</div>
                <div className="h-8 bg-green-500 rounded flex items-center justify-center text-white font-semibold">1.0</div>
                <div className="h-8 bg-red-400 rounded flex items-center justify-center text-white">-0.72</div>
              </div>
              <div className="grid grid-cols-4 gap-2 text-xs">
                <div className="font-medium">Prod</div>
                <div className="h-8 bg-green-400 rounded flex items-center justify-center text-white">0.89</div>
                <div className="h-8 bg-red-400 rounded flex items-center justify-center text-white">-0.72</div>
                <div className="h-8 bg-green-500 rounded flex items-center justify-center text-white font-semibold">1.0</div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 text-xs">
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                Forte Positiva
              </span>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded"></div>
                Forte Negativa
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Principais Descobertas</CardTitle>
            <CardDescription>
              Insights chave da análise exploratória
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-2">
                  <BarChart3 className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-800">
                      Padrão Sazonal Identificado
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      Meses secos (mai-jun) apresentam 65% menos produção e 3x mais doenças hídricas
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-purple-800">
                      Cluster de Vulnerabilidade
                    </p>
                    <p className="text-xs text-purple-600 mt-1">
                      32% das comunidades sem acesso à água potável concentram 78% dos casos de doenças
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-amber-50 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-amber-800">
                      Outliers Críticos
                    </p>
                    <p className="text-xs text-amber-600 mt-1">
                      Chuva de 700mm/dia requer verificação - possível erro ou evento extremo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Relatório Final</CardTitle>
          <CardDescription>
            Documento consolidado da análise exploratória para entrega
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Conteúdo do Relatório:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Definição clara do problema
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Estratégia de limpeza dos dados
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Análise exploratória completa
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Visualizações e gráficos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Insights e recomendações
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Modelos preditivos sugeridos
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Informações de Entrega:</h4>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium">Nome do arquivo:</p>
                  <p className="text-xs text-gray-600 font-mono">tarefa3_i2a2.pdf</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium">Email de entrega:</p>
                  <p className="text-xs text-gray-600 font-mono">challenges@i2a2.academy</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="text-sm font-medium text-red-800">Prazo final:</p>
                  <p className="text-xs text-red-600">29 de junho de 2025 - 23:59:59</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <Button onClick={handleExportReport} className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Exportar Relatório PDF
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Visualizar Prévia
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataVisualization;
