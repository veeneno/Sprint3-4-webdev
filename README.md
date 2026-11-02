# Equipe Rocket

Protótipo web do projeto Equipe Rocket: um app de câmera fotográfica que captura fotos em modo RAW e permite editá-las depois com IA. Nesta versão o usuário faz login, navega pela galeria de fotos, busca e filtra as fotos, abre os detalhes de cada uma, aplica uma edição com IA a partir de um prompt e pode excluir fotos.

## Tecnologias utilizadas

- [React 19](https://react.dev/) — biblioteca para construção da interface
- [React Router DOM 7](https://reactrouter.com/) — rotas públicas e privadas
- [Vite 8](https://vitejs.dev/) — build tool e servidor de desenvolvimento
- [Tailwind CSS 4](https://tailwindcss.com/) — estilização e responsividade
- [MockAPI](https://mockapi.io/) — API mockada com os dados das fotos
- [Lorem Picsum](https://picsum.photos/) — imagens reais usadas nas fotos
- JavaScript (ES Modules)
- Web Storage API (`localStorage`) — persistência do login e do tema claro/escuro

## Funcionalidades

- Login com rota privada (o dashboard e os detalhes só abrem com usuário logado)
- Galeria de fotos consumindo a API, com estados de carregamento e erro
- Busca pelo título e filtros por status (editada/RAW) e data
- Página de detalhes de cada foto
- Edição com IA: o usuário escreve um prompt e a foto é marcada como editada (PUT na API)
- Exclusão de fotos (DELETE na API)
- Tema claro/escuro salvo no navegador
- Página 404 para rotas inexistentes
- Layout responsivo para mobile, tablet e desktop

## Como instalar as dependências

Pré-requisitos: [Node.js](https://nodejs.org/) 18 ou superior e npm (já vem junto com o Node).

```bash
git clone https://github.com/veeneno/Sprint3-webdev.git
cd Sprint3-webdev
npm install
```

## Como executar o projeto

Modo desenvolvimento (com hot reload):

```bash
npm run dev
```

Depois é só abrir o endereço mostrado no terminal (por padrão [http://localhost:5173](http://localhost:5173)).

Outros comandos disponíveis:

```bash
npm run build    # gera a versão de produção na pasta dist/
npm run preview  # serve localmente a versão de produção já buildada
npm run lint     # verifica o código com o oxlint
```

## Back-end / API

O projeto não tem um back-end próprio, então não é preciso rodar nenhum servidor. Os dados das fotos vêm de uma API mockada no MockAPI, que já está online.

A URL da API fica no arquivo `.env` na raiz do projeto, que já vem configurado:

```
VITE_API_URL=https://6ae90e381a7b15aaa50f9ae9.mockapi.io/api/v1
```

Endpoints utilizados:

| Método | Endpoint | Uso |
| ------ | -------- | --- |
| GET | `/photos` | lista todas as fotos da galeria |
| GET | `/photos/:id` | busca os detalhes de uma foto |
| PUT | `/photos/:id` | aplica a edição com IA (salva o prompt) |
| DELETE | `/photos/:id` | exclui uma foto |

Como a API é compartilhada, editar ou excluir uma foto altera os dados para todo mundo que estiver usando.

## Rotas da aplicação

| Rota | Tipo | Página |
| ---- | ---- | ------ |
| `/` | pública | redireciona para o login |
| `/login` | pública | tela de login |
| `/dashboard` | privada | galeria de fotos |
| `/fotos/:id` | privada | detalhes da foto, edição com IA e exclusão |
| qualquer outra | pública | página 404 |

## Estrutura de pastas

```
src/
├── components/   componentes reutilizáveis (Header, Footer, Layout, PhotoCard...)
├── context/      contextos de autenticação e tema
├── hooks/        hooks customizados (useAuth, useTheme, usePhotos, usePhoto, usePhotoFilters)
├── pages/        páginas da aplicação (Login, Dashboard, PhotoDetail, NotFound)
├── services/     comunicação com a API
└── utils/        funções auxiliares de data
```

## Usuários e senhas necessários para teste

O login é fictício (hardcoded), apenas para fins de protótipo — não há um back-end de autenticação real. Use as credenciais abaixo na tela de login:

| Usuário | Senha |
| ------- | ----- |
| `admin` | `1234` |

Após o login, o estado de "logado" fica salvo no `localStorage`, então ao recarregar a página o usuário continua autenticado até clicar em "Sair".

## Onde e como a IA foi utilizada no projeto

### sprint 3

IA foi utilizada em algumas partes específicas como a proteção de rotas (não poder acessar o dashboard sem logar), algumas partes do CSS como alterar do modo claro para o escuro e salvar isso no LocalStorage.
E foi utilizada para auxílio da mudança da página de HTML CSS e JS puros para React + Vite
### sprint 4

IA foi utilizada para auxilio na implementação do mockAPI, adiçao do arquivo vercel.json
e também ajudou a corrigir a parte de pesquisa por nome da foto

## Link do deploy na vercel

https://sprint3-webdev-omega.vercel.app/
