import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const AñadirContacto = () => {
    // Access the global state and dispatch function using the useGlobalReducer hook.
    const { store, dispatch } = useGlobalReducer()

    return (

        <div className="container">
            <form className="row g-3">
                <h1> Añadir nuevo contacto</h1>
                <div className="col-md-12">
                    <label for="validationDefault01" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="validationDefault01" value="Mark" required />
                </div>
                <div className="col-md-12">
                    <label for="validationDefaultUsername" className="form-label">Email</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                    </div>
                </div>
                <div className="col-md-12">
                    <label for="validationDefault03" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="validationDefault03" pattern="[0-9]*" inputmode="numeric" required />
                </div>
                
                <div className="col-md-12">
                    <label for="validationDefault05" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="validationDefault05" required />
                </div>
                
                <div className="col-md-12 w-100">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div >
    )}