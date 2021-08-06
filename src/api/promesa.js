import productos from './productos';

function fetchProductos(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}

/* const fecthProductos = async () => {
    try {
        const data = await promesaProductos();
        const prod = data.map( item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                url: item.pictureUrl
            }
        })
        return prod;
    } catch (err) {
        console.log(err);
    }
    
} */
 
export default fetchProductos;