/*
    ===== Código de TypeScript =====

    Documentación: https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Mess",
    detalles: {
        autor: "Ed Sheeran",
        anio: 2015,
    }
}

// Destructuración
const { volumen, segundo, cancion , detalles } = reproductor; 
/* const { volumen, segundo, cancion , detalles: { autor} } = reproductor; */
/* const { volumen, segundo, cancion , detalles: { autor:autorConOtroNombreDeVariable } } = reproductor; */
const { autor } = detalles;
 
/* console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es de: ', segundo);
console.log('El canción actual es de: ', cancion);
console.log('El autor es: ', autor); */

// Arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2, p3] = dbz; // Se dejan comas solo si no interesa el "slot"

console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);
