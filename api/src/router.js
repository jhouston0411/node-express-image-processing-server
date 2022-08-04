const {Router} = require('express');
const router = Router();
const multer = require('multer');

 const filename = (request, file, callback) => {
    callback(null, file.originalname);
}

const storage = multer.diskStorage({
    destination: 'api/uploads/',
    filename,
})

const fileFilter = (request, file, callback) => {
    if(file.mimetype !== 'image/png') {
        request.fileValidationError = 'Wrong file type';
        callback(null, false, new Error('Wrong file type'));
    }else{
        callback(null, true);
    }
}

 const upload = multer({
    fileFilter,
    storage,
 })
 
module.exports = router