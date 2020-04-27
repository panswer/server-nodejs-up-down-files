// Variables

let file = document.getElementById("archivo");
let button = document.getElementById("boton");
let server = 'http://localhost:3000';

/* 
    Configuracion de axios por defecto
*/
// URL de servidor para realizar peticion
axios.defaults.baseURL = server;

// Funciones
const EnviarArchivo = (file) => {

    let datos = new FormData()
    datos.append('file', file.files[0]);

    console.log(file.data);
    axios({
            method: 'post',
            url: `/file/up`,
            data: datos,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((result) => {
            console.log(result.response);
        }).catch((err) => {
            console.log(err.response.data.err.message);
        });
}

// Escuchas
button.addEventListener("click", e => {
    e.preventDefault();
    EnviarArchivo(file);
});