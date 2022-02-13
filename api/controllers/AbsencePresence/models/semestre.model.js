const sql=require('../../../../db_connection');

const getListSemestre=(data,result)=>{

    sql.query(`select id_semestre,date_debut_annee_univ from semestre`,(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }

        if(res!==undefined){
            result(null,res);
            return;
        }
        result({kind:"list Semestre empty"},null);
    });
 
};




module.exports=getListSemestre;