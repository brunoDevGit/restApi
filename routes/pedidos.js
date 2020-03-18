//IMPORTADOS
const express = require('express');
const router = express.Router();


///GET DE TODOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Pedidos Usando o Get "
    })
});
///POST INSERIR
router.post('/', (req, res, next) => {
    
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        mensagem: " Pedidos  Usando o Post ",
        pedidoCriado:pedido
    })
});
//////GET POR ID
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: " Pedidos Usando o Get Por ID ESPECIAL  ",
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: "Pedidos Voce GET POR ID  "

        })
    }
});

// PATCH ALTERAR 
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: " Pedidos Usando o Patch "
    })
});

// DELETE  EXCLUIR
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Pedidos Usando o Delete "
    })
});

module.exports = router;