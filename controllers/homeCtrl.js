const home = (req,res) => {
    res.status(200).send('Welcome to ToDos App');
}

const health = (req,res) => {
    res.json({health : "UP"});
    res.status(200).send();
}

module.exports = {
    home,
    health,
}