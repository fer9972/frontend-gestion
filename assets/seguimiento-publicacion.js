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

      publicacion: {
        id: "",
        titulo: "",
        autor: "",
        facultad: "",
        tipo_publicacion: "",
        area: "",
        acciones: true
      },

      //En este arreglo se meten todas las publicaciones
      lista_publicaciones: [
        {
          id: "001",
          titulo: "Geometría",
          facultad: "Ciencias básicas",
          tipo_publicacion: "Cientifica",
          area: "Ciencias básicas",
          acciones: true
        }
      ],

      lista_publicaciones: [
        {
          id: "1",
          titulo: "Geometría",
          autor: "Jason",
          facultad: "Ciencias básicas",
          tipo_publicacion: "Cientifica",
          area: "Ciencias básicas",
          acciones: true
        }
      ],
      fields: [
        {
            key: 'id',
            label: 'Código Publicación',
        },
        {
            key: 'titulo',
            label: 'Titulo',
        },
        {
            key: 'acciones',
            class: 'center'

        }
      
    ],
       show: true
    }

  },
  //aca apenas se carga la pagina se llama el metodo para listar los seguimientos
  mounted() {
    this.cargar_publicaciones()
  },
  methods: {

    //metodo para guardar el id de la publicacion seleccionada para evaluar
    guardarIdPublicacion({ item }) {
      let id = item.id;
      console.log(id);
      localStorage.setItem('id_publicacion_evaluar', id);
    },

    //cargar todos los registros de la BD y listarlos
    cargar_publicaciones() {
      let url = config.url_api;
      let direccion = url + "info-publicacion/";
      axios.get(direccion).then(respuesta => {
        let data = respuesta.data
        if (data.ok) {
          this.lista_publicaciones = data.info
        }
        this.mensaje = data.mensaje;
        console.log(respuesta);
      }).catch(error => {
        console.log(this.mensaje = "Ha ocurrido un error")
      });

    },

    //metodo para traer un Jso con la informacion de una obra 
    generarJsonDeSeguimiento({ item }) {
      let url = config.url_api;
      let direccion = url + "info-publicacion/obtener/" + item.id;
      axios.get(direccion).then(respuesta => {
        let data = respuesta.data
        if (data.ok) {
          let s = data.info;
          console.log(s);
          return s;
        }
        this.mensaje = data.mensaje;
        console.log(respuesta);
      }).catch(error => {
        console.log(this.mensaje = "Ha ocurrido un error")
      });
    },

    //eliminar publicacion de la BD
    eliminarPublicacion({ item }) {
      let i = item.id;

      let url = config.url_api;
      let direccion = url + "info-publicacion/" + i;
      axios
        .delete(direccion, i)
        .then((response) => {
          console.log("publicacion eliminada correctamente");
          alert("Publicacion eliminada correctamente");
          this.cargar();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
};