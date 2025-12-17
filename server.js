const http = require("node:http");
const {pageWeb, numero} = require("./data.js");
const PORT = 3000;

const server = http.createServer((req, res) =>{
    const template = `
    <!DOCTYPE html>
    <html lang="es">
     <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
     </head>
     <body>
      <h1>${pageWeb.title} ${numero}</h1>
      <h2>${pageWeb.subtitle}</h2>
      <p>${pageWeb.description}</p>
    
     </body>
    </html>`
    res.end(template)
})

server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto http://localhost:${PORT}`)
})

//me quedo en el min 43 del video.