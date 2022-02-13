const getListDepartement = require('../models/department.model.js');

exports.getListDepartement = (req, res) => {


    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty !"
        });

    }

    getListDepartement(req, (err, data) => {

        if (err) {
            res.status(500).send({
                message: err.kind || "Departement not found."
            });
        } else {
            res.send(data);
        }

    });








}