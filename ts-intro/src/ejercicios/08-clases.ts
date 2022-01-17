/*
    ===== Código de TypeScript =====

    Documentación: https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

class Hero extends PersonaNormal {
    
    /* alterEgo: string;
    edad: number;
    nombreReal: number; */
   /*  private alterEgo: string;
    public edad: number;
    static nombreReal: number; */
    constructor( 
        public alterEgo: string, 
        public edad: number, 
        public nombreReal: string 
    ) {
        super( nombreReal, 'Villareal');
    }
}

const ironman = new Hero('Ironman', 45, 'Tony');

console.log(ironman)