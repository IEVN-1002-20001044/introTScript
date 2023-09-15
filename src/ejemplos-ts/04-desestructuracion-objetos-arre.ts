

//desetructurar

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles; //hereda de otra interfaz
}
//no importa la posición de la variable por la transpilación de lenguaje que hace el navegador en un solo archivo
interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:65,
    cancion:"Mañanitas",
    detalles:{
        autor:"Cepillin",
        year:1978
    }
}

console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`los segundos son: ${reproductor.segundo}`);
console.log(`El cantante es: ${reproductor.detalles.autor}`);
console.log(`Del año: ${reproductor.detalles.year}`);

//desestructurar para no poner tantos puntos . .
const{volumen, segundo, cancion, detalles}=reproductor
const{autor}=detalles
console.log(`El volumen actual es: ${volumen}`);
console.log(`los segundos son: ${segundo}`);
console.log(`El cantante es: ${autor}`);

const colores:string[]=['blue', 'red', 'green', 'violet'];
console.log(`Color 1: ${colores[0]}`);
console.log(`Color 2: ${colores[1]}`);
console.log(`Color 3: ${colores[2]}`);

const[a,,,b]=colores; //colocar una variable en la posición que ueremos usar
console.log(`Color 2: ${b}`)


