const usuarios =[
    {
        name:"Marta",
        contraseña:"123"
    },
    {
        name:"Cris",
        contraseña:"123"
    }
]


function login() {
    const username = document.getElementById("user").value  
    const password = document.getElementById("pass").value 
    let acceso = false;         
    for (let i = 0; i < usuarios.length; i++) {
        if(username===usuarios[i].name && password===usuarios[i].contraseña){
            console.log("Bienvenida"+ " " + usuarios[i].name)
            acceso = true;
            window.location.href = "Cabañas.html";
        }
     }
     if(acceso===false){
         alert("Contraseña o usuario incorrecto")
     }
}

