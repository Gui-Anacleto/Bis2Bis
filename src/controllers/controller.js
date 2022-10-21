const axios = require('axios');
const service = require('../services/service')

module.exports={
    async findUniversities(req, res){
        try{
            const array = [
                "argentina",
                "brazil",
                "chile",
                "colombia",
                "paraguay",
                "peru",
                "suriname",
                "uruguay"
                ]
            
                array.map(async(country)=>{

                    const {data:response} = await axios.get('http://universities.hipolabs.com/search?country='+country)
            
                    await service.saveFromApi(response,country)
                })

                res.json({msg:"Universidades obtidas"})

            //const{country} = req.params;

            //console.log(country);

            
        }catch(err){
            res.json({msg:"Universidade não encontrada " + err.message})
        }
        
        
    },

    async getAllUniversities(req, res){
        try {
            const data = await service.getAllUniversities(req.query.country || "", Number(req.query.page) || 1)
            res.json({msg:"Universidades obtidas ",data})
            //console.log(data)
            //console.log(req.query.country)
        } catch (err) {
            res.json({msg:"Erro ao buscar todas as universidade " +err.message})
        }
    },

    async findById(req,res){
        try {
            const data = await service.findById(req.params.id)
            res.json({msg: "Univerdade encontrada", data})
        } catch (err) {
            res.json({msg:"Erro ao tentar encontrar as universidades " +err.message})
        }
    },

    async addUniversitie(req,res){
        try {
            const body = req.body
            const data = await service.addUniversitie(body)
            res.json({msg: "Univerdade salva", data})
        } catch (err) {
            res.json({msg:"Erro ao tentar cadastrar a universidade " +err.message})
        }
    },
    
    async alterUniversitie(req,res){
        try {
            const data = await service.updateUniversitie(req.params.id,req.body)
            res.json({msg: "Univerdade encontrada", data})
        } catch (err) {
            res.json({msg:"Erro ao tentar encontrar a universidade " +err.message})
        }
    },

    async deleteUniversitie(req,res){
        try {
            const data = await service.deleteUniversitie(req.params.id)
            res.json({msg: "Univerdade excluida", data})
        } catch (err) {
            res.json({msg:"Erro ao tentar excluir a universidade " +err.message})
        }
    }
}

