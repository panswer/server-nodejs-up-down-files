const path = require('path');
const fs = require('fs');

const SubirArchivo = (req, res) => {
    let ruta = path.resolve(__dirname, '../files');

    if (fs.existsSync(ruta)) {
        let files = req.files.file;
        let nameFile = `archivo.${files.name.split('.')[files.name.split('.').length-1]}`;

        process.env.NAME_FILE = nameFile;

        let rutaFile = `${ruta}/${nameFile}`;

        if (fs.existsSync(rutaFile)) {
            fs.unlinkSync(rutaFile);
        }

        files.mv(`${ruta}/${nameFile}`, err => {
            if (err) {
                return res.status(400).json({
                    ok: false
                });
            }

            res.json({
                ok: true,
                message: 'SUCCESS'
            });
        });

    } else {
        console.log(`=>${"ERROR".red}: ruta ${ruta.red} no existe`);
        res.status(500).json({
            ok: false,
            err: {
                message: "Error en subida de archivo"
            }
        });
    }
}

module.exports = {
    SubirArchivo
}