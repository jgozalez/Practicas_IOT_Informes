# Practica 2
**Por** *Juan Camilo Gonzalez Mulato*

**Nombre de la asignatura: Electiva IOT**

**Fecha de realización 29/11/2022**

## 1. Instalar servidor NodeJS y NestJS.
Instalamos nodo NodeJs
![NodeJS](Imagenes_2/1.png)

Validamos las versión
![NodeJS](Imagenes_2/2.png)

Ahora instalamos NestJS.
![NestJS](Imagenes_2/3.png)




## 2. Implementar un servidor web que exponga un recurso REST.
Luego creamos un proyecto NestJS ejecutando el comando nest new
![proyecto](Imagenes_2/4.png)

identificamos la dirección IP de la máquina
![proyecto](Imagenes_2/5.png)

Se verifica los scripts disponibles
![proyecto](Imagenes_2/7.png)


Con lo anterior el servidor nos indica que está listo para recibir peticiones con el metodo GET en la ruta raíz. Por defecto el servidor escucha en el puerto 3000, para verificar esto se puede ejecutar el comando en otra terminal:
![proyecto](Imagenes_2/10.png)


Luego Se ejecuta el ejemplo Hello World
Ejecutamos el servidor
![proyecto](Imagenes_2/6.png)

Ahora nos conectamos  la servidor y nos muestra "Hello World!"
![proyecto](Imagenes_2/8.png)

## 3. Identificar los verbos Http y su uso para un caso de ejemplo
**Este ejemplo de implementación de los verbos HTTP se hizo acerca de productos.**

En el archivo app.controller.ts
creamos una interfaz de Producto
![proyecto](Imagenes_2/11.png)

Luego creamos la clase Producto y  creamos un producto.
![proyecto](Imagenes_2/12.png)

Luego creamos una metodo GET  para solicitar una representación de productos
![proyecto](Imagenes_2/13.png)

Creamos una metodo POST para crear un producto. 
![proyecto](Imagenes_2/14.png)

Creamos una metodo PUT para Actualizar un producto. 
![proyecto](Imagenes_2/22.png)

Creamos una metodo DELETE para eliminar un producto. 
![proyecto](Imagenes_2/15.png)

Creamos una metodo PATCH para actualizar un producto parcialmente. 
![proyecto](Imagenes_2/16.png)

## Evaluación del funcionamiento de los verbos.
En este caso se utilizo la herramienta Postman para evaluar los verbos.

GET 
![GET](Imagenes_2/17.png)

POST
![POST](Imagenes_2/18.png)

PUT
![PUT](Imagenes_2/19.png)

DELETE
![DELETE](Imagenes_2/20.png)

PATCH
![DELETE](Imagenes_2/21.png)