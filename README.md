# EJECUCIÓN AMBIENTE DE PRUEBAS CON GENERACIÓN DE DATOS USANDO CYPRESS - SEMANA 7

## PASO A PASO
Paso 1: Instalar Docker, ingrese a la siguiente pagina https://docs.docker.com/desktop/ y elija su sistema operativo luego siga las intrucciones de instalación. 

Paso 2: Ingrese a la pagina https://hub.docker.com/_/ghost?tab=description escoger la version 4.47.0 y asiganr el puerto 3002, esto lo debera hacer en la terminal de su computador una vez haya instalado docker. Para este paso tambien puede simplemente ejecutar el siguiente comando:

docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.47.0 ghost:4.47.0

Paso 3: Acceder a un navegador web e ingresar a la URL http://localhost:3002/ghost, el sistema mostrará el formulario para crear el sitio y la cuenta administrativa, para los datos del usuario administrador se debe poner en el campo email "misopruebasautomatizadas@gmail.com" (las comillas solo son delimitadores el texto en el campo se debe poner sin comillas) y en el campo password "Asdfg12345!" (las comillas solo son delimitadores el texto en el campo se debe poner sin comillas), una vez terminado de diligencia el formulario el sistema lo llevará a el área administrativa de la aplicación

Paso 4: Installar Node 16.13.0, ingrese al link https://nodejs.org/es/download/  escoja su sistema operativo y siga las intrrucciones colocando npm Install

Paso 5: Clonar el repositorio git a traves del siguiente link: https://github.com/MarvelTestTeam/ghost-input-data-tests

Paso 6: Ejecutar en la terminal, estando ubicado en la carpeta del proyecto clonado, el comando: npm install

Paso 7: Ejecutar en la terminal, estando ubicado en la carpeta del proyecto clonado, el comando: npm i faker

Paso 8: Ejecutar en la terminal, estando ubicado en la carpeta del proyecto clonado, el comando: npm i cypress

Paso 9: Ejecutar en la terminal, estando ubicado en la carpeta del proyecto clonado, el comando: npm install -D cypress-xpath

Paso 10: Ejecutar en la terminal, estando ubicado en la carpeta del proyecto clonado, el comando: npm i mockaroo

Paso 11: Ejecutar en la terminal, estando ubicado en la carpeta del proyecto clonado, el comando: cypress open

Paso 12: Una vez que se haya abierto la interfaz de cypress ejecutar las pruebas dando clic en Run 120 integration specs

## Issues de Ghost

Los issues encontrados en la herramienta ghost fueron reportados en el espacio para issues del repositorio, a continuación el link para acceder:

https://github.com/MarvelTestTeam/ghost-input-data-tests/issues

## DATOS DEL PROYECTO

### Datos Ghost

|Dato | Valor|
|-----|----|
|Usuario|	misopruebasautomatizadas@gmail.com|
|Pass	|Asdfg12345!|
|Puerto|	3002|
|Version	|4.47|


### Funcionalidades

|Id |Funcionalidad	|
|----|------|
|FN01|	members                                        |
|FN02|	pages                                          |
|FN03|	tags                                           |
|FN04|	posts                                          |
|FN05|	/settings/design/brand                         |
|FN06|	/settings/desing/site/wide/color               |
|FN07|	/settings/desing/post/Email signup text        |
|FN08|	/settings/navigation                           |
|FN09|	/settings/staff                                |
|FN10|	/settings/members                              |
|FN11|	/settings/newsletters                          |
|FN12|	/settings/integrations/slack                   |
|FN13|	/settings/code-injection                       |
|FN14|	login                                          |






