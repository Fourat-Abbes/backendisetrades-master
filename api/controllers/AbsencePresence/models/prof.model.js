const sql=require('../../../../db_connection');


const getDataAbsence = (data,result) => {
        sql.query(`select DISTINCT(pe.time), e.id_etudiant,u.nom,u.prenom
        from user u,etudiant e ,
        presence_etudiant pe ,enseignement en ,
        classe c,matiere m ,semestre se 
        WHERE ${data.body.id_departement}= e.id_departement 
        and e.id_user= u.id_user and e.id_etudiant= pe.id_etudiant
        and  id_etat_presence_etd = 2
        and pe.id_enseignement= en.id_enseignement 
        and en.id_classe= ${data.body.id_classe} and en.id_matiere= m.id_matiere
        and m.id_matiere = ${data.body.id_matiere}
        and m.id_semestre= ${data.body.id_semestre}
        `, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res != undefined) {
            result(null, res);
            return;
        }
    });
}

module.exports={
    getDataAbsence
}