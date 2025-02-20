## Client Gateway

El gateway es el punto de entrada de los clientes al sistema. Se encarga de recibir las peticiones de los clientes y de enviarlas a los servicios correspondientes. Para ello, se comunica con el servicio de descubrimiento para obtener la dirección de los servicios.

## Dev

1. Clonar el repositorio
2. Instalar las dependencias
3. Crear un archivo `.env` con las variables de entorno necesarias basándose en el archivo `.env.template`
4. Tener levantado los microservicios que se van a consumir
5. Levantar el proyecto con `npm run start:dev`

## Nats

```bash

docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats

```
