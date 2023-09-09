


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