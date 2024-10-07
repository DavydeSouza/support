# Sistema de Abertura de chamado 
Este projeto é um sistema de controle de chamados desenvolvido com React e React-Bootstrap. Ele permite que os usuários abram chamados, descrevam problemas, atribuam prioridades e visualizem os chamados abertos em uma interface simples e fácil de usar.

## 🎨 Funcionalidades
Abertura de Chamados: Usuários podem registrar novos chamados, preenchendo informações como título, descrição e prioridade.
Listagem de Chamados: Chamados abertos são listados em uma tabela, exibindo informações como o título, a descrição e a prioridade.
Modal de Informações: Modal de informações sobre o software, explicando as funcionalidades e benefícios.
Interface Responsiva: Interface simples e responsiva, utilizando o framework CSS do Bootstrap.
Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces de usuário.
React-Bootstrap: Integração do Bootstrap com componentes React.
Bootstrap: Framework CSS para estilização responsiva.
JavaScript (ES6+): Para lógica do sistema.
HTML/CSS: Estruturação e estilização do layout.
Instalação e Execução
Siga os passos abaixo para rodar o projeto em seu ambiente local.

## ✨ Pré-requisitos
Certifique-se de ter o Node.js e o npm instalados na sua máquina. Você pode baixá-los aqui.

## ✨ Passos de Instalação
Clone o repositório:

````
git clone https://github.com/seu-usuario/sistema-chamados.git
````
Navegue até o diretório do projeto:
````
cd sistema-chamados
````
Instale as dependências:

Execute o comando abaixo para instalar todas as dependências necessárias:
````
npm install
````
Inicie o servidor de desenvolvimento:

Para rodar o projeto localmente, execute o seguinte comando:
````
npm start
````
O projeto estará disponível no endereço http://localhost:3000/.

## 🧩 Estrutura do Projeto
A estrutura de diretórios do projeto é a seguinte:
````
src/
│
├── components/
│   └── Home.jsx       # Componente principal com a lógica de abertura e listagem de chamados
│
├── styles/
│   └── home.css       # Estilos customizados do componente Home
│
├── App.js             # Arquivo principal que define as rotas
└── index.js           # Arquivo de entrada do React
````
Como Usar
Abertura de Chamado:

No menu lateral, clique em "Abertura de Chamado" para abrir o modal onde você pode registrar um novo chamado.
Preencha os campos de título, descrição e prioridade, e clique em "Abrir Chamado".
Visualização de Chamados:

Após abrir um chamado, ele será automaticamente listado na tabela de "Chamados Abertos" na tela principal.
Chamados já abertos podem ser visualizados com informações detalhadas.
Melhorias Futuras
Integração com API: Conectar o sistema a uma API para armazenar e gerenciar os chamados em um banco de dados.
Autenticação: Adicionar funcionalidade de login para que os chamados sejam registrados por usuários autenticados.
Edição e Fechamento de Chamados: Implementar funcionalidades para editar e fechar chamados existentes.
Filtragem e Busca: Permitir que os usuários filtrem os chamados por prioridade, status ou data.
Contribuição
Se você quiser contribuir para o projeto, sinta-se à vontade para abrir issues ou enviar pull requests com melhorias.

Fork o projeto
Crie uma branch de funcionalidade (git checkout -b feature/nova-funcionalidade)
Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade')
Push para a branch (git push origin feature/nova-funcionalidade)
Abra um pull request
## Licença
Este projeto é licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

## Contato
Nome: Davy de Souza

Email: davydesouza02@gmail.com

GitHub: DavydeSouza

