if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
require('dotenv').config();
var ht=""; 
function comprobar(){
    const user = document.getElementById('user').value;
    const pass = document.getElementById('password').value;        

    if(user != 'raul' || pass != 1234){
        alert("Datos incorrectos");
    }else{
        procesdata();           
        if(process.env.host == 'null'){
            location = './crearconex.html';            
        }else{
            location ='./tabla.html';
        }        
    }
}


function co(){              
   localStorage.setItem('host',document.getElementById('host').value);
   localStorage.setItem('user',document.getElementById('user').value);
   localStorage.setItem('password',document.getElementById('password').value);
   localStorage.setItem('database',document.getElementById('database').value);
   procesdata();
   const con = require('./connect'); 
   location = "./tabla.html"
}

function procesdata(){
    process.env.host = localStorage.getItem('host');
    process.env.user = localStorage.getItem('user');
    process.env.password = localStorage.getItem('password');
    process.env.database = localStorage.getItem('database');
}

function addData() {
    con = require('./connect');     
    const nombre = document.getElementById('nombres').value;
    const ap_pat = document.getElementById('ap_pat').value;
    const ap_mat = document.getElementById('ap_mat').value;
    const edad = document.getElementById('edad').value;         
    
    $query = `INSERT INTO persona (nombre, ap_pat, ap_mat, edad) VALUES ('${nombre}','${ap_pat}','${ap_mat}',${edad})`;     
    
    con.query($query, function (err, rows, fields) {

        if (err) {
            console.log('Error Query');
            console.log(err);
            return;
        }                
        console.log("Query exitoso", rows);
       
    });        
    ht += "<pre>"+nombre+"          "+ap_pat+"          "+ap_mat+"          "+edad+"</pre>";
    document.getElementById("codigohtml").innerHTML = ht; 
    document.getElementById('nombres').value="";
    document.getElementById('ap_pat').value="";
    document.getElementById('ap_mat').value="";
    document.getElementById('edad').value=""; 
}
