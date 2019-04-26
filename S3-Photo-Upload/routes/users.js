const express = require('express');
const router = express.Router();
const fs = require('fs');
const upload = require('../services/file-upload');
const AWS = require('aws-sdk');

const singleImage = upload.single('image');

AWS.config.update({
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-east-2'
});

const s3 = new AWS.S3();


router.post('/image-upload', (req,res) =>{
    singleImage(req,res, function(err){
        if(err){
            return res.status(422).send({errors:[{title:'File upload error', detail:err.message}]});
        }
        return res.json({'imageUrl':req.file.location});
    });
});

router.get('/froms3', (req,res) =>{

    var params = {
      Bucket: 'mybeaconimg',
      Key: '1539889947199'
    };
    s3.getObject(params, function(err, data) {
       if(err){
           console.log('error ',err);
       }else{
           console.log('data ' ,data);
               res.status(200).json({data});
       }
    });
});

module.exports = router;
