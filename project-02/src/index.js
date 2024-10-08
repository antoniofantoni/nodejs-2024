const express = require("express")
const app = express();

app.get('/', (req, res) => {
	res.send("Seja bem vindo a minha API!")
})

app.listen(3001, () => {
console.log("Servidor rodando na porta 3001!")
})