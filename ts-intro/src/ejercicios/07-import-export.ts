/*
    ===== Código de TypeScript =====

    Documentación: https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

import { calculaISV, Producto } from "./06-desestructuracion-funcion";
//Cuidado al importar funciones se ejecutan :D

const carritoCompras: Producto[] = [
    {
        desc: "Telefono 1",
        precio: 100
    },
    {
        desc: "Telefono 2",
        precio: 150
    }
];

const [total, isv] = calculaISV( carritoCompras );

console.log('Total', total);
console.log('ISV', isv);
