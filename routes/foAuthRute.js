const express = require('express');
const app = express();

const  FoSignUp = require('../models/foSignUp');
const router = require('./aoDashboardRouts');

router.post("/foSignup", async(req,res)=>{
    console.log(req.body)
    try{
        const user = new FoSignUp(req.body);
        let userName = await FoSignUp.findOne({username:req.body.username})
        if(userName){
            return res.send("this unique id already exists")
        }
        else{
            await FoSignUp.register(user,req.body.password,(error)=>{
                if(error){
                    throw error
                }
                res.redirect("/foAuth")
            })
        }
    
    }
    catch(error){
        res.status(400).send("sorry it seems there is trouble accessing this page")
        console.log(error)
    }
})


module.exports = router;