# gestion-publicacion

## Descripción del proyecto:

* El módulo 1 consta del registro de autor, también para que el autor pueda registrar su obra y finalmente manejar el estado de evaluación de la obra con el comité y asignar la cita para la revisión final 

## Informacion de los autores:
* Jheyson Vélez Marín - jheyson.v.m1@gmail.com
* Maria Fernanda Henao Herrera - mariafernandahenaoherrera@gmail.com
* Kevin Julian Londoño - kevin110602@gmail.com
* Natalia Hernandez - natahdz02@gmail.com 
> modulo 1

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
# Funcionalidades

Nota: Crear un array con las tareas predefinidas.

- [A] CRUD de propuesta
- [B] CRUD de seguimiento-revisión de aprobación
  ```js
  {
    id_tarea: "",
    fecha: "",
    comentario: "",
    estado: "",
  }
  ```
- [C] Listado de propuestas con el último estado del seguimiento y generar PDF por propuesta

---

# CRUD's Para el proyecto

### 1. Registro de autor

- nombres
- apellidos
- email
- direccion
- afiliación institucional
- formacion
- cargo u ocupacion actual
- datos de libros previos publicados

## propuesta de publicación

### 2. Información general de la publicación

- Titulo
- Otros autores(nombre, email, telefono)
- Facultad a la cual se inscribe
- Tipo de publicación
- Area a la que pertenece

### 3. Información detallada de la publicación

- Reseña de autores
- Resumen de la obra
- Aspectos novedosos
- Contribución al estado actual del area
- Publico objetivo
- Forma en que se ajusta la obra a la misión de la UdeM
- Datos del proyecto al que se asocia
- Observaciones finales

**\*\*\*\***\_\_**\*\*\*\***---

Un autor presenta una propuesta de publicación, ante el Sello Editorial, así:

1. Registro de autor nuevo
2. Crear propuesta de publicación (autor), la cual contiene un perfil con mínimo la sgte.info:
   - Info general de la publicación:
     - Título propuesto
     - Otros autores (con nombre, email y teléfono)
     - Facultad a la cual se inscribe
     - Tipo de publicación (ver categorías de referencia)
     - Área a la que pertenece (ver áreas de referencia)
   - Info detallada.
     - Reseña de autores
     - Resumen de la obra
     - Aspectos novedosos
     - Contribución al estado actual del área
     - Público objetivo
     - Forma en que se ajusta la obra a la misión de la UdeM
     - Datos de proyecto al que se asocia (si aplica)
     - Observaciones finales
3. Generar versión de exportación (en .pdf, similar al formato FT-GED-001 ‘Propuesta de publicación’
4. Revisión de comité editorial:
   - Revisión preliminar por parte de encargado Comité. Programación en sesión del comtié editorial `[Comentario, visto bueno]`
   - revisión de ‘propuesta’--`[Comentario, visto bueno]`
     - registro de acta del comité editorial en la cual se sesiona
     - Registro de observaciones, comentarios y/o sugerencias
     - Selección de concepto (aprobado, no aprobado, …)
     - Definición de evaluadores
   - Remisión de invitación a evaluar
     - Registro de evaluadores
     - Envío de correo con invitación a evaluar. Asignación de tiempos de respuesta.
     - Programación en calendario


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
