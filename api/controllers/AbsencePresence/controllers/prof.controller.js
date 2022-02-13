const Prof=require('../models/prof.model.js');

const getDataAbsence=(req,res)=>{
    Prof.getDataAbsence(req,(err,resultDataAbsence)=>{
            if(err){
                res.status(500).send({"resultDataAbsence":"Data Not Found"})
            }else{
                res.send({"resultDataAbsence":resultDataAbsence});
            }
    });
}

module.exports={
    getDataAbsence
}