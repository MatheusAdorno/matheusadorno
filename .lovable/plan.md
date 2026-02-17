
# Pagina de Projetos

## Objetivo
Criar uma pagina dedicada `/projetos` acessivel pelo botao "Projetos" na Hero Section, listando projetos tecnologicos com o primeiro sendo o gerador de flashcards com IA.

## Mudancas

### 1. Nova pagina `src/pages/Projetos.tsx`
- Reutilizar o Navbar e FooterSection existentes para manter consistencia visual
- Header minimalista com titulo "Projetos" e subtitulo breve sobre a interseccao medicina + tecnologia
- Grid/lista de cards de projetos, cada um com:
  - Nome do projeto
  - Descricao concisa (2-3 linhas)
  - Tags de tecnologia (ex: "IA", "React", "Anki")
  - Status (Ativo / Em desenvolvimento)
  - Botao "Acessar" com link externo (ou placeholder se ainda nao tiver URL publica)
- Primeiro projeto: **Gerador de Flashcards com IA** — upload de PDFs e geracao automatica de flashcards para Anki
- Design consistente com a estetica minimalista do site (mesmas fontes, cores, espacamentos)
- Animacoes suaves com framer-motion (fade-in nos cards)

### 2. Atualizar `src/App.tsx`
- Adicionar rota `/projetos` apontando para a nova pagina

### 3. Atualizar `src/components/HeroSection.tsx`
- O botao "Projetos" passa a ser um link funcional para `/projetos` usando `react-router-dom`
- Remover a badge "Em breve" apenas desse botao (manter nos outros dois)

### 4. Atualizar `src/components/Navbar.tsx`
- Adicionar link "Projetos" na navegacao, apontando para `/projetos`

## Detalhes Tecnicos
- Usar `Link` ou `useNavigate` do `react-router-dom` para navegacao
- Componente `ProjectCard` interno na pagina para encapsular cada projeto
- Dados dos projetos definidos como array estatico (sem backend por enquanto)
- Tags usando o componente `Badge` ja existente no projeto
- Icones do `lucide-react` para complementar visualmente cada card
- Pagina responsiva: cards em coluna no mobile, grid no desktop
