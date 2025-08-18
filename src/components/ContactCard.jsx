import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { eliminarContacto, getContactos } from "../pages/services/servicesAPI";
import { useNavigate } from "react-router-dom";
import { Modal } from "./Modal";

export const ContactCard = ({ contact }) => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  if (!contact) return null;
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await eliminarContacto(contact.id);
      dispatch({ type: "delete_contacto", payload: contact.id });

      const updatedContacts = await getContactos();
      dispatch({ type: "set_contactos", payload: updatedContacts });
    } catch (error) {
      console.error("Error al eliminar contacto:", error);
    }
  };
  const handleEdit = () => {
    navigate(`/AgregarContacto/${contact.id}`);
  };
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="card mb-2 p-2">
      <div className="d-flex justify-content-between align-items-center">
        <h5>{contact.name}</h5>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={handleEdit}>
            <i className="fa-solid fa-pen"></i>
          </button>
          <button className="btn btn-danger" onClick={openModal}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <div>
        <p>{contact.email} | {contact.phone} | {contact.address}</p>
      </div>
      {showModal && (
        <Modal
          show={showModal}
          title="¿Eliminar contacto?"
          onClose={closeModal}
          onConfirm={async () => {
            await handleDelete();
            closeModal();
          }}
        >
          <p>¿Estás seguro de que deseas eliminar este contacto?</p>
        </Modal>
      )}
    </div>
  );
};