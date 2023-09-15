//05-desestructurar-funciones.ts

export interface Producto{
    desc:string;
    precio:number;
}
const telefono:Producto={
    desc:'Sony erickson',
    precio:875
}
const tablet:Producto={
    desc:'Aipad Air',
    precio:1887
}

function calcularIVA1(productos:Producto[]):[number, number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return [total, total*0.16]
}

const articulos1=[telefono,tablet];
const [iva1]=calcularIVA1(articulos1);
console.log(`IVA $${iva1}`);

//mostrar dos resultados del arreglo
export function calcularIVA2(productos:Producto[]):[number, number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return [total, total*0.16]
}

const articulos2=[telefono,tablet];
const [total, iva]=calcularIVA2(articulos2);
console.log(`Total $${total}`);
console.log(`IVA $${iva}`);