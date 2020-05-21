import axios from "axios";
import config from "./config/index";


export default {
  asyncData({ query }) {
    let token = query.token; // Capturamos el token que llega por url
    let token_url = token ? true : false; // Me indica si hay un token en url o no
    return { token, token_url };
  },
  mounted() {
    if (this.token_url == true) {
      // Ingresa a este código si hay un token en url.

      //Asigno la información del token al localstorage
      localStorage.setItem("token", this.token);

      //this.$router.push("PONER AQUÍ LA URL DE LA PÁGINA CUANDO SE REDIRECCION AL HACER LOGIN EXITOSO.");
      // Por ejemplo
      //this.$router.push("info-publicacion");


    }
  },

  data() {
    return {
      title: "INICIAR SESIÓN",
      autor: {
        documento: "",
        clave: "",
      },
      mensaje: null,
      reglas: [(v) => !!v || "El campo es obligatorio."],
    };
  },
  methods: {
    //metodo para autentificar la persona que se esta logueando para darle acceso y validar el rol
    login() {
      let url = config.url_api;
      let direccion = url + "login";

      axios.post(direccion, {
        documento: this.autor.documento,
        clave: this.autor.clave
      }).then(res => {

        if (res) {
          this.agregarInfoLS({ idautor: this.autor.documento, token: res.data['info'], nombre: res.data['nombre'] })
          localStorage.setItem('documento', this.autor.documento);
        }
        let id_listar = localStorage.getItem("documento");
        let rol = res.data.rol
        let nombre = res.data.nombre
        localStorage.setItem('token', res.data.info);
        

        //verificamos el rol de la persona que se esta loguenando para redireccionarla a la pagina
        if (rol == 6) {
          this.$router.push("info-publicacion");
          alert("Bienvenido " + nombre + " estamos felices de que decidas publicar con nosotros")
        } else if (rol == 2) {
          this.$router.push("seguimiento-publicacion");
          alert("Bienvenido " + nombre + " a nuestro sistema para darle seguimiento a una obra")
        } else if (rol == 1){
          this.$router.push("registrar-autor");
          alert("Bienvenido " + nombre + " ahora puedes registrar un autor nuevo para que publique con nosotros")
        }
        let mensaje = res.data.mensaje
      }).catch(error => {
        console.log(mensaje = "Ha ocurrido un error: " + error)
      })
    },
    agregarInfoLS(item) {
      localStorage.setItem('Autor', JSON.stringify(item));
    }
  }
}
