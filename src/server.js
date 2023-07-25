require('dotenv').config({ path: 'variaveis.env' });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes');
const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

const publicDirectoryPath = path.join(__dirname, '../public');

server.use(express.static(publicDirectoryPath));

server.use('/api', routes);

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
