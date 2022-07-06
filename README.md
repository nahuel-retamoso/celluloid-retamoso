# Celluloid

### Instalacion:

Este proyecto es un ecommerce creado con `create-react-app`
###### Para inicializar el proyecto hay que:

1) Clonarlo con `git clone https://github.com/Tumijiu/celluloid-retamoso.git`
2) Ejecutar `npm install`
3) Ejecutar `npm start`

###### Y se va a estar visualizando en el ***http://localhost:3000/***

###### Variables de entorno

Ver [`.env.example`](https://github.com/Tumijiu/celluloid-retamoso/blob/final/.env.example) de ejemplo.

#### Las rutas que contiene la aplicacion son:

***/item/:id***
Esta ruta va a estar renderizando el compomente ***ItemDetailContainer*** con el detalle del producto seleccionado.

***/category/:id***
Esta ruta va a estar renderizando el componente ***ItemListContainer*** con los items filtrados ***por categoria***.

***/***
Esta ruta va a estar renderizando el componente ***ItemListContainer*** con todos los items del inventario.

***/****
Esta ruta va a estar renderizando un mensaje que indica que esa ***ruta no esta disponible***.
