// importando os recursos de pacotes
const colors = require('colors');

console.log('Olá, mundo!'.rainbow);
console.log(colors.bgGreen('Hello, world!'));
console.log(colors.america('Hello, world!'));
console.log(colors.zebra('Hello, world!'));
console.log(colors.underline('Hello, world!'));

/* Comandos:
    npm -v = mostra a versão do npm;
    npm ls = exibe todos os pacotes instalados no projeto;
    cls = limpa a tela;
    npm init = inicializa o gerenciador instalando o package.json, arquivo que descreve os pacotes e dependências necessários para o projeto;
    npm run <nome do rótulo ou identificador> = executa um script dentro do arquivo package.json;
    npm i <nome do pacote> = instala um pacote no projeto;
    npm install --save-dev nodemon = instalando o Nodemon como uma dependência de desenvolvimento, não sendo disponibilizado no ambiente de produção;
    
    package.json : gerencia os pacotes, documenta o projeto e automaiza alguns serviços.

    JSON: modelo de arquivo usado para armazenamento e transmissão de dados no formato texto, muito utilizado para estruturar informações.

    Nodemon: nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em Node.js, reiniciando automaticamente o aplicativo do node quando são detectadas alterações no arquivo no diretório.
*/