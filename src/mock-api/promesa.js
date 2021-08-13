import productos from './productos';

function fetchProductos(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}
 
export default fetchProductos;