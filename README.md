
### 1. Arranque del servidor
Esta captura muestra el servidor iniciándose correctamente y conectándose a la base de datos MongoDB en local. Además, se ha configurado nodemon para que el servidor se reinicie automáticamente cada vez que se realiza un cambio en el código, evitando así tener que detenerlo y volver a lanzarlo manualmente durante el desarrollo.

![Arranque del servidor](./capturas_proyecto/ServerRunning.png)

### 2. Consulta de películas (GET)
Se comprueba que el servidor devuelve correctamente el listado de películas guardadas en la base de datos.

![GET películas](./capturas_proyecto/GET.png)

### 3. Creación de una película (POST)
Se envía una nueva película con sus datos (título, director, año y género) y se comprueba que se guarda correctamente en la base de datos, devolviendo la película creada junto con su identificador.

![POST crear película](./capturas_proyecto/POST.png)

### 4. Modificación de una película (PUT)
Se edita una película ya existente, enviando su identificador junto con los nuevos datos, y se comprueba que la información se actualiza correctamente.

![PUT editar película](./capturas_proyecto/PUT.png)

### 5. Eliminación de una película (DELETE)
Se elimina una película de la base de datos utilizando su identificador, y se confirma que ha sido borrada correctamente.

![DELETE eliminar película](./capturas_proyecto/DELETE.png)

### 6. Control de errores
Se realiza una petición a una ruta que no existe, comprobando que el servidor responde con un mensaje de error controlado en lugar de fallar de forma inesperada.

![Control de errores](./capturas_proyecto/CONTROLERRORES.png)
