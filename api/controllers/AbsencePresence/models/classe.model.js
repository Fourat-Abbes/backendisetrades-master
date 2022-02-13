const sql=require('../../../../db_connection');





const getListClasse=(data,result)=>{

    sql.query(`select id_classe,libelle from classe`,(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }

        if(res!==undefined){
            result(null,res);
            return;
        }
        result({kind:"list Classe empty"},null);
    });
 
};




module.exports=getListClasse;