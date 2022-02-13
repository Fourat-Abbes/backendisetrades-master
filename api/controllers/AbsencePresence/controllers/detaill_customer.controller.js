const DetaillCustomer = require('../models/detaill_customers.model');

exports.create = (req, res) => {
  
 
        const customer=new DetaillCustomer({
            description:req.body.description,
            id_customers:req.body.id_customers,
            
        });

        DetaillCustomer.create(customer,(err,data)=>{
        
            if(err){
                res.status(500).send({message:errr.message ||"Soem error occurred while creating the Customer."});
            }else{
                console.log("display data in line 19 ",data);
                res.send("success insert");
            }
        
        });

    
  





}