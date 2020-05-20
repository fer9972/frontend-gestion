<template>
  <b-card
    title="Seguimiento de publicacion"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 50rem;"
    class="mb-2"
    align-self="center"
    v-show="true"
  >
    <b-card-body>

      <b-form action="javascript:void(0)" @submit="crearSeguimiento()">
        <b-form-group id="in-id" label="Código de seguimiento:" label-for="id">
          <b-form-input
            id="id"
            v-model="seg.id"
            placeholder="Ingrese el código del seguimiento"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="in-fecha" label="Fecha:" label-for="fecha">
          <b-form-input
            id="fecha"
            v-model="seg.fecha"
            placeholder="Ingrese la fecha DD/MM/AAAA"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="in-comentario" label="Comentario:" label-for="comentario">
          <b-form-input
            id="comentario"
            v-model="seg.comentario"
            placeholder="Comentarios de la obra"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="in-archivo" label="Archivo:" label-for="archivo">
          <b-form-input
            id="archivo"
            v-model="seg.archivo"
            placeholder="Adjuntar archivo"
          ></b-form-input>
        </b-form-group>

        <b-form-group label= "Concepto:">
          <b-form-select v-model="seg.estado" :options="estado"></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="danger" v-if="!enEdicion">Registrar</b-button>
        <b-button @click="actualizarSeguimientoBD()" variant="danger" v-else>Actualizar datos</b-button>
        <b-table responsive hover :items="lista_seguimientos" :fields="fields"  head-variant="dark"
        class="border border-danger text-center">
          <template v-slot:cell(acciones)="row">
            <div>
              <b-button size="sm" @click="cargarSeguimientoEditar(row)" class="mr-2">Modificar</b-button>
              <b-button size="sm" @click="eliminarSeguimiento(row)" class="mr-2">Eliminar</b-button>
            </div>
          </template>
        </b-table>
      </b-form>
    </b-card-body>
  </b-card>
</template>

<script src="@/assets/seguimiento.js" />