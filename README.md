🌍 VisaConsulting — Plataforma de Consultoria de Vistos & Imigração

Uma aplicação web moderna desenvolvida com React + TypeScript + Vite, criada para auxiliar clientes no processo de orientação, preparação e acompanhamento de vistos e imigração, oferecendo uma experiência clara, intuitiva e profissional.

✨ Visão Geral

O VisaConsulting é um site institucional e interativo para uma empresa de consultoria migratória.
O objetivo do projeto é:

Apresentar os serviços de consultoria de vistos de forma clara e confiável

Guiar o usuário sobre os tipos de vistos e processos migratórios

Facilitar o contato e o pré-atendimento do cliente

Oferecer uma navegação fluida e responsiva

🧩 Funcionalidades

Página inicial institucional com apresentação da empresa

Seção de serviços (Tipos de visto: turismo, estudo, trabalho, imigração)

Fluxo orientativo passo a passo do processo de visto

Sistema de navegação com React Router DOM

Componentes reutilizáveis e tipados com TypeScript

Layout responsivo (desktop, tablet e mobile)

Design elegante e profissional (paleta navy + gold)

Pronto para integração com backend futuramente (formulários, CRM, etc.)

🛠️ Tecnologias Utilizadas

React — biblioteca para construção da interface

TypeScript — tipagem estática para maior segurança e escalabilidade

Vite — bundler rápido para desenvolvimento e build

React Router DOM — navegação entre páginas

Tailwind CSS (ou CSS Modules / Styled Components — conforme você estiver usando)

ESLint + TypeScript ESLint — qualidade e padronização de código

📁 Estrutura do Projeto
src/
 ├─ components/        # Componentes reutilizáveis (NavLink, Header, Footer, etc.)
 ├─ pages/             # Páginas (Home, Services, Process, Contact, etc.)
 ├─ lib/               # Funções utilitárias (cn, helpers, etc.)
 ├─ routes/            # Definição de rotas (se existir separado)
 ├─ assets/            # Imagens e ícones
 ├─ App.tsx            # Configuração principal do app
 └─ main.tsx           # Ponto de entrada

▶️ Como Rodar o Projeto
1. Clone o repositório
git clone https://github.com/seu-usuario/visa-consulting.git
cd visa-consulting

2. Instale as dependências
npm install

3. Rode o projeto
npm run dev


Acesse em: http://localhost:5173

🔀 Navegação (React Router)

O projeto utiliza react-router-dom para controle de rotas:

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Services />} />
  <Route path="/process" element={<Process />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

🎨 Design & Identidade Visual

Paleta principal: Navy + Gold

Tipografia moderna e legível

Visual institucional, elegante e confiável

Foco em UX para reduzir fricção no entendimento do processo migratório

🚀 Próximos Passos

Integração com backend (Node + MongoDB)

Envio de formulários para API / CRM

Dashboard administrativo para a consultoria

Autenticação de usuários

Sistema de agendamentos

👩‍💻 Autora

Desenvolvido por Lidiane (Lid.Dev)
Desenvolvedora Front-End em transição para Full Stack 🚀
Especializada em interfaces modernas, performáticas e orientadas à experiência do usuário.