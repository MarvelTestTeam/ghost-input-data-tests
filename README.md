Paso 1: Instalar Docker, ingrese a la siguiente pagina https://docs.docker.com/desktop/ y elija su sistema operativo luego siga las intrucciones de instalación. 

Paso 2: Ingrese a la pagina https://hub.docker.com/_/ghost?tab=description escoger la version 4.47.0 y asiganr el puerto 3002, esto lo debera hacer en la terminal de su computador una vez haya instalado docker. Para este paso tambien puede simplemente ejecutar el siguiente comando:

docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.47.0 ghost:4.47.0

Paso 3: Installar Node 16.13.0, ingrese al link https://nodejs.org/es/download/  escoja su sistema operativo y siga las intrrucciones colocando npm Install

Paso 4: Clonar el repositorio git a traves del siguiente link: https://github.com/MarvelTestTeam/ghost-input-data-tests

Paso 5: Ejecutar en la terminal, estando ubicado en la carpeta del proyecto clonado, el comando: npm install

Paso 6: Ejecutar en la terminal, estando ubicado en la carpeta del proyecto clonado, el comando: npm i faker

Paso 7: Ejecutar en la terminal, estando ubicado en la carpeta del proyecto clonado, el comando: npm i cypress

Paso 8: Ejecutar en la terminal, estando ubicado en la carpeta del proyecto clonado, el comando: npm install -D cypress-xpath

Paso 9: Ejecutar en la terminal, estando ubicado en la carpeta del proyecto clonado, el comando: cypress open

Paso 10: Una vez que se haya abierto la interfaz de cypress ejecutar las pruebas dando clic en Run 120 integration specs

DATOS DEL PROYECTO

|Datos Ghost|
|---|-----|
|Usuario|	misopruebasautomatizadas@gmail.com|
|Pass	|Asdfg12345!|
|Puerto|	3002|
|Version	|4.47|







