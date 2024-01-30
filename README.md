# MD-Mangas-APIRest
**APIRest full - Backend** | Feita para o website de Mangas (**MD Mangas**)

**1°** - Quando for desenvolver use esse comando para rodar, ao apertar ``CTRL + S`` ele salva o arquivo e reinicia o projeto.
```js
npm run dev
```

**2°** - Sempre ao atualizar não esqueça de usar os comandos do ``Git`` para salvar e documentar a alteração.
- Nunca salve dê push no branch principal, que se chama **main**.
```js
https://www.atlassian.com/br/git/glossary#commands
```

**Atualizações**

 - Rotas `/`, `/:manga` e `/:manga/:capitulo`.
 
- Rota '/' obtem e envia ao front end a lista de mangás da API do MangaDex.
- Rota '/:manga' obtem informações detalhadas sobre um mangá com base no ID.
- Rota '/:manga/:capitulo' obtem informações e imagens de um capítulo específico de um mangá.