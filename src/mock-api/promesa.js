import productos from './productos.json';

function fetchProductos(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(productos);
        }, 1500);
    });
}
 
export default fetchProductos;