# Desafio-Webjump
Automação do site solicitado pela Webjump
Levando em consideração a página que foi especificada:
1) Crie um cenário onde clicamos nos botões "One", "Two, e "Four", depois verifique a ausência dos mesmos.

2) Dentro da mesma página, clique nos botões "One", "Two" e "Four" que encontram-se dentro do painel "IFRAME BUTTONS" e valide a não-presença dos mesmos.

3) No cenário final, iremos preencher o campo "YourFirstName" com um texto qualquer. Clique no botão "One", cheque a opção "OptionThree", selecione a opção "ExampleTwo" dentro da select box, e valide a presença da imagem do logo do "Selenium Webdriver".

4) Documente as versões das ferramentas utilizadas (O.S, Ruby, Firefox, Geckodriver, Chromedriver, etc.) e crie um step-by-step informando como configurar e utilizar esse ambiente, levando em conta a possibilidade de alguma pessoa iniciante dar continuidade em um projeto feito por você.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **Implantação** para saber como implantar o projeto.

### 📋 Pré-requisitos

O que você precisa para instalar o software e como instalá-lo?

Os pré-requisitos de software são:
visual studio code-v1.58.2
node-v16.16.0-64-bit,
cypress-v10.4.0-64-bit,
cypress-iframe-v1.0.1-64-bit,
Git-2.37.2.2-64-bit.
### 🔧 Instalação
Abrir o instalador do visual studio code e instalar o mesmo, após instalação do visual studio code realizar a instalação do nodejs, instalação do git bash (todos esses softwares são instalados por software executavel realizando o download na internet), após instalação desses softwares, abrir o visual studio code.

Primeiro passo é selecionar a opção de abertura de pasta (folder), selecionar o local onde será salvo os arquivos, recomendado criar uma pasta especifica para o projeto, após criar a pasta selecionar a pasta criada.

Em seguida iremos realizar a configuração dos plug-in dentro do VSCode, instale os seguintes plug-in:
Add Only, Bracket Pair Colorization Toggler, Cypress Snippets, ES6 Mocha Snippets, IntelliCode e Material Icon Theme.

Após instalação de plug-in abrir o terminal cli do mesmo. 

Dentro do terminal o simbolo de "+" fica no canto superior direito, selecione a opção ao lado do "+" que parece uma seta apontando para baixo, irá aparecer mais opções de interpretadores de terminal, sendo assim, selecione a opção Git Bash.

Digite o comando npm init 

Será solicitado o preenchimento de algumas informações, exemplo: Nome do pacote, descrição, ponto de entrada.

Configurado o arquivo inicial index.js, será realizado a instalação do cypress utilizando o comando: 
Npm install -–save-dev cypress
instalar o cypress e ao final instalar cypress-iframe.

Agora iremos realizar a abertura do cypress utilizando o comando: npx cypress open 

Após a abertura do Cypress será apresentado a tela do Dashboard.

Realizar login via e-mail, github... 

Após realizar o procedimento de todos esses passos, o cenário já estará montado restando somente a criação do arquivo spec para rodar o teste e a cópia do código.


## ⚙️ Executando os testes
O código possui comentários em cada passo para um melhor entendimento do mesmo.

## ✒️ Autores
**Leandro Souza Alves**

## 🎁 Expressões de gratidão

Obrigado por visualizar meu projeto 🤓.
