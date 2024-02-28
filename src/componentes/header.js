import { vistaLogin } from "../vistas/vistaLogin"
import { vistaPanel } from "../vistas/vistaPanel"
import { vistaRegistre } from "../vistas/vistaRegistre"

export const header = {
    template: //html
    `
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
    `,
    script: ()=>{
        //Escuchar click en login
        document.querySelector('#panel').addEventListener('click',(e) =>{
          e.preventDefault();
            document.querySelector('main').innerHTML =vistaPanel.template
            vistaPanel.script()
        })
        //Escuchar click en panel
        document.querySelector("#login").addEventListener('click',(e)=>{
          e.preventDefault();
          document.querySelector('main').innerHTML=vistaLogin.template
          vistaLogin.script()
        })
        //Escuchar click en registro
        document.querySelector("#registro").addEventListener('click',(e)=>{
          e.preventDefault();
          document.querySelector('main').innerHTML=vistaRegistre.template
          vistaRegistre.script()

        })
     
    }

}