# Practica 3 Seguridad y calidad
**Por** *Juan Camilo Gonzalez Mulato*

# Objetivos
- Aplicar los conceptos de arquitectura hexagonal.
- Implementar protección simple de endpoints.
- Implementar autenticación JWT.


# I. Arquitectura hexagonal
Se realizo la respectiva modulacion del proyecto con la arquitectura exagonal. 

# II. Implementado seguridad
En esta parte se implemento un sistema de autenticación y autorización para que los usuarios puedan acceder a los recursos del servidor.

-Primero se instala  el paquete @nestjs/passport y passport, que permitirá implementar la autenticación y autorización y luego se creará un módulo para autenticación .

![inst](imagenes_3/23.png)

-Luego se crea un módulo para gestionar usuarios

![inst](imagenes_3/24.png)

-Luego se realizo la implemnteacion y las modificaciones a las respectivas clases

-Luego se hizo la validación.En este punto al llamar al enpoint POST del servidor la respuesta debería ser esta:

Prueba en postman

![inst](imagenes_3/25.png)

# III. Autenticación con JWT
-Para implementar la autenticación con JWT se instalo el paquete @nestjs/jwt
![inst](imagenes_3/26.png)

 -Luego se realizo Luego se realizó la respectiva implementación y modificación de los archivos, para garantizar la Autenticación con JWT.

Tambien se protegió los endpoints que tengan capacidad de modificar o eliminar registros
![inst](imagenes_3/31.png)
![inst](imagenes_3/32.png)
![inst](imagenes_3/33.png)

-Finalmente se realiza la prueba  del funcionamiento en postaman

Primero se hace le inicia sesión, y este nos genera un token para la autenticación.

![inst](imagenes_3/29.png)

Luego  se verifica el correcto funcionamiento de los endpoints protegidos.

Se crea un producto con POST

![inst](imagenes_3/34.png)

Se modifica el producto con PUT

![inst](imagenes_3/37.png)

Se modifica el precio del producto con PATCH

![inst](imagenes_3/38.png)

Se lista el productpo con GET
![inst](imagenes_3/39.png)

Por ultimo se elimina el producto con DELETE

![inst](imagenes_3/36.png)



