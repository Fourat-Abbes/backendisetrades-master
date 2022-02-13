const sql=require('../../../../db_connection');

const getListDepartement=(data,result)=>{

    sql.query(`select id_departement,code,libelle from departement`,(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }

        if(res!==undefined){
            result(null,res);
            return;
        }
        result({kind:"list Departement empty"},null);
    });
 
};




module.exports=getListDepartement;