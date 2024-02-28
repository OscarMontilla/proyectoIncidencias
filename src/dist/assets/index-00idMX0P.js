(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const b=[{codigo:"497654",fecha:"29/08/2023",fechaResuelto:"04/05/2023",aula:"C1",grupo:"DAW2",ordenador:"PC1",descripcion:"No enciende el ordenador",alumno:"Oscar Montilla",estado:"resuelto"},{codigo:"487554",fecha:"22/04/2023",aula:"A1",grupo:"DAW1",ordenador:"PC2",descripcion:"Problemas con el hardware",alumno:"Cristina Sanchez",estado:"pendiente"},{codigo:"452156",fecha:"28/09/2022",aula:"A2",grupo:"DAW2",ordenador:"PC4",descripcion:"Problemas con el software",alumno:"Miguel Ruiz",estado:"pendiente"},{codigo:"453456",fecha:"28/04/2023",fechaResuelto:"10/12/2021",aula:"B2",grupo:"DAW1",ordenador:"PC5",descripcion:"No hay conexión a Internet",alumno:"Carlos Lopez",estado:"resuelto"}],d={template:`
    <h1>Administración de incidencias</h1>
    <h2 class="mt-5">Tickets pendientes</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tablaPendiente">
      
      </tbody>
    </table>
    <h2 class="mt-5">Tickets resueltos</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Fecha resuelto</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
        </tr>
      </thead>
      <tbody id="tablaResuelto">
      
      </tbody>
    </table>
  `,script:()=>{b.forEach(e=>{e.estado=="pendiente"?document.querySelector("#tablaPendiente").innerHTML+=`
        <tr>
          <td>${e.codigo}</td>
          <td>${e.fecha}</td>
          <td>${e.aula}</td>
          <td>${e.grupo}</td>
          <td>${e.ordenador}</td>
          <td>${e.descripcion}</td>
          <td>${e.alumno}</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button></td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i></button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i></button></td>
        </tr>
      `:document.querySelector("#tablaResuelto").innerHTML+=`
        <tr>
          <td>${e.codigo}</td>
          <td>${e.fecha}</td>
          <td>${e.fechaResuelto}</td>
          <td>${e.aula}</td>
          <td>${e.grupo}</td>
          <td>${e.ordenador}</td>
          <td>${e.descripcion}</td>
          <td>${e.alumno}</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button></td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i></button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i></button></td>
        </tr>
      `})}},l=[],c={template:`
    <div class="container">
    <h1 class="mt-5 text-center">Registro</h1>
    <div class="m-5 mx-auto" style="max-width: 400px">
        <form action="" class="form border shadow-sm p-3">
            <label for="nombre" class="form-label">Nombre:</label>
            <input id="nombre" type="text" class="form-control" />
            <label for="apellidos" class="form-label">Apellidos:</label>
            <input id="apellidos" type="text" class="form-control" />
            <label for="email" class="form-label">Email:</label>
            <input id="email" type="text" class="form-control" />
            <label for="pass" class="form-label mt-3">Contraseña:</label>
            <input id="pass" type="password" class="form-control" />
            <a class="btn btn-primary w-100 mt-3" id="enviarRegistro" href="#">Enviar</a>
        </form>
    </div>
</div>
    `,script:()=>{document.querySelector("#enviarRegistro").addEventListener("click",e=>{e.preventDefault();const r=document.querySelector("#nombre").value.trim(),s=document.querySelector("#apellidos").value.trim(),n=document.querySelector("#email").value.trim(),t=document.querySelector("#pass").value.trim();if(!r||!s||!n||!t){alert("Completa todos los campos para poder registrarte.");return}const o={nombre:r,apellidos:s,email:n,password:t};let i=!1;if(l.forEach(u=>{u.email===n&&(i=!0)}),i)alert("Este correo ya ha sido usado");else{l.push(o);const u=JSON.stringify(l);localStorage.setItem("registroLocal",u),console.log(l),l?(alert("Tu usuario se ha registrado correctamente"),document.querySelector("main").innerHTML=a.template,a.script()):alert("No se guardó correctamente en la base de datos")}})}},a={template:`
    <div class="container">
        <h1 class="mt-5 text-center">Inicia sesión</h1>
        <div class="m-5 mx-auto" style="max-width: 400px">
        <form action="" class="form border shadow-sm p-3">
            <label for="email" class="form-label">Email:</label>
            <input required id="email" type="email" class="form-control" />
            <label for="pass" class="form-label mt-3">Contraseña:</label>
            <input required minlength="6" id="pass" type="password" class="form-control" />
            <div class="form-check mt-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                <label class="form-check-label" for="flexCheckChecked">Recordar sesión</label>
            </div>
            <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
            <a class="btn btn-primary w-100 mt-3" id="iniciarSesion" href="#">Iniciar sesión</a>
        </form>
        <a class="d-block mt-5 btn btn-secondary mx-auto" id="irRegistro" href="#">¿Eres nuevo? Regístrate</a>
    </div>
</div>
    `,script:()=>{document.querySelector("#iniciarSesion").addEventListener("click",e=>{e.preventDefault();const r=document.querySelector("#email").value.trim(),s=document.querySelector("#pass").value.trim(),n=document.querySelector("#email").value;let t=null;l.forEach(o=>{o.email===r&&o.password===s&&(t=o)}),t?(correoUsuarioActual=r,alert("Inicio de sesión exitoso"),sesionActiva=1,document.querySelector("main").innerHTML=d.template,d.script(),document.querySelector("#nombreUsuario").innerHTML=n,document.querySelector("#panel").classList.replace("d-none","d-inline-block"),document.querySelector("#nombreUsuario").classList.replace("d-none","d-inline-block"),document.querySelector("#cerrarSesion").classList.replace("d-none","d-inline-block")):alert("Error en el inicio de sesión. Verifica tus credenciales.")}),document.querySelector("#irRegistro").addEventListener("click",()=>{document.querySelector("main").innerHTML=c.template,c.script()}),document.querySelector("#cerrarSesion").addEventListener("click",()=>{correoUsuarioActual=null,sesionActiva=0,document.querySelector("main").innerHTML=a.template,a.script(),document.querySelector("#panel").classList.add("d-none","d-inline-block"),document.querySelector("#nombreUsuario").classList.replace("d-inline-block","d-none"),document.querySelector("#cerrarSesion").classList.replace("d-inline-block","d-none")})}},m={template:`
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Panel</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cosmo/bootstrap.min.css">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
      </head>
      <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div>
          <button id="panel" class="btn btn-secondary ms-2 ">PANEL</button>
          <button id="login" class="btn btn-secondary ms-2">LOGIN</button>
          <button id="registro" class="btn btn-secondary ms-2">REGISTRO</button>
        </div>
        <div>
              <span id="nombreUsuario" class="d-none"></span>
              <button id="cerrarSesion" class="d-none btn btn-secondary ms-2">CERRAR SESIÓN</button>
          </div>
      </div>
    </nav>
    `,script:()=>{document.querySelector("#panel").addEventListener("click",e=>{e.preventDefault(),document.querySelector("main").innerHTML=d.template,d.script()}),document.querySelector("#login").addEventListener("click",e=>{e.preventDefault(),document.querySelector("main").innerHTML=a.template,a.script()}),document.querySelector("#registro").addEventListener("click",e=>{e.preventDefault(),document.querySelector("main").innerHTML=c.template,c.script()})}};document.querySelector("header").innerHTML=m.template;m.script();document.querySelector("main").innerHTML=c.template;c.script();document.querySelector("main").innerHTML=a.template;a.script();d.script();
