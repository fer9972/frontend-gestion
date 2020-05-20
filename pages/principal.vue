<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Gestion de publicación
      </h1>
      <h2 class="subtitle">
        modulo 1
      </h2>
      <div class="links">
        <a
          href="seguimiento-publicacion"
          target="_blank"
          class="button--green"
        >
          HACERLE SEGUIMIENTO A UNA PROPUESTA
        </a>
        <a
          href="info-publicacion"
          target="_blank"
          class="button--grey"
        >
         REGISTRAR UNA OBRA NUEVA
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
