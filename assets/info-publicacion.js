/**
 * Aquì se encuentran los metodos para el crud de la información de la publicación
 */
const axios = require('axios');
import config from "./config/index";
export default {
  data() {
    return {
      enEdicion: false,
      id_publicacion_a_cargar: 0,
      url:"",
      //en este json se almacena la información agregada de las publicaciones(obraas)
      publicacion: {
        id: "",
        titulo: "",
        id_autor: "",
        autor: "",
        facultad: "",
        tipo_publicacion: "",
        area: "",
        reseña_autores: "",
        resumen_obra: "",
        aspectos_novedosos: "",
        contribucion_area: "",
        publico_objetivo: "",
        ajusta_mision_udem: "",
        proyecto_asociado: "",
        observaciones_finales: "",
        acciones: true
      },

      fields: [
        {
            key: 'id',
            label: 'Código Propuesta',
        },
        {
            key: 'titulo',
            label: 'Título',
        },
        {
            key: 'facultad',
            label: 'Facultad'

        },
        {
            key: 'tipo_publicacion',
            label: 'Tipo de Publicacion'

        },
        {
            key: 'area',
            label: 'Área'

        },

        {
            key: 'acciones',
            class: 'center'

        }
      ],

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

      facultad: [
        { value: null, text: "Facultad", disabled: true },
        { value: "ciencias basicas", text: "ciencias basicas" },
        { value: "ingenieria", text: "ingenieria" },
        { value: "ciencias sociales", text: "ciencias sociales" },
        { value: "ciencias humanas", text: "ciencias sociales" }
      ],

      area: [
        { value: null, text: "Área", disabled: true },
        { value: "Matematicas", text: "Matemáticas" },
        { value: "Fisica", text: "Física" },
        { value: "Desarrollo web", text: "Desarrollo web" },
        { value: "derecho", text: "derecho" }
      ]
      , show: true
    }
  },
  //Para que llame  el metodo cargar y se listan las publicaciones que hay en la BD
  mounted() {
    //this.local()
    this.cargar()
  },


  methods: {
    //Para crear una nueva publicaciony agregarla a la BD
    crearPublicacion() {
      this.publicacion.id_autor = localStorage.getItem("documento")
      console.log(this.publicacion.id_autor)
      this.lista_publicaciones.push(this.publicacion);
      //localStorage.setItem('info-publicacion', JSON.stringify(this.lista_publicaciones));

      let url = config.url_api;
      let direccion = url + "info-publicacion/";
      console.log(direccion)
        axios
        .post(direccion, this.publicacion)
        .then((response) => {
          alert("la publicación se agrego correctamente");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert("Lo sentimos la publicación no se pudo agregar correctamente");
        });

      this.publicacion = {
        id: "",
        id_autor: "",
        titulo: "",
        facultad: "",
        tipo_publicacion: "",
        area: "",
        reseña_autores: "",
        resumen_obra: "",
        aspectos_novedosos: "",
        contribucion_area: "",
        publico_objetivo: "",
        ajusta_mision_udem: "",
        proyecto_asociado: "",
        observaciones_finales: "",
        acciones: true
      };

    },

    //cargar todos los registros de la BD y listarlos
    cargar() {
      let id_listar = localStorage.getItem("documento")
      let url = config.url_api;
      let direccion = url + "info-publicacion/" + id_listar;
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

    //cargar una publicacion para editarla 
    cargarPublicacionEditar({ item }) {
     let editar = this.lista_publicaciones.find(publicacion => publicacion.id == item.id);
      this.enEdicion = true;
      this.publicacion = Object.assign({}, editar);
    },

    //agregar los nuevos valores a la publicacion editada
    actualizarPublicacionBD() {
      let url = config.url_api;
      let id_Editar = this.publicacion.id;
      let direccion = url + "info-publicacion/" + id_Editar;
      console.log(this.id_editar)
      axios
        .put(direccion, this.publicacion)
        .then((response) => {
          alert("La publicación se editó correctamente");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert("Lo sentimos, la publicación no se pudo editar correctamente");
        });

      this.publicacion = {
        id: "",
        titulo: "",
        facultad: "",
        tipo_publicacion: "",
        area: "",
        reseña_autores: "",
        resumen_obra: "",
        aspectos_novedosos: "",
        contribucion_area: "",
        publico_objetivo: "",
        ajusta_mision_udem: "",
        proyecto_asociado: "",
        observaciones_finales: "",
        acciones: true
      };
    },


    //eliminar publicacion de la BD
    eliminarPublicacion({item}) {
      let i = item.id;

      let url = config.url_api;
      let direccion = url + "info-publicacion/" + i;
      axios
        .delete(direccion, i)
        .then((response) => {
          alert("Publicación eliminada correctamente");
          this.cargar();
          console.log(response);
        })
        .catch((error) => {
          alert("La publicación no se pudo eliminar correctamente");
          console.log(error);
        });
    },
    //Para cargar los datos del localstorage en nuestro arreglo de publicaciones
    local() {
      var datosLocal = JSON.parse(localStorage.getItem('info-publicacion'));
      if (datosLocal === null) {
        this.lista_publicaciones = [];
      } else {
        this.lista_publicaciones = datosLocal;
      }
    }
  }
};