/*
    ===== Código de TypeScript =====

    Documentación: https://www.typescriptlang.org/docs/handbook/basic-types.html

*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: "Eleazar"
}
const pasajero2: Pasajero = {
    nombre: "Eleazar",
    hijos: ['Nayara', 'Manolo']
}

function imprimirHijos( pasajero: Pasajero): void {

    const cuantosHijos = pasajero.hijos?.length || 0; //IMPORTANTEEEEE

    console.log( cuantosHijos );
}

imprimirHijos( pasajero1);