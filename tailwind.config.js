//USARLO PARA DEPLOY ASI
module.exports = {
  //buscar el archivo principal y agrega estilo a todos los archivos con .jsx
  content: [
    "index.html",
    "./src/**/*.js,jsx,ts,tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


//USARLO LOCALMENTE ASI
// module.exports = {
//   //buscar el archivo principal y agrega estilo a todos los archivos con .jsx
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }