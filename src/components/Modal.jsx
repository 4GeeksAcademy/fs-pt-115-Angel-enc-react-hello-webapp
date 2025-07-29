import React from "react";

export const Modal = ({ title, children, onClose, onConfirm, show }) => {
  return (
    <>
      <div className={`modal-backdrop ${show ? "show" : "d-none"}`}></div>
      <div className={`modal ${show ? "d-block show" : "d-none"}`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
              <button className="btn btn-danger" onClick={onConfirm}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

