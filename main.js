let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    if(numeroDigitado) {
        if(numeroDigitado < 8) {
            alert("La cantidad de caracteres tiene que ser mayor o igual a 8");
        } else {
            let password = '';
        
            for(let i=0; i < numeroDigitado; i++) {
                let indiceAletario = Math.floor(Math.random() * cadenaCaracteres.length);
                let caracterAleatorio = cadenaCaracteres[indiceAletario];
                password += caracterAleatorio; 
            }
            contraseña.value = password;
    
            if(validar(password))
                mensaje.innerText = 'Se ha generado una contraseña fuerte.';
            else
                mensaje.innerText = 'Se ha generado una contraseña débil. Debe contener al menos un número, una letra minúscula, una letra mayúscula y un caracter especial.';
        }
    } else {
        alert("Ingrese una cantidad")
    }
}

function validar(cadena) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    return regex.test(cadena);
  }

function limpiar() {
    cantidad.value = '';
    contraseña.value = '';
    mensaje.innerText = '';
}







