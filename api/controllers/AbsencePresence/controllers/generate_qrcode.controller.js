const GenereateQRCODE = require('../models/generate_qrcode.model');

exports.create = (req, res) => {


    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty !"
        });

    }


    GenereateQRCODE.create((err, id_seance) => {
        if (err) {
            res.status(500).send({
                message: err.kind || "Data Not Found"
            });
        } else {
             GenereateQRCODE.dataForQrCode(req.body.id_enseignant, id_seance, (err, resultDataForQrCode) => {
                GenereateQRCODE.updateEnseignement(resultDataForQrCode, req.body.id_enseignant, id_seance, (err, resultUpdateEnseignement) => {
                    GenereateQRCODE.insertPresenceEnseignant(resultDataForQrCode, (err, resultInsertPresenceEnseignant) => {
                        GenereateQRCODE.getDateSemestre(resultDataForQrCode[0].id_matiere, (err, resultDataSemestre) => {
                            GenereateQRCODE.getListEtudiantCurrentClasse(resultDataForQrCode[0].id_classe, resultDataSemestre, (err, listCurrentClasse) => {
                                for (let index = 0; index < listCurrentClasse.length; index++) {
                                    GenereateQRCODE.checkEtudiant(listCurrentClasse[index].id_etudiant, id_seance, (err, resultVerif) => {
                                        if (resultVerif === true) {
                                            GenereateQRCODE.updatePresenceEtudiant(listCurrentClasse[index], resultDataForQrCode, id_seance, (err, resultInsert) => {
                                            });
                                        }
                                    });
                                }
                                res.send({ "qr_code": resultUpdateEnseignement });
                            });
                        })
                    })
                })
            });
        }

    });








}