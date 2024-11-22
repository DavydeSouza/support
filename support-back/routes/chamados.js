const express = require('express');
const Chamado = require('../models/Chamado');
const router = express.Router();

// Listar todos os chamados
router.get('/', async (req, res) => {
    try {
        const chamados = await Chamado.findAll();
        res.json(chamados);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar chamados' });
    }
});

// Criar um novo chamado
router.post('/', async (req, res) => {
    const { titulo, descricao, prioridade } = req.body;

    if (!titulo || !descricao || !prioridade) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    try {
        const novoChamado = await Chamado.create({ titulo, descricao, prioridade });
        res.status(201).json(novoChamado);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar chamado' });
    }
});

// Buscar um chamado pelo ID
router.get('/:id', async (req, res) => {
    try {
        const chamado = await Chamado.findByPk(req.params.id);
        if (!chamado) {
            return res.status(404).json({ error: 'Chamado não encontrado' });
        }
        res.json(chamado);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar o chamado' });
    }
});

// Atualizar um chamado
router.put('/:id', async (req, res) => {
    const { titulo, descricao, prioridade } = req.body;

    try {
        const chamado = await Chamado.findByPk(req.params.id);
        if (!chamado) {
            return res.status(404).json({ error: 'Chamado não encontrado' });
        }

        chamado.titulo = titulo;
        chamado.descricao = descricao;
        chamado.prioridade = prioridade;
        await chamado.save();

        res.json(chamado);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar chamado' });
    }
});

// Deletar um chamado
/*router.delete('/:id', async (req, res) => {
    try {
        const chamado = await Chamado.findByPk(req.params.id);
        if (!chamado) {
            return res.status(404).json({ error: 'Chamado não encontrado' });
        }

        await chamado.destroy();
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar chamado' });
    }
});*/

module.exports = router;
