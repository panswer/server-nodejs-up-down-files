const path = require('path');
const fs = require('fs');

const VerificaCarpeta = () => {
    let rutaFiles = path.resolve(__dirname, '../files');
    if (!fs.existsSync(rutaFiles)) {
        fs.mkdirSync(rutaFiles);
        console.log(`=>Carpeta generada<=`.green);
    }
}

module.exports = {
    VerificaCarpeta
}