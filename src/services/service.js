const universitieModel = require('../DB/models/universitiesModel')

const saveFromApi = async(universities,country) => {
    try{
        await universitieModel.deleteMany({country,fromApi:true}).exec()
        return universitieModel.insertMany(universities).exec()
    }catch(err){
        throw new Error(err);
    }
}

const getAllUniversities = async(country="",page) => {
    try {
        const query = {} 
        if (country != ""){
            query.country = country
        }
        //console.log(page)
        return universitieModel.paginate(query,{select:"_id name country state_province",page:page,limit:20})
    } catch (err) {
        throw new Error(err)
    }
}

const findById = async(_id)=>{
    try {
        return universitieModel.findOne({_id:_id})
    } catch (err) {
        throw new Error(err)
    }
}

const addUniversitie = async(obj)=>{
    try {
        obj.fromApi = false
        const universite = await universitieModel.find({country:obj.country,state_province:obj.state_province,name:obj.name})
        if(universite.length>0){
            throw new Error("Universidade já cadastrada")
        }else{
            return universitieModel(obj).save()
        }
    } catch (err) {
        throw new Error(err)
    }
}

const updateUniversitie = async(_id,obj) =>{
    try {
        obj.fromApi = false
        const universite = await universitieModel.findOneAndUpdate({_id:_id},obj,{new:true})
        return universite
    } catch (err) {
        throw new Error(err)
    }
}

const deleteUniversitie = async(_id)=>{
    try {
        console.log(_id)
        return universitieModel.deleteOne({_id:_id})
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    saveFromApi,
    getAllUniversities,
    findById,
    addUniversitie,
    updateUniversitie,
    deleteUniversitie
}