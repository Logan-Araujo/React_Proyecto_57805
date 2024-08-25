import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ItemContext } from "../contexts/ItemsContext";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import Container from "react-bootstrap/Container";
import { ItemCount } from "./ItemCount";



export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLogading] = useState(true);

    const {addItem} = useContext(ItemContext)

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

    const refDoc = doc(db, "items", id);

    getDoc(refDoc).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    })

       .finally(() => setLogading(false));
    }, [id]);

    const onAdd = (count) => {
        addItem({ ...item, quantity: count })
    }

    if(loading) return <Container className="mt-4">Cargando...</Container>

    if(!item) return <Container className="mt-4">No hay productos</Container>

   return ( 
   <Container className="mt-4">
        <h1>Producto</h1>
        <h2>{item.title}</h2>
        <img src={item.imageId} height={200} />
        <h4>{item.categoryId}</h4>
        <p>{item.description}</p>
        <ItemCount stock={item.stock} onAdd={onAdd} />
    </Container>
    );
};