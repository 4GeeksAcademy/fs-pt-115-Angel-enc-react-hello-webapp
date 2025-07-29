import { Navigate, useNavigate } from "react-router-dom";

const BASE_URL = "https://playground.4geeks.com/contact/agendas";
const AGENDA_SLUG = "Agenda-enc";

export const getContactos = async () => {
  const response = await fetch(`${BASE_URL}/${AGENDA_SLUG}/contacts`);
  //console.log("Respuesta del servidor:", response);
  
  if (!response.ok) throw Error("Error al obtener contactos");
  const data = await response.json();
  //console.log("Datos obtenidos:", data);
  
  return Array.isArray(data.contacts) ? data.contacts : [];
};

export const crearContacto = async contactoData =>
  fetch(`${BASE_URL}/${AGENDA_SLUG}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...contactoData, agenda_slug: AGENDA_SLUG })
  }).then(response => {
    //console.log("Respuesta del servidor:", response);

    if (!response.ok) throw Error("Error al crear");
    return response.json();
  });

export const actualizarContacto = async (id, dataActualizado) =>
  fetch(`${BASE_URL}/${AGENDA_SLUG}/contacts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...dataActualizado, agenda_slug: AGENDA_SLUG })
  }).then(response => {
    if (!response.ok) throw Error("Error al actualizar contacto");
 
    return response.json();
  });


export const eliminarContacto = async id =>
  fetch(`${BASE_URL}/${AGENDA_SLUG}/contacts/${id}`, {
    method: "DELETE"
  }).then(response => {
    //console.log("contacto eliminado");
    
    if (!response.ok) throw Error(" Error al eliminar");
    return true;
  });