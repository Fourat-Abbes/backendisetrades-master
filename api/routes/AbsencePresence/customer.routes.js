const express = require("express");
const app = express.Router();
const { checkToken } = require("../../middleware/token_validation")
    const genereate_QrCode = require('../../controllers/AbsencePresence/controllers/generate_qrcode.controller.js');
    const getListMatiere = require('../../controllers/AbsencePresence/controllers/matiere.controller.js');
    const getListClasse = require('../../controllers/AbsencePresence/controllers/classe.controller.js');
    const getListDepartement = require('../../controllers/AbsencePresence/controllers/departement.controller.js');
    const getListSemestre = require('../../controllers/AbsencePresence/controllers/semestre.controller.js');
    const etudiant = require('../../controllers/AbsencePresence/controllers/etudiant.controller.js'); 
    const prof=require('../../controllers/AbsencePresence/controllers/prof.controller.js');

   

    app.post("/generate_QRCode",checkToken,genereate_QrCode.create);
    app.post("/getListClasse",checkToken,getListClasse.getListClasse);
    app.post("/getListMatiere",checkToken,getListMatiere.getListMatiere);
    app.post("/getListDepartement",checkToken,getListDepartement.getListDepartement);
    app.post("/getListSemestre",checkToken,getListSemestre.getListSemestre);
    app.post("/getListEtudiant",checkToken,etudiant.getListEtudiant);

    app.post("/checkEtudiant",etudiant.checkUser);
    app.post("/listMatiereEtudiant",etudiant.getListMatiere);
    app.post("/listDetaillMatiereEtudiant",etudiant.getListDetaillMatiere);
    app.post("/scanneQrCode",etudiant.scanneQrCode);
    app.post("/checkGPS",etudiant.checkGPS);

    app.post("/dataProf",checkToken,prof.getDataAbsence);
 
    module.exports = app;

