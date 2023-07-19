

function validarDatosPaciente() {
  let validarNombre = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
  let validarApellido = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
  let validarCedula = /[0-9]/g;
  let validarNumero = /^([0-9]{10})$/g;

  //Datos

  let nombre= document.getElementById("nombre").value;
  let apellido= document.getElementById("apellido").value;
  let cedula = document.getElementById("cedula").value;
  let edad =
    (new Date().getFullYear() -
    new Date(document.getElementById("edad").value).getFullYear());
  let tel = document.getElementById("tel").value;

  enviar = true;
  // Validar Nombre
  if (!validarNombre.test(nombre)) {
    let elemento = document.getElementById("nombre");
    elemento.className = "warning";
    alert("Ingrese un nombre valido");
    enviar = false;
    
  } else {
    let elemento = document.getElementById("nombre");
    elemento.classList.remove("warning");

  }

  // Validar Apellido
  if (!validarApellido.test(apellido)) {
    let elemento = document.getElementById("apellido");
    elemento.className = "warning";
    alert("Ingrese un apellido valido");
    enviar = false;
      }
     else {
    let elemento = document.getElementById("apellido");
    elemento.classList.remove("warning");
  }

  // Validar Cedula
  if (!validarCedula.test(cedula)) {
    let elemento = document.getElementById("cedula");
    elemento.className = "warning";
    alert("Ingrese un numero de cedula valido");
    enviar = false;
    
  } else {
    let elemento = document.getElementById("cedula");
    elemento.classList.remove("warning");
  }
  // Validar fecha
  if (isNaN(edad)) {
    alert("Ingrese una fecha de nacimiento valida");
    enviar = false;
    
  } else if (edad < 1) {
    alert("Ingrese una fecha de nacimiento valida");
    enviar = false;
    
  }
  // Valdiar numero de Cel
  if (!validarNumero.test(tel)) {
    let elemento = document.getElementById("tel");
    elemento.className = "warning";
    alert("Ingrese un numero de celular valido");
    enviar = false;
    
  } else {
    let elemento = document.getElementById("tel");
    elemento.classList.remove("warning");
    
  }
  return enviar;
  
 
}


function validarDatosDoctor() {

  let validarNombre = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
  let validarApellido = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
  let validarCedula = /[0-9]/g;
  let validarConsultorio = /^([0-9]{3})$/g;
  let validarCorreo =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;

  // datos
  let nombre= document.getElementById("nombreDoctor").value;
  let apellido= document.getElementById("apellidoDoctor").value;
  let cedula = document.getElementById("cedulaDoctor").value;
  let consultorio = document.getElementById("consultorioDoctor").value;
  let email = document.getElementById("emailDoctor").value;
  let especialidad = document.getElementById("especialidadDoctor").value;
   enviar = true;

  
  // Validar Nombre
  if (!validarNombre.test(nombre)) {
    let elemento = document.getElementById("nombreDoctor");
    elemento.className = "warning";
    alert("Ingrese un nombre valido");
    event.preventDefault();
    enviar = false;
  } else {
    let elemento = document.getElementById("nombreDoctor");
    elemento.classList.remove("warning");
  }
  // Validar Apellido
  if (!validarApellido.test(apellido)) {
    let elemento = document.getElementById("apellidoDoctor");
    elemento.className = "warning";
    alert("Ingrese un apellido valido");
    event.preventDefault();
    enviar = false;
  } else {
    let elemento = document.getElementById("apellidoDoctor");
    elemento.classList.remove("warning");
  }

  // Validar Cedula
  if (!validarCedula.test(cedula)) {
    let elemento = document.getElementById("cedulaDoctor");
    elemento.className = "warning";
    alert("Ingrese un numero de cedula valido");
    event.preventDefault();
    enviar = false;
  } else {
    let elemento = document.getElementById("cedulaDoctor");
    elemento.classList.remove("warning");
  }
  // Validar Consultorio
  if (!validarConsultorio.test(consultorio)) {
    let elemento = document.getElementById("consultorioDoctor");
    elemento.className = "warning";
    
    alert("Ingrese un consultorio valido");
    event.preventDefault();
    enviar = false;
  } else {
    let elemento = document.getElementById("consultorioDoctor");
    elemento.classList.remove("warning");
  }

  // Validar Email
  if (!validarCorreo.test(email)) {
    let elemento = document.getElementById("emailDoctor");
    elemento.className = "warning";
    alert("Ingrese un correo valido");
    
   
    enviar = false;
  } else {
    let elemento = document.getElementById("emailDoctor");
    elemento.classList.remove("warning");
  }
  // Validar Especialidad

  if (especialidad == "especialidad") {
    alert("Ingrese una especialidad valida");
    
    enviar = false;
  }
  return enviar;
}


// function validarDatosCitas(
//   cedula,
//   especialidad,
// ) {
//   let validarCedula = /^([0-9]{10})$/g;
  
 
//   let validacion = 0;
//   // Validar Nombre
  

//   // Validar Cedula
//   if (!validarCedula.test(cedula)) {
//     let elemento = document.getElementById("cedula-paciente");
//     elemento.className = "warning";
//     alert("Ingrese un numero de cedula valido");
//     validacion++;
//   } else {
//     let elemento = document.getElementById("cedula-paciente");
//     elemento.classList.remove("warning");
//   }
  
//   // Validar Especialidad

//   if (especialidad == "especialidad") {
//     alert("Ingrese una especialidad valida");
//     validacion++;
//   }
//   return validacion;
// }


// Formulario Paciente
var FormPaciente= document.getElementById("formularioPaciente");

FormPaciente.addEventListener ("submit", validarDatosPaciente) 

// Formulario doctor 
var FormDoctor= document.getElementById("formularioDoctor");
FormDoctor.addEventListener ("submit", registrarDatosDoctor); 

//Formulario Cita
var FormCita= document.getElementById("formulario-citas");
FormCita.addEventListener ("submit", registrarDatosCitas);





 

