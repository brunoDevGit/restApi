//IMPORTADOS
const express = require('express');
const router = express.Router();


///GET DE TODOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando o Get "
    })
});
///POST INSERIR
router.post('/', (req, res, next) => {
    const produto ={
        nome: req.body.nome,
        preco: req.body.preco
    };
    res.status(201).send({
        mensagem: "Produto Inserido ",
        produtoCriado: produto
    })
});
//////GET POR ID
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: "Usando o Get Por ID ESPECIAL ",
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: "Voce GET POR ID  "

        })
    }
});

// PATCH ALTERAR 
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o Patch "
    })
});

// DELETE  EXCLUIR
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o Delete "
    })
});

module.exports = router;