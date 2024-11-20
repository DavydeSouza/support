const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const chamadosRoutes = require('./routes/chamados');
const sequelize = require('./config/database');
const Chamado = require('./models/Chamado');

const app = express();

// Sincronizar banco ao iniciar
sequelize.sync({ force: false }) // Use `force: true` apenas para recriar tabelas durante o desenvolvimento
    .then(() => {
        console.log('Banco de dados sincronizado');
    })
    .catch(err => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });
// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api/chamados', chamadosRoutes);

// Inicializar o servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

