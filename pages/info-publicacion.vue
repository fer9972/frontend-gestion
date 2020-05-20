<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-card
            title="Información de la publicación"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 50rem;"
            class="mb-2"
            v-show="true"
          >
            <b-card-body>
              <b-form action="javascript:void(0)" @submit="crearPublicacion()">
                <b-form-group id="input-group-2" label="Código:" label-for="id">
                  <b-form-input
                    id="id"
                    v-model="publicacion.id"
                    required
                    placeholder="Ingrese el código de su obra"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-1" label="Título:" label-for="titulo">
                  <b-form-input
                    id="titulo"
                    v-model="publicacion.titulo"
                    required
                    placeholder="Ingrese el título de la obra"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-3"
                  label="Facultad a la cual se inscribe:"
                  label-for="facultad"
                >
                  <b-form-input
                    id="facultad"
                    v-model="publicacion.facultad"
                    required
                    placeholder="facultad"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-4"
                  label="Tipo de publicación:"
                  label-for="tipo_publicacion"
                >
                  <b-form-input
                    id="tipo_publicacion"
                    v-model="publicacion.tipo_publicacion"
                    required
                    placeholder="Ingrese el tipo de publicación"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-5" label="Área a la que pertenece:" label-for="area">
                  <b-form-input id="area" v-model="publicacion.area" required placeholder="Área"></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-6"
                  label="Reseña de autores:"
                  label-for="reseña_autores"
                >
                  <b-form-input
                    id="reseña_autores"
                    v-model="publicacion.reseña_autores"
                    required
                    placeholder="Reseña de autores"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-7"
                  label="Resumen de la obra:"
                  label-for="resumen_obra"
                >
                  <b-form-input
                    id="resumen_obra"
                    v-model="publicacion.resumen_obra"
                    required
                    type="text"
                    placeholder="Aquí se adjunta un pdf con el resumen de la obra"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-8"
                  label="Aspectos novedosos:"
                  label-for="aspectos_novedosos"
                >
                  <b-form-input
                    id="aspectos_novedosos"
                    v-model="publicacion.aspectos_novedosos"
                    required
                    type="text"
                    placeholder="aspectos novedosos"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-9"
                  label="Contribución al estado actual del área:"
                  label-for="contribucion_area"
                >
                  <b-form-input
                    id="contribucion_area"
                    v-model="publicacion.contribucion_area"
                    required
                    type="text"
                    placeholder="Contribución al estado actual del área"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-10"
                  label="Público objetivo:"
                  label-for="publico_objetivo"
                >
                  <b-form-input
                    id="publico_objetivo"
                    v-model="publicacion.publico_objetivo"
                    required
                    placeholder="Público objetivo"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-11"
                  label="Forma en que se ajusta a la misión de la UdeM:"
                  label-for="ajusta_mision_udem"
                >
                  <b-form-input
                    id="ajusta_mision_udem"
                    v-model="publicacion.ajusta_mision_udem"
                    required
                    type="text"
                    placeholder="Forma en que se ajusta a la misión de la udem"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-12"
                  label="Datos del proyecto al que se asocia:"
                  label-for="proyecto_asociado"
                >
                  <b-form-input
                    id="proyecto_asociado"
                    v-model="publicacion.proyecto_asociado"
                    required
                    type="text"
                    placeholder="Datos del proyecto al que se asocia"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-13"
                  label="Observaciones finales:"
                  label-for="observaciones_finales"
                >
                  <b-form-input
                    id="observaciones_finales"
                    v-model="publicacion.observaciones_finales"
                    required
                    type="text"
                    placeholder="Observaciones finales"
                  ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="danger" v-if="!enEdicion">Registrar</b-button>
                <b-button @click="actualizarPublicacionBD()" variant="danger" v-else>Actualizar datos</b-button>
              </b-form>
              <!--
              <b-card class="mt-3" header="Mostrar datos">
                <pre class="m-0">{{ form }}</pre>
              </b-card>
              -->
              <b-table responsive hover :items="lista_publicaciones" :fields="fields" head-variant="dark">
              </b-table>

              <b-form action="javascript:void(0)" @submit="cargarUnaPublicacion()">
                <b-form-group
                  id="in-id_publicacion_a_cargar"
                  label="id_publicacion_a_cargar"
                  label-for="id_publicacion_a_cargar"
                >
                  <b-form-input
                    id="id_publicacion_a_cargar"
                    v-model="id_publicacion_a_cargar"
                    required
                    placeholder="id de publicacion a obtener"
                  ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Generar PDF</b-button>
                <b-button type="submit" href = "http://localhost:3000" variant="primary">Salir</b-button>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script src="@/assets/info-publicacion.js"/>
