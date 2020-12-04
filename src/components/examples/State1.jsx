import React, { useState } from 'react';

const State1 = () => {
    const [id, setId] = useState(1);
    const [name, setName] = useState('Toto');
  
    return (
        <>
            <h2 className="mt-5 mb-5"><span className="spantitleh2">Gérer un évènement</span> onChange avec useState() - 1</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="h3-examples">State1.jsx</h3>
                        <img src="img/state1.png" alt="State.js" className="w-100" /> 
                    </div>
                    <div className="col-md-6">
                        <h3 className="h3-examples">Aperçu</h3>
                        <form className="w-100 mx-auto p-4 div-cont">
                            <label>ID </label>
                            <input onChange={ (e) => setId(+e.target.value) } type="number" value={ id } className="form-control shadow-none" />
                            <label>NAME </label>
                            <input onChange={ (e) => setName(e.target.value) } type="text" value={ name } className="form-control shadow-none" />
                            <p className="mt-3 text-decoration">Afficher les chgts d'état</p>
                            <p>id : <span className="text-info">{ id }</span> - name : <span className="text-info">{ name }</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default State1;