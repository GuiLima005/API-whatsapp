
var contatosJson = require('./contatos.js')

function getConta(contato) {

    let arrayConta = contato
    let contatoArray = []
    let contaJSON = false;

    contatosJson.contatos['whats-users'].forEach(function (numero) {

        if (numero.number == arrayConta) {
            numero.contacts.forEach(function (contato) {
                contatoArray.push(contato)
            })
        }
    })

    if (arrayConta.length > 0) {
        contaJSON = {}
        contaJSON.contatos = contatoArray
    }
    return contaJSON
}
module.exports = {
    getConta
}
// console.log(getConta('11966578996'));
