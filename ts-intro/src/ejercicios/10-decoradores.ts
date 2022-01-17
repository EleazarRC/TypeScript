/*
    ===== Código de TypeScript =====

    Documentación: https://www.typescriptlang.org/docs/handbook/basic-types.html

    DECORADORES: https://www.typescriptlang.org/docs/handbook/decorators.html#class-decoratorsS
*/
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    };
}

// Función que extiende a tu clase funcionalidades especiales..
@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log( MiSuperClase );

const miClase = new MiSuperClase();
console.log ( miClase.miPropiedad );