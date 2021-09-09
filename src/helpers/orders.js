import { getFirestore } from "../firebase/firebase-config";
import Swal from 'sweetalert2'

/****** Firebase connection  **********/
const db = getFirestore();
/****** orders collection access *******/
const orders = db.collection("orders");

/*
    Guarda nueva orden, 
    recibe por @param objeto newOrder y el useState items 
*/
export const addOrderCollection = (newOrder, items) => {
    const batch = db.batch()

    orders
        .add(newOrder)
        .then(response => {
            console.log('response: ', response)

            items.forEach(({ item, quantity }) => {
                const docRef = db.collection('items').doc(item.id)
                batch.update(docRef, { stock: item.stock - quantity })
            })
            batch.commit()

            Swal.fire({
                title: 'Orden creada',
                text: 'El ID de su orden es: ' + response.id,
                icon: 'success',
                confirmButtonColor: 'green',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        })
        .catch(error => console.log(error))
}