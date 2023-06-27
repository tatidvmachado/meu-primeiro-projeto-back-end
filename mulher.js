const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(resquest, response) {
    response.json({
        nome: 'Tatiana Machado',
        imagem: 'https://media.licdn.com/dms/image/C4E03AQHSzteuSdpPcQ/profile-displayphoto-shrink_200_200/0/1624655967740?e=1692835200&v=beta&t=jGungbgwET6ECM7k2fiQUOcGvgmEkEAx3hWE7dPkP4o',
        minibio: 'belissima'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
