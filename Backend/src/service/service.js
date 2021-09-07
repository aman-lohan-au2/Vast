const studentRepo = require('../repository/repo')

async function add(arr){
    const result = await studentRepo.add(arr);
    return result;
}

async function find(id){
    const result = await studentRepo.find(id);
    return result;
}

async function get(){
    const result = await studentRepo.get();
    return result;
}

module.exports ={add,find,get}