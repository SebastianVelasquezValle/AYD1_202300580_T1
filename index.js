const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
        message: 'Funciona',
        nombre: 'Sebastian Levi Velásquez Valle',
        carnet: 202300580,
        musica_Favorita: 'Pieces - Avaion'
   });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});