


interface Alumno{
    matricula?:number;
    nombre:string;
    email:string; 
}

const alumno:Alumno={
    nombre:'Juan',
    email: 'juan@gmail.com'
}

console.log(alumno.nombre);

//hay que indicar el tipo de arreglo que es con :[]
let mascotas:string[]=['perro', 'gsto', 'perico']

mascotas[1]='perico verde';
mascotas.push('gato dos');
console.table(mascotas);

//diferentes formas de iniciar un arreglo y asignar datos
let tem:(string|number)[]=[]
tem.push('RCR');
tem.push(34);