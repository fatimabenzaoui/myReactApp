import React, { useState } from 'react';

const State2 = () => {
    const [password, setPassword] = useState('');

    if (password === '1234') {
        alert('password ok !');
    }
   
    return (
        <>
            <h2 className="mt-5 mb-5"><span className="spantitleh2">Gérer un évènement</span> onChange avec useState() - 2</h2>
            <div className="container">
                <div className="row">                    
                    <div className="col-md-6">
                        <h3 className="h3-examples">State2.jsx</h3>
                        <img src="img/state2.png" alt="State.js" className="w-100" /> 
                    </div>
                    <div className="col-md-6">
                        <h3 className="h3-examples">Aperçu</h3>
                        <form className="w-100 mx-auto p-4 div-cont">
                            <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter your password" value={password} className="form-control shadow-none" />
                            <p className="mt-3 text-decoration text-center">Password = 1234</p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default State2;