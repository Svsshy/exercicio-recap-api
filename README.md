# Exercício API


## Contexto
Elon Musk comprou o Twitter e todos estão tristes. Você percebe que é uma boa oportunidade de fazer a sua própria versão do Twitter para competir com a estabelecida rede social.

## Escopo do exercício

- Faça um [**fork**](https://docs.github.com/pt/get-started/quickstart/fork-a-repo) desse repositório. 
- Inicialize um projeto de Node.js utilizando o ```npm```.
- Crie uma instância do MongoDB usando o [Mongo Atlas](https://www.mongodb.com/atlas/database).
- Crie uma API usando o ```express``` que possua **rotas**, **controladores** e **modelos**. 
- Utilize o pacote ```mongoose``` para criar ```Schemas``` dos recursos.
- A sua API deve ser capaz de realizar operações de CRUD nos seguintes recursos:

```javascript
User:
{
  uuid: string, // unique
  displayName: string, // max: 64 characters
  handler: string, // unique, max: 16 characters
  email: string, // unique
}
```

```javascript
Tweet:
{
  uuid: string, // unique
  content: string, // max: 240 characters
}
```

## Requisitos
Implemente a API usando os conceitos de clean code estudados, faça commits regulares e usando [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) nas mensagens.