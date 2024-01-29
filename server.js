const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Database configuration
const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'moniquedb'
});

// Connect to database
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados bem-sucedida');
});

// Set static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to test the database connection
app.get('/testdb', (req, res) => {
    connection.query('SELECT 1', (err, results) => {
        if (err) {
            console.error('Erro ao testar a conexão com o banco de dados:', err);
            res.status(500).send('Erro ao testar a conexão com o banco de dados');
        } else {
            console.log('Conexão com o banco de dados bem-sucedida');
            res.status(200).send('Conexão com o banco de dados bem-sucedida');
        }
    });
});

// Route to get all tasks
app.get('/moniquedb', (req, res) => {
    connection.query('SELECT * FROM moniquedb', (err, results) => {
        if (err) {
            console.error('Erro ao buscar tarefas:', err);
            res.status(500).json({ error: 'Erro ao buscar tarefas' });
            return;
        }
        const moniquedb = results.map(row => ({ task: row.task }));
        res.json(moniquedb);
    });
});

// Route to add a new task
app.post('/moniquedb', (req, res) => {
    const { task } = req.body;
    if (!task) {
        res.status(400).json({ error: 'A tarefa não pode estar vazia' });
        return;
    }
    connection.query('INSERT INTO moniquedb (task) VALUES (?)', [task], (err, results) => {
        if (err) {
            console.error('Erro ao adicionar tarefa:', err);
            res.status(500).json({ error: 'Erro ao adicionar tarefa' });
            return;
        }
        res.status(201).json({ message: 'Tarefa adicionada com sucesso!' });
    });
});

// Route to handle the root route
app.get('/', (req, res) => {
    // Envie o arquivo HTML da página inicial
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
