import React, {useState, useEffect} from "react";
import { getFirestore } from "../firebase/firebase-config";
import { Spinner } from 'react-bootstrap';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [prod, setProd] = useState([]);
    const [load, setLoad] = useState(true);//para el <Spinner/>

    const {id} = useParams();

    console.log("items: ", prod);

    useEffect(() => {

        const db = getFirestore();
        const itemCollection = db.collection("items");

        if (id){
            itemCollection.where("categoryName", "==", id)
            .get()
            .then(querySnapshot => {
                if(querySnapshot.size === 0){
                    console.log("No items");
                }
                setProd(querySnapshot.docs.map(document =>({
                        id: document.id, ...document.data()
                    }))
                );
            })
            .catch(error => {console.log(error)})
            .finally(() => setLoad(false)); 
        }else{
            itemCollection
            .get()
            .then(querySnapshot => {
                if(querySnapshot.size === 0){
                    console.log("No items");
                }
                setProd(querySnapshot.docs.map(document =>({
                        id: document.id, ...document.data()
                    }))
                );
            
            })
            .catch(error => {console.log(error)})
            .finally(() => setLoad(false));
        }
  
    }, [id])

    return (
        <div style={divStyle}>    
            {load && <Spinner animation="border" role="status"/> } 
            <ItemList listProduct={prod}/>              
        </div>
    )
}

const divStyle = {
    margin: 0
};

export default ItemListContainer;