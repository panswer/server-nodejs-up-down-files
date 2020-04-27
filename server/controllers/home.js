const path = require('path');
const fs = require('fs');

const CargarIndex = (req, res) => {
    let ruta = path.resolve(__dirname, '../../public/index.html');

    if (fs.existsSync(ruta)) {
        res.sendFile(ruta, err => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'Error en carga'
                    }
                });
            }
        });
    } else {
        console.log(`=>${"ERROR".red}: ruta no encontrada ${ruta}`);
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Page not found'
            }
        });
    }
}

module.exports = {
    CargarIndex
}