//IMPORTADOS
const express = require('express');
const router = express.Router();
const mysql = require ('../mysql').pool;


///GET DE TODOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando o Get "
    })
});
///POST INSERIR
router.post('/', (req, res, next) => {

    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO produtos (nome, preco) VALUES (?,?)',
            [req.body.nome, req.body.preco],
            (error, resultado, field) => {
                conn.release();
                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }
                res.status(201).send({
                    mensagem: "Produto Inserido ",
                    id_produto: resultado.insertId
                });
            }
        )
    });
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