# aspnet-angular-travel-mvc-app

Aplicación fullstack desarrollada con ASP.NET Core 8 (Web API) como backend y Angular 16+ como frontend. Permite la gestión de viajes en una interfaz de una sola pantalla (SPA), con funciones para crear, editar y listar viajes, utilizando una arquitectura limpia y escalable.

## Requisitos

- Docker
- Docker Compose

## Ejecución con Docker

Para ejecutar la aplicación utilizando Docker, siga estos pasos:

1. Asegúrese de tener Docker y Docker Compose instalados en su sistema.

2. Clone este repositorio en su máquina local.

3. Abra una terminal y navegue hasta el directorio raíz del proyecto.

4. Ejecute los siguientes comandos para construir y iniciar los contenedores:

   ```
   docker-compose down
   docker-compose build --no-cache
   docker-compose up
   ```

   Estos comandos aseguran que se construyan las imágenes de Docker más recientes para el backend y el frontend, y luego inician los contenedores.

5. Una vez que los contenedores estén en funcionamiento, podrá acceder a la aplicación:

   - Frontend: http://localhost
   - Backend API: http://localhost:8080

6. Para detener la aplicación, use Ctrl+C en la terminal donde ejecutó docker-compose, o ejecute:

   ```
   docker-compose down
   ```

7. Si realiza cambios en el código fuente, repita los pasos 4-5 para reconstruir y reiniciar los contenedores con los cambios más recientes.

## Desarrollo

Para el desarrollo local sin Docker, consulte las instrucciones en los directorios `Back/BackendTravel` y `Front/viajes` respectivamente.
