const {IndustryDB} = require('../database/db');
const mongodb = require('mongodb');


async function add({name,industry,website,contact,email }){
    const db = await IndustryDB();
    const Industrycollection = db.collection("company");
    try{
        
        await Industrycollection.insertOne({name,industry,website,contact,email});
        return 'Added'
    }
    catch(err){
        console.log(err)
        return "Error"
    }
}

async function find(id){
    const db = await IndustryDB();
    const Industrycollection = db.collection("company");
    try{
        const result =  await Industrycollection.find({_id: new mongodb.ObjectId(String(id))}).toArray();
        
        return result
    }
    catch(err){
        console.log(err)
        return "Error"
    }
}

async function get(){
    const db = await IndustryDB();
    const Industrycollection = db.collection("company");
    try{
        const result =  await Industrycollection.find({}).project({industry: 1, _id: 1})
        .toArray();
        return result
    }
    catch(err){
        console.log(err)
        return "Error"
    }
}

module.exports={add,find,get}