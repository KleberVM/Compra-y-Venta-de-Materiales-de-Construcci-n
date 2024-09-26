## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

-  [Node.js](https://nodejs.org/en) (incluye npm)
- Un editor de código como Visual Studio Code

## Instalación de React
                
1. Crear un nuevo proyecto React Usa create-react-app, que es una herramienta oficial para configurar un proyecto React con todas las configuraciones necesarias.
`npx create-react-app nombre-de-tu-app`

2. Navegar al directorio del proyecto
`cd nombre-de-tu-app`
3. Iniciar el servidor de desarrollo
`npm start`

## Estructura del Proyecto
Después de crear un nuevo proyecto, notarás la siguiente estructura de carpetas:
```javascript
my-app/
├── node_modules/          # Dependencias del proyecto
├── public/              		  # Archivos estáticos
│   ├── index.html       	  # Archivo HTML principal
│   └── favicon.ico   	     # Icono de la aplicación
├── src/                  			 # Archivos fuente de la aplicación
│   ├── App.css            # Estilos para el componente App
│   ├── App.js             # Componente principal de la aplicación
│   ├── App.test.js        # Pruebas para el componente App
│   ├── index.css          # Estilos globales
│   ├── index.js           # Punto de entrada de la aplicación
│   ├── logo.svg           # Logo de la aplicación
│   └── ...                # Otros componentes y archivos
├── package.json           # Información del proyecto y dependencias
└── README.md              # Documentación del proyecto

```
## Archivos Clave para Editar
1. src/index.js:
Este es el punto de entrada de tu aplicación. Aquí es donde ReactDOM renderiza tu componente principal (<App />) en el DOM.
2. src/App.js:
Este es el componente principal de tu aplicación. Puedes modificar este archivo para definir la estructura y la lógica de tu aplicación.
3. src/App.css:
Aquí puedes agregar estilos específicos para el componente App. Si quieres aplicar estilos globales, es mejor usar index.css.
4. Componentes Adicionales:
Puedes crear nuevos archivos dentro de la carpeta src para agregar componentes adicionales. Por ejemplo, puedes crear un archivo llamado MyComponent.js y definir un nuevo componente allí.
5. public/index.html:
Este es el archivo HTML principal donde se inyecta tu aplicación React. Generalmente, no necesitas editar este archivo, excepto para cambiar el título de la página o agregar metaetiquetas.

## Crear Nuevos Componentes
Si deseas crear nuevos componentes, sigue estos pasos:
* Crea un Nuevo Archivo:
En la carpeta src, crea un nuevo archivo, por ejemplo, MyComponent.js.
* Define el Componente:

```javascript
import React from 'react';

function MyComponent() {
    return <h1>Hola, soy un nuevo componente!</h1>;
}
export default MyComponent;
```
* Importa y Usa el Componente:

```javascript
import React from 'react';
import MyComponent from './MyComponent'; // Importa tu nuevo componente

function App() {
    return (
        <div className="App">
            <h1>Bienvenido a mi aplicación React!</h1>
            <MyComponent /> {/* Usa el nuevo componente aquí */}
        </div>
    );
}

export default App;
```

# Guía para Empezar con React
React es una biblioteca de JavaScript para construir interfaces de usuario. Permite crear aplicaciones web de forma sencilla y eficiente mediante la construcción de componentes reutilizables.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
