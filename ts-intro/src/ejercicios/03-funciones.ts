

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====

    Documentación: https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar( numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

const resultado = multiplicar(5, 0, 10); //50

/* console.log(resultado); */

/* const resultado = sumar(2,2); */

/* console.log(resultado); */

interface PersonajeLOR {
    nombre: string;
    pv: number;
  /*   mostrarHp: (a:number, b:string, c:boolean) => void; */
    mostrarHp: () => void;
}


function curar( personaje: PersonajeLOR, curarX:number ): void {

    personaje.pv += curarX;

    //console.log( personaje );
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log( 'Puntos de vida:', this.pv );
    }
}

curar( nuevoPersonaje, 20 );