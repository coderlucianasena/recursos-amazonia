
# Análise EDA - Recursos Hídricos da Amazônia

Um dashboard interativo para análise exploratória de dados (EDA) dos recursos hídricos da região amazônica, desenvolvido para o programa VIBE Coding - Ciclo de Análise de Dados.

## 📊 Sobre o Projeto

Este projeto apresenta uma análise abrangente dos recursos hídricos da Amazônia, explorando dados climáticos, socioeconômicos e ambientais através de visualizações interativas e insights baseados em dados.

### Principais Funcionalidades

- **Dashboard Interativo**: Visualizações dinâmicas com gráficos e métricas em tempo real
- **Análise Climática**: Dados de precipitação, temperatura e umidade da região
- **Análise Socioeconômica**: Indicadores populacionais e econômicos relacionados aos recursos hídricos
- **Visualizações Avançadas**: Gráficos interativos utilizando Recharts
- **Design Responsivo**: Interface otimizada para desktop, tablet e mobile (mobile-first)

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI modernos
- **Recharts** - Biblioteca para gráficos e visualizações
- **Lucide React** - Ícones SVG

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <YOUR_GIT_URL>

# Navegue até o diretório do projeto
cd <YOUR_PROJECT_NAME>

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📱 Deploy

Este projeto pode ser facilmente deployado através do [Lovable](https://lovable.dev/projects/349888c5-edf9-468d-ba34-58cbab7d97b9):

1. Acesse o projeto no Lovable
2. Clique em **Share** → **Publish**
3. Seu dashboard estará disponível online

### Domínio Customizado

Para conectar um domínio personalizado:
1. Navegue até **Project** → **Settings** → **Domains**
2. Clique em **Connect Domain**
3. Siga as instruções para configuração

Mais informações: [Configurando domínio customizado](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## 📈 Estrutura do Projeto

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── ui/             # Componentes de UI (shadcn/ui)
│   ├── ClimateAnalysis.tsx
│   ├── DataVisualization.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── SocioEconomicAnalysis.tsx
│   └── Footer.tsx
├── pages/              # Páginas da aplicação
├── hooks/              # Custom hooks
└── lib/                # Utilitários e configurações
```

## 🎯 Objetivos do Projeto

- Democratizar o acesso a dados sobre recursos hídricos amazônicos
- Fornecer insights visuais para tomada de decisões sustentáveis
- Demonstrar técnicas avançadas de análise exploratória de dados
- Criar uma ferramenta educativa sobre a importância da preservação hídrica

## 📊 Dados e Fontes

Os dados utilizados neste projeto são baseados em:
- Institutos de pesquisa ambientais
- Dados governamentais de recursos hídricos
- Estudos acadêmicos sobre a região amazônica
- Indicadores socioeconômicos regionais

## 🤝 Contribuições

Este projeto foi desenvolvido como parte do programa VIBE Coding, focando em boas práticas de desenvolvimento e análise de dados.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👩‍💻 Autora

**Luciana Sena**  
*Desenvolvedora e Analista de Dados*

- 🔗 [LinkedIn](https://linkedin.com)
- 🐙 [GitHub](https://github.com)
- 📧 Contato profissional disponível via LinkedIn

---

*Desenvolvido com 💚 para o programa VIBE Coding - Ciclo de Análise de Dados*  
*Transformando dados em insights para a sustentabilidade da Amazônia*

---

### 📚 Sobre o VIBE Coding

O VIBE Coding é um programa educacional focado em análise de dados e desenvolvimento de soluções tecnológicas para desafios ambientais e sociais, promovendo o uso responsável da tecnologia para um futuro mais sustentável.
