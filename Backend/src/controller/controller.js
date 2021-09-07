const UserService = require('../service/service')

async function add(req,res){
    const {name,industry,website,contact,email} = req.body;
    const result = await UserService.add({name,industry,website,contact,email});
    res.send({msg:result})
}
async function find(req,res){
    const id = req.query.id;
    // console.log(industry)
    const result = await UserService.find(id)
    res.send({msg: result });
}

async function get(req,res){
    const result = await UserService.get()
    res.send({msg:result})
}

module.exports = {add,find,get}