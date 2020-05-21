import { ToastPlugin } from 'bootstrap-vue';
import config from "./config/index";
/**
 * Aquì se encuentran los metodos para el crud de los seguimientos
 */
const axios = require('axios');
export default {
    data() {
        return {
            enEdicion: false,
            //se guardan todos los seguimientos nuevos que se ingresan 
            seg: {
                id_propuesta: "",
                tarea: "",
                id: "",
                fecha: "",
                comentario: "",
                estado: null,
                archivo: "",
                acciones: true
            },
            //se inicializa el array seguimientos para luego guardar todos los seguimientos ahi
            lista_seguimientos: [
                {
                    id: "1",
                    fecha: "04/03/2020",
                    comentario: "Buen trabajo en general",
                    estado: "rechazado",
                    id_propuesta: "1",
                    acciones: true
                },
                {
                    id: "",
                    fecha: "04/03/2020",
                    comentario: "Hay que realizar correcciones ortográficas",
                    estado: "aprobado",
                    id_propuesta: "1",
                    acciones: true
                }
            ],

            fields: [
                {
                    key: 'id',
                    label: 'Código Seguimiento',
                },
                {
                    key: 'fecha',
                    label: 'Fecha',
                },
                {
                    key: 'comentario',
                    label: 'Comentario'

                },
                {
                    key: 'estado',
                    label: 'Estado'

                },
                {
                    key: 'id_propuesta',
                    label: 'Código Propuesta'

                },

                {
                    key: 'acciones',
                    class: 'center'

                }
              
            ],
            estado: [
                { value: "aprobado", text: "aprobado" },
                { value: "en proceso", text: "en proceso" },
                { value: "rechazado", text: "rechazado" }
            ]

            , show: true
        }

    },
    //aca apenas se carga la pagina se llama el metodo para listar los seguimientos
    mounted() {
        console.log(localStorage.getItem('id_publicacion_evaluar'));
        this.cargar(localStorage.getItem('id_publicacion_evaluar'));
    },
    methods: {

        //creamos los seguimientosy lo agregamos a la BD
        crearSeguimiento() {
            this.lista_seguimientos.push(this.seg);
            this.seg.id_propuesta = localStorage.getItem('id_publicacion_evaluar');

            let url = config.url_api;
            let direccion = url + "seguimiento-publicacion/";
            axios
                .post(direccion, this.seg)
                .then((response) => {
                    alert("El seguimiento se registró correctamente");
                    console.log(response);
                })
                .catch((error) => {
                    alert("El seguimiento no se pudo registrar");
                    console.log(error);
                });
            this.seg = {
                tarea: "",
                id: "",
                fecha: "",
                comentario: "",
                estado: null,
                archivo: "",
                acciones: true
            };

            //guardando en el localstorage
            localStorage.setItem('seguimientos', JSON.stringify(this.lista_seguimientos));

        },

        //cargar el seguimiento que quiere editar
        cargarSeguimientoEditar({ item }) {
            let editar = this.lista_seguimientos.find(seg => seg.id == item.id);
            this.enEdicion = true;
            this.seg = Object.assign({}, editar);
        },

        //editar un seguimiento especifico
        actualizarSeguimientoBD() {
            let id_Editar = this.seg.id;
            let url = config.url_api;
            let direccion = url + "seguimiento-publicacion/" + id_Editar;
            axios
                .put(direccion, this.seg)
                .then((response) => {
                    alert("El seguimiento se editó correctamente");
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                    alert("Lo sentimos, el seguimiento no se pudo editar correctamente");
                });

            this.seg = {
                id: "",
                fecha: "",
                comentario: "",
                id_propuesta: "",
                estado: null,
                archivo: "",
                acciones: true
            };
        },


        //eliminanos un seguimiento segun el id que se le pase por parametro
        eliminarSeguimiento({ item }) {
            let i = item.id;
            let url = config.url_api;
            let direccion = url + "seguimiento-publicacion/" + i;
            axios
                .delete(direccion, i)
                .then((response) => {
                    alert("El seguimiento se eliminó correctamente");
                    this.cargar();
                    console.log(response);
                })
                .catch((error) => {
                    alert("Lo sentimos, el seguimiento no se pudo borrar correctamente");
                    console.log(error);
                });
        },
        //carganmos los seguimientos asociados a la obra que se va a evaluar
        cargar(id) {
            let url = config.url_api;
            let direccion = url + "seguimiento-publicacion/" + id;
            axios.get(direccion).then(respuesta => {
                let data = respuesta.data;
                let lista = data.info;

                if (data.ok) {
                    this.lista_seguimientos = lista;
                }
                this.mensaje = data.mensaje;
                console.log(respuesta);
            }).catch(error => {
                console.log(this.mensaje = "Ha ocurrido un error")
            });

        },

        //metodo para guardar la lista de seguimientos en el local storage
        local() {
            var datosLocal = JSON.parse(localStorage.getItem('seguimientos'));
            var datosInfo = JSON.parse(localStorage.getItem('info-publicacion'));
            if (datosLocal === null) {
                this.lista_seguimientos = [];
            } else {
                this.lista_seguimientos = datosLocal;
            }
            //llenamos la lista de publicaciones con la informacion del local storage
            //para poder recorrerla y compararla con la lista de seguimientos
            if (datosInfo === null) {
                this.lista_publicaciones = [];
            } else {
                this.lista_publicaciones = datosInfo;
            }
        },
    }

};