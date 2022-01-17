/*
    ===== Código de TypeScript =====

    Documentación: https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [1,2,3,4,5,6,7,8,9,10,11] );

let soyExplicito = queTipoSoy<number>( 100 );