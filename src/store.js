import { useActionState } from "react";

export const initialStore=()=> ({
    message: null,
    contactos: [], 
    contactoAEliminar: null
  });

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case "set_contactos":
        return {...store, contactos:action.payload};
    case "add_contacto": 
      return {
        ...store, contactos: [...store.contactos, action.payload] };
    case "edit_contacto":
        return {
          ...store, contactos: store.contactos.map(c => c.id === action.payload.id ? action.payload : c)
        };
    case "update_contacto":
      return{...store,contactos: store.contactos.map(c => c.id === action.payload.id ? action.payload : c)};
    case "delete_contacto":
      return {...store, contactos: store.contactos.filter(c => c.id !== action.payload)};
    case "set_contacto_a_eliminar":
      return {...store, contactoAEliminar: action.payload};
      default:
      throw Error('Unknown action.');
  }    
}