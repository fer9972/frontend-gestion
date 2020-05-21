<template>

    <b-card-body>
        <b-form action="javascript:void(0)" @submit="guardarAutor()">
  
            <b-form-group id="id" label="Cedula:" label-for="id">
                <b-form-input
                    id="id"
                    v-model="autor.id"
                    required
                    placeholder="Cedula"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="in-nombre" label="Nombre:" label-for="nombre">
                <b-form-input
                id="nombre"
                v-model="autor.nombre"
                required
                placeholder="Ingrese su nombre"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="in-apellidos" label="Apellidos:" label-for="apellidos">
                <b-form-input
                id="apellidos"
                v-model="autor.apellidos"
                required
                placeholder="Ingrese sus apellidos"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="in-edad" label="Edad:" label-for="edad">
                <b-form-input
                id="edad"
                v-model="autor.edad"
                required
                placeholder="Ingrese su edad"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="in-correo" label="Correo:" label-for="correo">
                <b-form-input
                id="correo"
                v-model="autor.correo"
                required
                placeholder="Ingrese su correo"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="in-ciudad" label="Ciudad:" label-for="ciudad">
                <b-form-input
                id="ciudad"
                v-model="autor.ciudad"
                required
                placeholder="Ingrese su ciudad"
                ></b-form-input>
            </b-form-group>

             <b-form-group id="in-ocupacion" label="Ocupación:" label-for="ocupacion">
                <b-form-input
                id="ocupacion"
                v-model="autor.ocupacion"
                required
                placeholder="Ingrese su ocupacion"
                 ></b-form-input>
            </b-form-group>

            <b-form-group id="in-clave" label="Clave:" label-for="clave">
                <b-form-input
                id="clave"
                v-model="autor.clave"
                required
                type="password"
                placeholder="Ingrese su clave"
                ></b-form-input>
            </b-form-group>
            
            <b-button type="submit" variant="primary" v-if="!enEdicion">Registrar</b-button>
      </b-form>    
    </b-card-body>
     
</template>

<script src="@/assets/registro-autor.js"/>