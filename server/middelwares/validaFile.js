const VerificaFileExistente = (req, res, next) => {

    if (req.files) {
        if (req.files.file) {
            next();
        } else {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'file no existe en files'
                }
            });
        }
    } else {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'files no existe'
            }
        });
    }
}

module.exports = {
    VerificaFileExistente
}