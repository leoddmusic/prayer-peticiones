const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const estadosPermitidos = [
  'Pendiente',
  'En seguimiento',
  'Respondida',
  'Cerrada'
];

app.get('/', (_req, res) => {
  res.json({
    sistema: 'PRAYER',
    modulo: 'Registro y actualización de estado de peticiones',
    requerimientos: ['RF-01', 'RF-05'],
    estados: estadosPermitidos
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`PRAYER ejecutándose en el puerto ${PORT}`);
  });
}

module.exports = { app, estadosPermitidos };
