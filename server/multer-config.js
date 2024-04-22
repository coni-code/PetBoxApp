const multer = require('multer');
const path = require('path');

const MIMETYPE = {
    'image/png': 'png',
    'image/jpg': 'jpg',

}
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(__dirname + '/imgs/profile/'));
    },
    filename: (req, file, cb) =>{
        const filename = file.originalname.split('.');
        cb(null, filename[0] + "-" + Date.now()+"."+ MIMETYPE[file.mimetype]);
    },
});
const upload = multer({storage: storage});

module.exports.uploadProfile = upload;
