import { getFirestore } from "../firebase/firebase-config";

/****** Firebase connection  **********/
const db = getFirestore();
/****** items collection access *******/
const itemCollection = db.collection("items");


/*
    Trae todo el items collections, 
    recibe por @param el useState de prod y useState de load
*/
export const getItemsCollection = async (setProd, setLoad) => {
    try {
        const querySnapshot = await itemCollection.get();

        if (querySnapshot.size === 0) {
            console.log("No items");
        }
        setProd(
            querySnapshot.docs.map(document => ({
                id: document.id, ...document.data()
            }))
        );
        setLoad(false);
    } catch (error) {
        console.log("Error getItemsCollection: ", error);
    }

}
/*
    Trae items collection por id (categoryName), 
    recibe por @param el id (categoryName), el useState de prod y useState de load 
*/
export const getItemsCollectionById = async (id, setProd, setLoad) => {
    try {
        const querySnapshot = await itemCollection.where("categoryName", "==", id).get();

        if (querySnapshot.size === 0) {
            console.log("No items");
        }
        setProd(querySnapshot.docs.map(document => ({
            id: document.id, ...document.data()
        }))
        );
        setLoad(false);
    } catch (error) {
        console.log("Error getItemsCollectionById: ", error);
    }

}

/*
    Trae Document Item por id, 
    recibe por @param el id, el useState de product y useState de load 
*/
export const getItemById = async (id, setProduct, setLoad) => {
    try {
        const document = await itemCollection.doc(id).get();

        if (!document.exists) {
            console.log('No item')
            return
        }
        setProduct({
            id: document.id,
            ...document.data()
        })
        setLoad(false);
    } catch (error) {
        console.log("Error getItemById: ", error);
    }

}