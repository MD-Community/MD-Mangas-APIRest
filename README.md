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

 - Adicionada rota `/` para obter e enviar ao front end a lista de mangás da API do MangaDex.
 - Adicionada rota `/mangas/:manga` para obter informações detalhadas sobre um mangá com base no ID.
 - Adicionada rota `/mangas/:manga/:capitulo` para obter informações e imagens de um capítulo específico de um mangá.
