

# Refinamento da Navbar + Links de Paginas em Construcao

## Objetivo
Reorganizar a navbar para separar visualmente links de secao (scroll na home) dos links de paginas, e adicionar links para "Pacientes" e "Medicos" com indicacao de "Em breve".

## Mudancas no `src/components/Navbar.tsx`

### Desktop
- Manter os links de secao (Sobre, Formacao, Areas, Visao) agrupados
- Adicionar um separador vertical sutil (`border-l border-border/50`) entre os links de secao e os links de pagina
- Apos o separador, listar: **Projetos**, **Pacientes**, **Medicos**
- "Pacientes" e "Medicos" terao uma badge discreta "Em breve" ao lado (texto pequeno, estilo `text-muted-foreground`, sem link funcional — serao `<span>` com `cursor-default` e `opacity-60`)
- "Projetos" permanece como `Link` funcional para `/projetos`
- Quando o usuario esta em `/projetos`, o link fica com estilo ativo (`text-foreground` em vez de `text-muted-foreground`)

### Mobile (hamburger)
- Separar os dois grupos com um `<Separator />` horizontal fino
- Adicionar um label discreto "Paginas" em texto pequeno e uppercase acima do grupo de links de pagina
- "Pacientes" e "Medicos" aparecem com a mesma indicacao "Em breve" e sem acao de clique
- Fechar o menu ao clicar em qualquer link funcional

### Navegacao entre paginas
- Substituir `window.location.href` por `useNavigate` do react-router para evitar reload completo ao clicar em links de secao estando fora da home

### Paginas placeholder
- Criar paginas simples `src/pages/Pacientes.tsx` e `src/pages/Medicos.tsx` com layout "Em construcao" (Navbar + mensagem central + Footer)
- Por enquanto, os links na navbar NAO apontam para essas paginas (ficam desabilitados com badge "Em breve")
- As rotas serao adicionadas em `src/App.tsx` para uso futuro

## Detalhes tecnicos
- Usar `Separator` do projeto (`@radix-ui/react-separator`) para divisores
- Usar `useNavigate` + `useLocation` do `react-router-dom`
- Badge "Em breve" implementada inline como `<span>` estilizado (sem componente extra)
- Paginas placeholder usam os mesmos `Navbar` e `FooterSection` para consistencia

