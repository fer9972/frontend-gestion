<template>
  <b-card
    title="Propuestas De Publicación"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 50rem;"
    class="mb-2"
    align-self="center"
    v-show="true"
  >
    <b-card-body>
      
      <b-table responsive hover :items="lista_publicaciones" :fields="fields" head-variant="dark">
            <template v-slot:cell(acciones)="row">
              <b-button size="sm" href="seguimiento" @click="guardarIdPublicacion(row)" class="mr-2">Evaluar</b-button>
              <b-button size="sm" @click="TIENEQUEFUNCIONAR()" class="mr-2">Ver pdf</b-button>
            </template>
      </b-table>

      
    </b-card-body>
  </b-card>
</template>

<script src="@/assets/seguimiento-publicacion.js" />
