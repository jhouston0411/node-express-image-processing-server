const {Router} = require('express');
const router = Router();

const filename(request, file, callback){
    callback(null, file.originalname)
}


module.exports = router