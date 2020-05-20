/**
 * Aquì se encuentran los metodos para el crud de los autores
 */
const axios = require('axios');
import config from "./config/index";
export default {
    data() {
        return {
            enEdicion: false,
            
            //se guardan todos los autores nuevos que se registran 
            autor: {
                id: "",
                nombre: "",
                apellidos: "",
                edad: "",
                correo: "",
                ciudad: "",
                ocupacion: "",
                clave: "",
                rol: 6,
                acciones: true
            },
            //se inicializa el array autores para luego guardar todos los seguimientos ahí
            lista_autores: [
                {
                id: "100",
                nombre: "asd",
                apellidos: "asd",
                edad: "",
                correo: "asd@gmail.com",
                ciudad: "asd",
                ocupacion: "asd",
                clave: "asd",
                rol: 6,
                acciones: true
                }
            ],
             show: true
            
        }

    },
    methods: {
        guardarAutor() {
            let url = config.url_api;
            let direccion = url+"registro-autor/";
            //let direccion = "http://localhost:3001/registro-autor";
            let token = localStorage.getItem("token");
            
            console.log(this.autor)
            axios
                .post(direccion, this.autor, {headers: {token}})
                .then((response) => {
                    console.log(this.autor) 
                console.log("Autor agregado correctamente");
                console.log(response);

                })
                .catch((error) => {
                console.log(error);
                });
                this.autor = {
                    id: "",
                    nombre: "",
                    apellidos: "",
                    edad: "",
                    correo: "",
                    ciudad: "",
                    ocupacion: "",
                    clave: "",
                    rol: 6,
                    acciones: true
                  };

        },
    }

};