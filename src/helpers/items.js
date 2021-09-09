import { getFirestore } from "../firebase/firebase-config";

/****** Firebase connection  **********/
const db = getFirestore();
/****** items collection access *******/
const itemCollection = db.collection("items");


/*
    Trae todo el items collections, recibe por @param el useState
*/
export const getItemsCollection = (setProd) => {
    itemCollection
        .get()
        .then(querySnapshot => {
            if (querySnapshot.size === 0) {
                console.log("No items");
            }
            setProd(
                querySnapshot.docs.map(document => ({
                    id: document.id, ...document.data()
                }))
            );

        })
        .catch(error => { console.log(error) })
}
/*
    Trae items collection por id (categoryName), 
    recibe por @param el id (categoryName) y el useState 
*/
export const getItemsCollectionById = (id, setProd) => {
    itemCollection.where("categoryName", "==", id)
        .get()
        .then(querySnapshot => {
            if (querySnapshot.size === 0) {
                console.log("No items");
            }
            setProd(querySnapshot.docs.map(document => ({
                id: document.id, ...document.data()
            }))
            );
        })
        .catch(error => { console.log(error) })
}

/*
    Trae Document por id, 
    recibe por @param el id y el useState 
*/
export const getDocById = (id, setProduct) => {

    const currentItem = itemCollection.doc(id)
    currentItem
        .get()
        .then(document => {
            if (!document.exists) {
                console.log('No item')
                return
            }
            setProduct({
                id: document.id,
                ...document.data()
            })
        })
        .catch(err => console.log(err))
}