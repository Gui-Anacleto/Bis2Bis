# Criação de script para ler API JSON e popular o banco de dados:

## O objetivo do teste é varrer uma API que retorna todas as universidades contidas em cada país da lista fornecida e salvar estas informações no banco de dados.

Foi adicionada uma propriedade a mais "fromApi", para saber quais universidade foram obtidas através da API externa, quais foram adicionadas posteriormente.

## Install

Npm 8.3.0 instalado

Node v16.17.0 instalado

    npm install express@4.17.3
    npm install nodemon@2.0.15 -D
    npm install axios
    npm install dotenv
    npm install mongoose-paginate

## Connection

É necessario criar uma banco no MongoDB e colocar a sring de conexão no arquivo .env.

## Run the app

    npm start

## GET

 `GET /universities/`

  Irá listar todas as universidades do banco, retornando _id, nome,país e estado.
 
 `GET /universities?country=brazil`
 
  Sendo permitido filtrar por país.
 
 `GET /universities?pages=200`
 
  É possivel informar apagina na requisição para ter acesso a todos os registros
 
 `GET /universities/:id`

  Existe a busca por ID também.
  
 `GET /universities/init`
 
  Essa rota irá todas as univerdades dos paises :"argentina","brasil","chile","colombia","paraguai","peru","suriname","uruguay" ao banco de dados.

## POST

`POST /universities/`

Cadastrar as universidades, com todos os campos necesarios: alpha_two_code, web_pages, name, country, domains, state-province.
Existe uma validação para que não sejá cadastradas duas universidades com mesmo país, estado e nome:

Informar no corpo da requisição:

exemplo de post.

    {
            "domains": [
                "teste2.teste2.teste2"
            ],
            "country": "Brazil",
            "web_pages": [
                "http://www.teste1.teste1.com/"
            ],
            "name": "Teste universidade 2",
            "alpha_two_code": "BR",
            "fromApi": true
    }
   
## PUT

`PUT /universities/id:`

Alterar a universidade pelo id:

Passar o id na URL e os dados no corpo á serem alterados.

## DELETE

`DELETE /universities/id`

Excluir a universidade pelo id:

Passar o id na URL para excluir a universidade.





