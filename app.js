const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint para obtener información de un personaje por su ID
app.get('/api/starwars/character/:id', async (req, res) => {
    const characterId = req.params.id;

    try {
        // Realiza una solicitud GET a SWAPI para obtener los datos del personaje
        const response = await axios.get(`https://swapi.dev/api/people/${characterId}/`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching character:', error.message);
        res.status(500).json({ error: 'Error fetching character data' });
    }
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
