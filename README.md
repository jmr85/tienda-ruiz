
# Ecommerce Juan M Ruiz
Este ecommerce está especializado en la venta de productos para desarrolladores como libros de programación y venta de laptops.
## Screenshots
![App Screenshot](https://github.com/jmr85/tienda-ruiz/blob/master/doc/ecommerce.gif)

## Autores ✒️
- [@juanmruiz](https://www.github.com/jmr85)
## Construido con 🛠️
* [ReactJS](https://en.reactjs.org/) - Libreria para el desarrollo de aplicaciones web completas del lado del cliente.
* [React Router Web](https://reactrouter.com/web/guides/quick-start) - React Router es una colección de componentes de navegación que se componen de forma declarativa en la aplicación web.
* [React Bootstrap](https://react-bootstrap.github.io/) - Framework front-end reconstruido para React.
* [Animate css](https://animate.style/) - Es una libreria de animaciones css.
* [Sweetalert](https://sweetalert2.github.io/) - Es una libreria que permite crear todo tipo de mensajes de alerta customizados.
* [Formik](https://formik.org/) - Es una libreria de formularios para React. Se encarga de realizar un seguimiento de los valores, errores, que campos visitamos, validar y manejar el envio. Formik no utiliza bibliotecas de administración de estado externas como Redux o MobX. Esto hace que Formik sea fácil de adoptar gradualmente y mantiene el tamaño del paquete al mínimo.
* [Yup](https://github.com/jquense/yup) - Es una libreria para validar los campos del formulario, utilizado para validar los campos del formulario [Formik](https://formik.org/).
* [Firebase](https://firebase.google.com/) - Firebase es la plataforma de desarrollo de aplicaciones móviles de Google. En este proyecto se usa como backend.
## Crear el esquema de la DB en [Firebase](https://firebase.google.com/) con Firestore
Esquema items
```
ID de documento automatico,
categoryName: "sillas-oficina" (string),
description: "- Flia Hdc Group - Venta por mayor y menor!  Silla Oficina tela mesh  * Características *  • Material : Tela Mesh con eco cuero • Peso que soporta: 100kg • Altura regulable por sistema oleo-neumático: Si • Función giratoria 360° • Estrella metálica cromada reforzada • Costuras reforzadas • Ruedas de alta durabilidad • Basculante • Fácil de armar y limpiar" (string),
imageId: "https://http2.mlstatic.com/D_NQ_NP_780243-MLA45630322465_042021-O.webp" (string),
price: 15999 (number),
stock: 20 (number),
title: "Sillon Silla Gamer Playstation Xbox Pc Oficina Hdc-group" (string)
```  
Esquema orders se genera por codigo en src/helpers/orders.js
## Environment Variables
```
const app = firebase.initializeApp({
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
});
```  
## Run Locally 🚀
Clone the project
```bash
  git clone https://github.com/jmr85/tienda-ruiz.git
```
Go to the project directory
```bash
  cd tienda-ruiz
```
Install dependencies
```bash
  npm install
```
React app Start 
```bash
  npm start
```

## Expresiones de Gratitud 🎁
* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.
---
⌨️ con ❤️ por [jmr85](https://github.com/jmr85) 😊