
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, ScatterChart, Scatter } from "recharts";
import { Droplets, Thermometer, Cloud, AlertTriangle, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const ClimateAnalysis = () => {
  // Dados baseados na estrutura exata do dataset: BASE CLIMÁTICA
  const [climateData, setClimateData] = useState([
    { 
      data: "2024-01-15", 
      chuvas_previstas_mm: 109.8, 
      chuvas_reais_mm: 110.0, 
      temperatura_media_C: 34.7, 
      variacao_climatica: "sim",
      indice_umidade_solo: 45.9 
    },
    { 
      data: "2024-02-15", 
      chuvas_previstas_mm: 143.0, 
      chuvas_reais_mm: 178.7, 
      temperatura_media_C: 27.2, 
      variacao_climatica: "sim",
      indice_umidade_solo: 34.4 
    },
    { 
      data: "2024-03-15", 
      chuvas_previstas_mm: 120.6, 
      chuvas_reais_mm: 123.1, 
      temperatura_media_C: 27.5, 
      variacao_climatica: "não",
      indice_umidade_solo: 77.1 
    },
    { 
      data: "2024-04-15", 
      chuvas_previstas_mm: 109.0, 
      chuvas_reais_mm: 117.0, 
      temperatura_media_C: 29.6, 
      variacao_climatica: "não",
      indice_umidade_solo: 29.0 
    },
  ]);

  const [liveStats, setLiveStats] = useState({
    precipitacao_prevista: 132.4,
    precipitacao_real: 142.2,
    temperatura_media: 29.7,
    umidade_solo: 46.6,
    variacoes_ativas: 2
  });

  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Atualização baseada nos ranges especificados na documentação
  useEffect(() => {
    const interval = setInterval(() => {
      setClimateData(prevData => 
        prevData.map(item => ({
          ...item,
          chuvas_reais_mm: Math.max(0, Math.min(200, item.chuvas_reais_mm + (Math.random() - 0.5) * 8)),
          temperatura_media_C: Math.max(20, Math.min(35, item.temperatura_media_C + (Math.random() - 0.5) * 0.8)),
          indice_umidade_solo: Math.max(10, Math.min(90, item.indice_umidade_solo + (Math.random() - 0.5) * 4))
        }))
      );

      setLiveStats(prevStats => ({
        precipitacao_prevista: Math.max(0, Math.min(200, prevStats.precipitacao_prevista + (Math.random() - 0.5) * 6)),
        precipitacao_real: Math.max(0, Math.min(200, prevStats.precipitacao_real + (Math.random() - 0.5) * 8)),
        temperatura_media: Math.max(20, Math.min(35, prevStats.temperatura_media + (Math.random() - 0.5) * 0.4)),
        umidade_solo: Math.max(10, Math.min(90, prevStats.umidade_solo + (Math.random() - 0.5) * 3)),
        variacoes_ativas: Math.max(0, Math.min(5, prevStats.variacoes_ativas + Math.floor((Math.random() - 0.5) * 2)))
      }));

      setLastUpdate(new Date());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const variationsCount = climateData.filter(item => item.variacao_climatica === "sim").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Base Climática - Análise em Tempo Real</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">
            Atualizado: {lastUpdate.toLocaleTimeString()}
          </span>
        </div>
      </div>

      {/* Cards de métricas baseados nas variáveis exatas do dataset */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-blue-700 text-base">
              <Droplets className="w-4 h-4" />
              Chuvas Previstas (mm)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">{liveStats.precipitacao_prevista.toFixed(1)}</div>
            <p className="text-xs text-gray-500">Range: 0-200mm</p>
            <Progress value={(liveStats.precipitacao_prevista / 200) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-green-700 text-base">
              <Droplets className="w-4 h-4" />
              Chuvas Reais (mm)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">{liveStats.precipitacao_real.toFixed(1)}</div>
            <p className="text-xs text-gray-500">Medição atual</p>
            <Progress value={(liveStats.precipitacao_real / 200) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-orange-700 text-base">
              <Thermometer className="w-4 h-4" />
              Temperatura Média (°C)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-800">{liveStats.temperatura_media.toFixed(1)}</div>
            <p className="text-xs text-gray-500">Range: 20-35°C</p>
            <Progress value={(liveStats.temperatura_media / 40) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="border-teal-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-teal-700 text-base">
              <Cloud className="w-4 h-4" />
              Índice Umidade Solo (%)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-teal-800">{liveStats.umidade_solo.toFixed(0)}</div>
            <p className="text-xs text-gray-500">Range: 10-90%</p>
            <Progress value={liveStats.umidade_solo} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Precipitação: Prevista vs Real</CardTitle>
            <CardDescription>
              Comparação entre chuvas_previstas_mm e chuvas_reais_mm conforme dataset
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={climateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="chuvas_previstas_mm" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="Prevista (mm)"
                />
                <Line 
                  type="monotone" 
                  dataKey="chuvas_reais_mm" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="Real (mm)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Temperatura vs Índice de Umidade</CardTitle>
            <CardDescription>
              Relação entre temperatura_media_C e indice_umidade_solo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart data={climateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="temperatura_media_C" name="Temperatura" unit="°C" />
                <YAxis dataKey="indice_umidade_solo" name="Umidade" unit="%" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter dataKey="indice_umidade_solo" fill="#06b6d4" />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            Análise de Variação Climática
          </CardTitle>
          <CardDescription>
            Indicador variacao_climatica: identificação de anomalias climáticas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Registros com Variação</h4>
              <div className="text-3xl font-bold text-blue-600">{variationsCount}/4</div>
              <p className="text-sm text-blue-600 mt-2">
                {Math.round((variationsCount/4) * 100)}% dos registros apresentaram variação climática
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Maior Divergência</h4>
              <div className="text-3xl font-bold text-green-600">+35.7mm</div>
              <p className="text-sm text-green-600 mt-2">
                Fevereiro: chuva real superou previsão em 25%
              </p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Temperatura Extrema</h4>
              <div className="text-3xl font-bold text-amber-600">34.7°C</div>
              <p className="text-sm text-amber-600 mt-2">
                Janeiro: pico de temperatura com baixa umidade (45.9%)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {climateData.map((record, index) => (
              <div key={index} className={`p-3 rounded-lg border-l-4 ${
                record.variacao_climatica === "sim" 
                  ? "bg-red-50 border-red-400" 
                  : "bg-green-50 border-green-400"
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-semibold">{record.data}</span>
                  <Badge variant={record.variacao_climatica === "sim" ? "destructive" : "outline"}>
                    {record.variacao_climatica}
                  </Badge>
                </div>
                <div className="text-sm space-y-1">
                  <p>Prev: {record.chuvas_previstas_mm}mm | Real: {record.chuvas_reais_mm}mm</p>
                  <p>Temp: {record.temperatura_media_C}°C | Umidade: {record.indice_umidade_solo}%</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClimateAnalysis;
