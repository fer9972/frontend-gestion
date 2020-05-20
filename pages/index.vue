<template>
  <div class="body">
    <b-container>
      <b-col>
        <div class="container_login">
          <b-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Escudo_Universidad_de_Medellin.svg/240px-Escudo_Universidad_de_Medellin.svg.png"
            fluid
            alt="Fluid image"
            width="80px"
          ></b-img>
          <div class="title">{{ title }}</div>
        </div>

        <b-form action="javascript:void(0)">
          <b-form-group @submit.stop.prevent label="Documento" label-for="id">
            <b-form-input
              class="form-control"
              v-model="autor.documento"
              type="number"
              placeholder="Ingrese su documento de identidad"
              id="id"
              :rules="reglas"/>
          </b-form-group>

          <b-form-group @submit.stop.prevent label="Contraseña" label-for="password">
            <b-form-input
              class="form-control"
              type="password"
              v-model="autor.clave"
              placeholder="Ingrese su contraseña"
              id="password"
			  :rules="reglas"/>
          </b-form-group>

          <b-button @click="login()" type="submit" block variant="danger">Ingresar</b-button>

          <span class="red--text py-2">{{ mensaje }}</span>
          <div class="text">
            <br />
          </div>
        </b-form>
        <br />
      </b-col>
    </b-container>
  </div>
</template>

<script src="../assets/login.js" />
<style src="../css/index.css" />