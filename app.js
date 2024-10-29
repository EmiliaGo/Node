const express = require("express");
const path = require("path");
const port = 3008;
const app = express();

// (CSS)
app.use(express.static(path.join(__dirname)));

// inicio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// formulario
app.get('/formulario', (req, res) => {
  res.sendFile(path.join(__dirname + '/formulario.html'));
});

// información
app.get('/informacion', (req, res) => {
  res.sendFile(path.join(__dirname, 'informacion.html'));
});

app.listen(port,()=>{
    console.log(`El servidor esta disponible por medio del: http://localhost:${port}`);
})


// app.get( "/",(req,res)=>{
//     //res.send("Hola mundo");
//     //res.sendFile("C:/Users/Reg/Documents/web2/21102024/index.html");
//     res.sendFile(path.join(__dirname + "/index.html"));
// } );

