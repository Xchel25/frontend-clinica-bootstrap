require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const db = require('./models');  // Importamos los modelos generados por Sequelize

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 🔧 AQUI ESTÁ LA MAGIA QUE FALTABA:
const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

// Probar conexión a la base de datos
db.sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión a la base de datos exitosa');
  })
  .catch(err => {
    console.error('❌ Error al conectar a la base de datos:', err);
  });

// Ruta de prueba inicial
app.get('/', (req, res) => {
  res.send('API de la clínica funcionando 🩺');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend iniciado en http://localhost:${PORT}`);
});
