# Projeto de Lista de Tarefas com Docker

Neste projeto, desenvolvemos uma aplicação de lista de tarefas (ToDo List) usando Node.js e Express, aproveitando um banco de dados MySQL, e containerizamos tudo com Docker.

## Requisitos Prévios

- Certifique-se de ter o Docker instalado e configurado em sua máquina local.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos e diretórios:

- `server.js`: Contém o código central da aplicação Node.js, incluindo a configuração do servidor Express e as rotas para interagir com o banco de dados.
- `Dockerfile`: Arquivo utilizado para criar a imagem Docker da aplicação.
- `docker-compose.yaml`: Arquivo de configuração do Docker Compose, responsável por definir e executar os serviços necessários para o funcionamento da aplicação.
- `.gitignore`: Lista os arquivos e diretórios a serem ignorados pelo controle de versão Git.
- `script.js`: Responsável por interagir com a interface do usuário da aplicação.
- `index.html`: Arquivo HTML com a estrutura da página da aplicação.

## Como Executar

Para rodar a aplicação, siga estes passos:

1. Clone o repositório do projeto em sua máquina local.
2. Navegue até o diretório raiz do projeto.
3. Execute o comando a seguir para iniciar os serviços Docker:

```bash
docker-compose up -d
```

Esse comando criará e iniciará os contêineres Docker conforme definido no arquivo `docker-compose.yaml`.

4. Após a execução bem-sucedida, a aplicação estará disponível em [http://localhost:8080](http://localhost:8080) em seu navegador.

## Funcionalidades

- Adicione novas tarefas à lista.
- Visualize todas as tarefas cadastradas.
- Os dados das tarefas são armazenados em um banco de dados MySQL.

## Observações

- Verifique se as portas necessárias (neste caso, a porta 8080) não estão sendo utilizadas por outros serviços em sua máquina, para evitar conflitos.
- Se desejar fazer modificações, certifique-se de ter conhecimento em Docker e Docker Compose para lidar com os arquivos de configuração adequados.

Com essas etapas, o projeto *Lista de tarefas* estará em execução em sua máquina local, containerizado com Docker.