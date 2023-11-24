const users = require('../utils/users')

const login = (req, res) => {
    const { email, password } = req.query;
    const userFound = users.find((user) => {
        return user.email === email && user.password === password
    })
    console.log(userFound);
    if(userFound) return res.status(200).json({"access": true})

    return res.status(404).json({"access" : false});
}


module.exports = {
    login
};