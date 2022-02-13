const sql=require('../../../../db_connection');



const getListMatiere=(data,result)=>{

    sql.query(`select id_matiere,libelle from matiere`,(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }

        if(res!==undefined){
            result(null,res);
            return;
        }
        result({kind:"list Matiere empty"},null);
    });
 
};




module.exports=getListMatiere;