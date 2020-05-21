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
    TIENEQUEFUNCIONAR({item}){
      
      let datos = this.generarJsonDeSeguimiento({item});

      let url = config.url_api;
      let direccion = url + "pdf/6181";
      //let datos = {
       // nombre: "Santiago",
       // people: ["Yehuda Katz", "Alan Johnson", "Charles Jolley"],
      //};
      axios({
        method:'get',
        url:direccion,
        responseType:'arraybuffer'
      })
      .then(function(response) {
          let blob = new Blob([response.data], { type:   'application/pdf' } );
          let link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'Report.pdf';
          link.click();
      });
    },
    TIENEQUEFUNCIONAR1({item}){
      let datos = this.generarJsonDeSeguimiento({item});
      let id = datos[0].id;
      let titulo = datos[0].titulo;

      console.log("id obra: "+ id + "titulo: "+titulo);

      let url = config.url_api;
      let direccion = url+"pdf/"+id+"/"+titulo;

      axios.get(direccion).then(respuesta => {
        let data = respuesta.data
        console.log("Respuesta:" + respuesta);
        console.log("DATA:" + data);
        if (data.ok) {
          let s = data.info;
          console.log(s);
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
          console.log(s[0]);
          return s[0];

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