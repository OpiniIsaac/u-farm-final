const express = require('express')
const router = express.Router()

const UploadProducts = require('../models/upload')

router.get('/uploadPage',(req,res)=>{
    res.render('upload')
})

router.post('/uploadProducts',async(req,res)=>{
    try{
        const items = await new UploadProducts(req.body)
        await items.save()
        res.redirect('/uploadPage')
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router