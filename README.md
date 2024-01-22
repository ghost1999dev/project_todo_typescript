## Frontend y Backend TodoList
Este respositorio contiene el Frontend y Backend de una aplicacion ToDo List desarrollado en Node.js y TypeScript de lado del Bckend y ReactJs de lado de Frontend

<div style="display: flex; justify-content: space-around">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="400" height="400">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="300" height="300" style="margin-top: 30px;">
</div>


## Tecnologias Utilizadas
 ![Node.js](https://img.shields.io/badge/Node.js-10.x%20%7C%2012.x%20%7C%2014.x%20%7C%2016.x-43853D.svg) 
 ![Express.js](https://img.shields.io/badge/Express.js-4.x-000000.svg) 
 ![MongoDB](https://img.shields.io/badge/MongoDB-4.x-47A248.svg)

 ## Ruta especifica de la documentacion de los endpoints
 http://localhost:4201/docs/

## Instalacion Backend
1. Clona el repositorio: ` git clone [https://github.com/ghost1999dev/project_todo_typescript.git]`
2. Se creo la rama `main` para simular produccion en donde esta el codigo semilla
3. Se creo la rama `develop` para simular el modo desarrollo
4. Si es necesario hacer pull en la rama `main`
5. Ingresa al directorio del backend: `cd backend`
6. Instala las dependencias: `npm install`
7. Correr el proyecto: `npm run dev`

## Instalacion Frontend
1. Clona el repositorio: `git clone [https://github.com/ghost1999dev/project_todo_typescript.git]`
2. Ingresa al directorio del frontend: `cd frontend`
3. Instala las dependencias: `npm install`
4. Correr el proyecto: `npm run dev`

## Base de datos
Se utilizo MongoDB para representar diferentes tipos de datos. Ejemplo de la coleccion de datos que se utilizo

```json
{
  "_id": "ObjectId",
  "nombre": "string",
  "descripcion": "string",
  "completado": "boolean",
  "fechaCreacion": "date"
}
````

## Estructura del proyecto del Backend

- `/config`: Contiene la configuracion de la base de datos MongoDB
- `/controllers`: Controladores del servidor
- `/helpers`: Funciones reutilizables del Backend
- `/models`: Modelos de datos TypesCript
- `/routes`: Rutas del backend que apuntan a los metodos

## Estructura del proyecto del Frontend

- `/public`: Archivos publicos
- `/src`: Contiene el codigo fuente de React
- `/components`: Componentes React reutilizables

