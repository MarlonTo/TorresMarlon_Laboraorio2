const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuario');

const app = express();
const PORT = 3000;

// Configurar CORS para permitir solicitudes desde localhost:4200
app.use(cors({
  origin: 'http://localhost:4200',  // aquí defines el origen que permites
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // si usas cookies o autenticación, si no puedes omitirlo
}));

app.use(express.json()); // para interpretar JSON en POST, PUT, etc.

// Usar las rutas
app.use('/usuario', usuarioRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
