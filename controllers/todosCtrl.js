const todosRepo = require('../repositories/todosRepo');

const post = async(req,res) => {
    const payload = req.body;
    try{
        if(!payload.status || !payload.title){
            res.status(400).send('Enter the mandatory fields');
            return;
        }
        console.log(payload);
        await todosRepo.post(payload);
        res.status(201).send('Created');

    }catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const get = async(req,res) => {
    try{
        const options = {
            page : req.params.page || 1,
            size : req.params.size || 10,
            status : req.query.status,
        }

        const rows = await todosRepo.getCount(options.status);
        const totalPages = Math.ceil(rows / options.size);


        const data = await todosRepo.get(options);
        const result = {
            data,
            rows,
            totalPages,
        }

        res.status(200).json(result);
    }catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const getById = async(req,res) => {
    const id = req.params.id;
    try{
        if(!id){res.status(404).send('Not Found'); return;}
        const data = await todosRepo.getById(id);
        res.status(200).json(data);
    }catch(err) {
        res.status(500).send('Internal Server Error');
    }
};

const remove = async(req,res) => {
    const id = req.params.id;

    try{
        if(!id){res.status(404).send('Not Found'); return;}
        await todosRepo.remove(id);
        res.status(204).send('No Content');
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
};

const put = async(req,res) => {
    const id = req.params.id;
    const payload = req.body;

    try{
        if(!payload.status || !payload.title || !payload.description){
            res.status(400).send('Bad Request');
            return;
        }
        await todosRepo.put(id,payload);
        res.status(204).send('No Content');
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
};

const patch = async(req,res) => {
    const id = req.params.id;
    const payload = req.body;

    await todosRepo.patch(id,payload);
    res.status(204).send('No Content');
};

module.exports = {
    post,
    get,
    getById,
    remove,
    put,
    patch,
}