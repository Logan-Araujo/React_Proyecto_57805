import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore"

import { ItemContext } from "../contexts/ItemsContext";

const initialValues = {
  phone: "",
  email: "",
  name: "",
};

export const Cart = () => {

  const [buyer, setBuyer] = useState(initialValues);

    const { items, reset } = useContext(ItemContext);

    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

    const handleChange = (ev) => {
      setBuyer(prev => {
        return { ...prev, [ev.target.name]: ev.target.value };
      }); 
    };

    const handleOrder = () => {
      const order = {
        buyer,
        items,
        total,
      };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
        reset()
        setBuyer(initialValues)
      }
    });
  };

  if(!items.length) return "No has comprado nada.";

    return (
    <>
    <button onClick={reset}>Reset</button>
    {items?.map((i) => (
    <div key={i.id}>
        <h1>{i.title}</h1>
        <img src={i.imageId} height={100} />
        <h2>Cantidad: {i.quantity}</h2>
        <h3>Precio: {i.price}</h3>
    </div>
    ))}
    <h4>Total: {total}</h4>
    <hr />{!!items.length &&
    <form className="needs-validation login" action="">
      <div className="form-group was-validated" >
        <label>Nombre</label>
        <input className="form-control" required type="text" value={buyer.name} onChange={handleChange} name="name" />
        <div className="invalid-feedback" >
          Por favor introduzca su nombre.
        </div>
      </div>
      <div className="form-group was-validated">
        <label>Email</label>
        <input className="form-control" required type="email" value={buyer.email} onChange={handleChange} name="email" />
        <div className="invalid-feedback" >
          Por favor introduzca su email.
        </div>
      </div>
      <div className="form-group was-validated">
        <label>Teléfono</label>
        <input className="form-control" required type="number" value={buyer.phone} onChange={handleChange} name="phone" />
        <div className="invalid-feedback" >
          Por favor introduzca su telefono.
        </div>
      </div>
      <button type="button" onClick={handleOrder}>Comprar</button>
    </form>}
   </>
  );
};