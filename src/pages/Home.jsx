import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import { getContactos } from "./services/servicesAPI.js";
import { ContactCard } from "../components/ContactCard.jsx";

export const Home = () => {

  const { store, dispatch } = useGlobalReducer()

  useEffect(() => {
    getContactos()
      .then(data => {
        //console.log("Respuesta de getContactos:", data);
        dispatch({ type: "set_contactos", payload: data });
      })
      .catch(err => console.error(err));
  }, [dispatch]);
  //console.log("Contactos en Home:", store.contactos);

  return (
    <div className="container">
      <h1>Contactos</h1>
      {(Array.isArray(store.contactos) ? store.contactos : []).map(contacto => (<ContactCard key={contacto.id} contact={contacto} />
      ))}
    </div>
  );
};