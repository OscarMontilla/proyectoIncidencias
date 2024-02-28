import { header } from "./componentes/header";
import { vistaLogin } from "./vistas/vistaLogin";
import { vistaRegistre } from "./vistas/vistaRegistre";
import { vistaPanel } from "./vistas/vistaPanel";



document.querySelector('header').innerHTML = header.template
header.script()


document.querySelector('main').innerHTML = vistaRegistre.template
vistaRegistre.script()

 document.querySelector('main').innerHTML = vistaLogin.template
 vistaLogin.script()
 
 vistaPanel.script()

