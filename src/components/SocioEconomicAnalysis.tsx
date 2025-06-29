
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { TrendingUp, Users, Droplets, AlertCircle, CheckCircle, XCircle } from "lucide-react";

const productionData = [
  { month: "Jan", volume: 15.5, doencas: 8, seguranca: 85 },
  { month: "Fev", volume: 12.3, doencas: 12, seguranca: 78 },
  { month: "Mar", volume: 18.2, doencas: 6, seguranca: 92 },
  { month: "Abr", volume: 16.8, doencas: 9, seguranca: 88 },
  { month: "Mai", volume: 8.9, doencas: 18, seguranca: 65 },
  { month: "Jun", volume: 5.2, doencas: 25, seguranca: 52 },
];

const waterAccessData = [
  { name: "Com Acesso", value: 68, color: "#10b981" },
  { name: "Sem Acesso", value: 32, color: "#ef4444" },
];

const SocioEconomicAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-green-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-green-700 text-base">
              <TrendingUp className="w-4 h-4" />
              Produção Média
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">12.8t</div>
            <p className="text-xs text-gray-500">Toneladas/mês</p>
            <Progress value={64} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-red-700 text-base">
              <AlertCircle className="w-4 h-4" />
              Doenças Hídricas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-800">13</div>
            <p className="text-xs text-gray-500">Casos/mês</p>
            <Badge variant="destructive" className="mt-2 text-xs">Em Alta</Badge>
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-blue-700 text-base">
              <Droplets className="w-4 h-4" />
              Acesso à Água
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">68%</div>
            <p className="text-xs text-gray-500">População atendida</p>
            <Progress value={68} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-purple-700 text-base">
              <Users className="w-4 h-4" />
              Segurança Alimentar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-800">77</div>
            <p className="text-xs text-gray-500">Índice médio</p>
            <Progress value={77} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Produção Agrícola e Incidência de Doenças</CardTitle>
            <CardDescription>
              Correlação entre volume produzido e casos de doenças hídricas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="volume" 
                  stackId="1"
                  stroke="#10b981" 
                  fill="#10b981"
                  fillOpacity={0.6}
                  name="Produção (t)"
                />
                <Area 
                  type="monotone" 
                  dataKey="doencas" 
                  stackId="2"
                  stroke="#ef4444" 
                  fill="#ef4444"
                  fillOpacity={0.6}
                  name="Doenças"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Acesso à Água Potável</CardTitle>
            <CardDescription>
              Distribuição da população por disponibilidade de água
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={waterAccessData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {waterAccessData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'População']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Com Acesso (68%)</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-500" />
                <span className="text-sm">Sem Acesso (32%)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Insights Socioeconômicos</CardTitle>
          <CardDescription>
            Análise das relações entre fatores ambientais e condições de vida
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Correlações Identificadas:</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Produção vs Doenças</p>
                    <p className="text-xs text-gray-600">
                      Correlação negativa forte (-0.87): quando a produção cai, doenças hídricas aumentam
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Água vs Segurança Alimentar</p>
                    <p className="text-xs text-gray-600">
                      Correlação positiva (0.72): melhor acesso à água melhora segurança alimentar
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Sazonalidade</p>
                    <p className="text-xs text-gray-600">
                      Períodos secos (mai-jun) mostram pior desempenho em todos indicadores
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Recomendações:</h4>
              <div className="space-y-2">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800 font-medium">Curto Prazo</p>
                  <p className="text-xs text-green-700">
                    Implementar sistemas de captação de água da chuva durante períodos chuvosos
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 font-medium">Médio Prazo</p>
                  <p className="text-xs text-blue-700">
                    Desenvolver culturas resistentes à seca e sistemas de irrigação eficientes
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-800 font-medium">Longo Prazo</p>
                  <p className="text-xs text-purple-700">
                    Criar programa de monitoramento integrado clima-saúde-produção
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocioEconomicAnalysis;
