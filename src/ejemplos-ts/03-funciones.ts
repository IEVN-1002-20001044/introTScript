//para poder definir una función: function nombre(parametros)
function suma():void{
    console.log(`la suma es ${3+5}`); //comillas francesas (dijo el profe)
} //void no regresa ningun tipo de valor
//al no asignar un tipo de dato podemos concatenar cadenas
suma();


function suma2(a:number,b:number):number{
    return a+b;
} 

const resultado=suma2(7, 8)
//console.log(resultado);
console.log(`la suma es ${resultado}`);

//otro tipo de funcion
function multiplicar(n1:number, otronumber:number, base:number=7):number{
    let tem=n1*base;

    return tem;
}
console.log(multiplicar(3,5,2));

//intentaremos pasar un objeto
interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void; //predefinimos una funcion como parametro
}
function calcular(mascota:Mascotas, x:number):void{ //pasamos una variable sencilla y una 
    
    mascota.edad+=x;
    console.log(mascota);

}
const nuevaMascota:Mascotas={
    nombre:'Miau',
    edad:2,
    mostrarEdad(){
        console.log('La edad es: ', this.edad)

    }
}
calcular(nuevaMascota, 3)