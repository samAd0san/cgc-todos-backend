const Product = require('../model/todosModel');

const post = payload => {
    const product = new Product(payload);
    return product.save();
};

// Filtering rows via fields
const getFilterExp = (search) => {
    return {
        status: new RegExp(search, 'i')
    };
};

const getCount = (status) => {
    const filter = getFilterExp(status)
    return Product.countDocuments(filter);
};

const get = (options) => {
    const {page,size,status} = options;
    
    let pageToSkip = (page - 1) * size;
    const filter = getFilterExp(status);

    return Product
        .find(filter,{__v : 0})
        .skip(pageToSkip)
        .limit(size)
};

const getById = id => {
    return Product.findById(id,{__v : 0})
};

const remove = id => {
    return Product.deleteOne({_id : id});
};

const put = (id,payload) => {
    return Product.updateOne({_id : id},payload);
};

const patch = (id,payload) => {
    return Product.updateOne({_id : id},{$set : payload});
};

module.exports = {
    post,
    get,
    getById,
    getCount,
    remove,
    put,
    patch,
}
