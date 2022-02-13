const getListSemestre = require('../models/semestre.model.js');

exports.getListSemestre = (req, res) => {


    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty !"
        });

    }

    getListSemestre(req, (err, data) => {

        if (err) {
            res.status(500).send({
                message: err.kind || "Semestre not found."
            });
        } else {
            res.send(data);
        }

    });








}