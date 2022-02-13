const getListClasse = require('../models/classe.model.js');

exports.getListClasse = (req, res) => {


    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty !"
        });

    }
    getListClasse(req, (err, data) => {

        if (err) {
            res.status(500).send({
                message: err.kind || "Classe not found."
            });
        } else {
            res.send(data);
        }

    });








}