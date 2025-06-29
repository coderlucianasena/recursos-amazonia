
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Droplets, Thermometer, Cloud, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

const ClimateAnalysis = () => {
  const [climateData, setClimateData] = useState([
    { date: "2024-01", chuvas_previstas: 150, chuvas_reais: 180, temperatura: 28.5, umidade: 85 },
    { date: "2024-02", chuvas_previstas: 120, chuvas_reais: 95, temperatura: 29.2, umidade: 78 },
    { date: "2024-03", chuvas_previstas: 200, chuvas_reais: 220, temperatura: 27.8, umidade: 92 },
    { date: "2024-04", chuvas_previstas: 180, chuvas_reais: 165, temperatura: 28.9, umidade: 88 },
    { date: "2024-05", chuvas_previstas: 90, chuvas_reais: 45, temperatura: 30.1, umidade: 72 },
    { date: "2024-06", chuvas_previstas: 60, chuvas_reais: 25, temperatura: 31.2, umidade: 65 },
  ]);

  const [liveStats, setLiveStats] = useState({
    precipitacao: 142,
    temperatura: 29.3,
    umidade: 80,
    variacoes: 3
  });

  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Atualização em tempo real dos dados climáticos
  useEffect(() => {
    const interval = setInterval(() => {
      // Atualiza dados do gráfico
      setClimateData(prevData => 
        prevData.map(item => ({
          ...item,
          chuvas_reais: Math.max(10, item.chuvas_reais + (Math.random() - 0.5) * 15),
          temperatura: Math.max(25, Math.min(35, item.temperatura + (Math.random() - 0.5) * 1)),
          umidade: Math.max(60, Math.min(95, item.umidade + (Math.random() - 0.5) * 5))
        }))
      );

      // Atualiza estatísticas ao vivo
      setLiveStats(prevStats => ({
        precipitacao: Math.max(100, Math.min(200, prevStats.precipitacao + (Math.random() - 0.5) * 10)),
        temperatura: Math.max(25, Math.min(35, prevStats.temperatura + (Math.random() - 0.5) * 0.5)),
        umidade: Math.max(60, Math.min(95, prevStats.umidade + (Math.random() - 0.5) * 3)),
        variacoes: Math.max(1, Math.min(8, prevStats.variacoes + Math.floor((Math.random() - 0.5) * 2)))
      }));

      setLastUpdate(new Date());
    }, 4000); // Atualiza a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Dados Climáticos - Monitoramento em Tempo Real</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">
            Atualizado: {lastUpdate.toLocaleTimeString()}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-blue-700 text-base">
              <Droplets className="w-4 h-4" />
              Precipitação Atual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">{liveStats.precipitacao.toFixed(0)}mm</div>
            <p className="text-xs text-gray-500">Última medição</p>
            <Progress value={(liveStats.precipitacao / 200) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-orange-700 text-base">
              <Thermometer className="w-4 h-4" />
              Temperatura Atual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-800">{liveStats.temperatura.toFixed(1)}°C</div>
            <p className="text-xs text-gray-500">Agora</p>
            <Progress value={(liveStats.temperatura / 40) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="border-teal-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-teal-700 text-base">
              <Cloud className="w-4 h-4" />
              Umidade do Solo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-teal-800">{liveStats.umidade.toFixed(0)}%</div>
            <p className="text-xs text-gray-500">Nível atual</p>
            <Progress value={liveStats.umidade} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-red-700 text-base">
              <AlertTriangle className="w-4 h-4" />
              Alertas Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-800">{liveStats.variacoes}</div>
            <p className="text-xs text-gray-500">Eventos monitorados</p>
            <Badge variant={liveStats.variacoes > 5 ? "destructive" : "outline"} className="mt-2 text-xs">
              {liveStats.variacoes > 5 ? "Alto Risco" : "Monitorando"}
            </Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Precipitação: Prevista vs Real (Tempo Real)</CardTitle>
            <CardDescription>
              Comparação entre chuvas previstas e medidas (mm) - Dados atualizados automaticamente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={climateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="chuvas_previstas" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="Prevista"
                />
                <Line 
                  type="monotone" 
                  dataKey="chuvas_reais" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="Real"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Temperatura e Umidade (Live)</CardTitle>
            <CardDescription>
              Variação da temperatura média e umidade do solo em tempo real
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={climateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="temperatura" fill="#f59e0b" name="Temperatura (°C)" />
                <Bar dataKey="umidade" fill="#06b6d4" name="Umidade (%)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Análise de Variações Climáticas</CardTitle>
          <CardDescription>
            Identificação de padrões e anomalias nos dados climáticos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Padrão de Chuvas</h4>
              <p className="text-sm text-blue-600">
                Discrepância significativa entre chuvas previstas e reais nos meses de maio e junho,
                indicando possível período de seca mais intenso que o esperado.
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Temperatura</h4>
              <p className="text-sm text-orange-600">
                Elevação gradual da temperatura média, com pico em junho (31.2°C),
                correlacionada com a redução da umidade do solo.
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Outliers</h4>
              <p className="text-sm text-red-600">
                Registro de chuva superior a 700mm em um único dia requer investigação.
                Possível erro de medição ou evento climático extremo.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClimateAnalysis;
