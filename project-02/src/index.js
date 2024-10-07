const express = require("express")
const app = express();

app.get('/', (req, res) => {
	response.send("API disponível")
})

app.listen(3000, () => {
console.log("Servidor rodando na porta 3000")
})