import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useState, useEffect } from "react";
//import servicesAPI from "./services/servicesAPI";
import { crearContacto, actualizarContacto } from "./services/servicesAPI";
import { useNavigate } from "react-router-dom";

export const AgregarContacto = () => {
    // Access the global state and dispatch function using the useGlobalReducer hook.
    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams();
    const editar = !!id;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""

    });
    useEffect(() => {
        if (editar) {
            const contacto = store.contactos.find(c => c.id === parseInt(id));
            if (contacto) setFormData(contacto);
        }
    }, [editar, id, store.contactos]);


    //maneja cambios en inputModes
    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); //no recargar la pagina
        try {
            const result = editar
                ? await actualizarContacto(id, formData)
                : await crearContacto(formData);


            dispatch({
                type: editar ? "update_contacto"
                    : "add_contacto", payload: result
            });
            if (!editar) {

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    address: ""
                });
            }else{
            navigate("/"); // Redirigir a la página principal después de agregar o editar el contacto.
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <div className="container mt-4">

            <form className="row g-3" onSubmit={handleSubmit}>
                <h1>{editar ? "Editar Contacto" : "Agregar nuevo contacto"}</h1>
                <div className="col-md-12">
                    <label htmlFor="validationDefault01" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Mark" onChange={handleChange} value={formData.name} required />
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="email" name="email" aria-describedby="inputGroupPrepend2" placeholder="@" onChange={handleChange} value={formData.email} required />
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationDefault03" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" name="phone" pattern="[0-9]*" inputMode="numeric" placeholder="666-666-666" onChange={handleChange} value={formData.phone} required />
                </div>

                <div className="col-md-12">
                    <label htmlFor="validationDefault05" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="dirección" name="address" placeholder="St" onChange={handleChange} value={formData.address} required />
                </div>

                <div className="col-md-6 w-100 ">
                    <button className="btn btn-success ms-2" type="submit">
                        {editar ? "Actualizar" : "Guardar"} </button>
                    <Link to="/">
                        <button className="btn btn-primary ms-2">Cancelar</button>
                    </Link>
                </div>
            </form>
        </div >
    );
};