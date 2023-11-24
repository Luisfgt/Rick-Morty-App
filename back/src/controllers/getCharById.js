const axios = require('axios')
const URL = `https://rym2.up.railway.app/api/character`;

const getCharById = async (req, res) => {

    try {
        const id = req.params.id;
        const { data } = await axios(`${URL}/${id}?key=pi-luisfgt`)
        if (data.id) {
            const character = {
                id,
                name: data.name,
                species: data.species,
                origin: data.origin,
                image: data.image,
                gender: data.gender,
            }
            return res.status(200).json(character)
        }
        return res.status(404).send('No hay personajes con ese ID')
    }
    catch (error){
        return res.status(500).send(error.message);
    }
}



module.exports = {
    getCharById
};