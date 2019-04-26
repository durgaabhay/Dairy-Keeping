const AWS = require('aws-sdk');
const multer = require('multer')
const multerS3 = require('multer-s3')

const fileName = 'C:/Users/Durga Abayakumar/Desktop/Spring 2019/ITIS 6370/android-wallpaper.jpg';

AWS.config.update({
    accessKeyId: '',
    secretAccessKey: '',
    region: ''
});

const s3 = new AWS.S3();

const fileFilter = (req, file, cb) => {
    if(file.mimeType === 'image/jpeg' || file.mimeType === 'image/png'){
        console.log('filetype',file.mimeType);
        cd(null,true);
    }else{
        cb(new Error('Invalid Mime Type, only JPEG and PNG'),false);
    }
};

const upload = multer({
    storage: multerS3({
        s3,
        bucket: 'mybeaconimg',
        acl: 'public-read',
        metadata: function (req, fileName, cb) {
            cb(null, {fieldName: 'TESTING_METADATA'});
        },
        key: function (req, fileName, cb) {
            cb(null, Date.now().toString())
        }
    })
});

module.exports = upload;
