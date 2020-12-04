import React, { useState } from 'react';

const State3 = () => {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(number1 + number2);

    function additionne(e) {
        e.preventDefault();
        setTotal(number1 + number2);
    }
 
    return (
        <>
            <h2 className="mt-5 mb-5"><span className="spantitleh2">Gérer un évènement</span> onClick avec useState() - 3</h2>
            <div className="container">
                <div className="row">                    
                    <div className="col-md-6">
                        <h3 className="h3-examples">State3.jsx</h3>
                        <img src="img/state3.png" alt="State.js" className="w-100" /> 
                    </div>
                    <div className="col-md-6">
                        <h3 className="h3-examples">Aperçu</h3>
                        <form className="mx-auto p-5 div-cont">
                            <div className="w-100 mx-auto">
                                <input type="number" placeholder="0" className="p-2 item" 
                                    value={number1} 
                                    onChange={e => setNumber1(+e.target.value)}                        
                                />
                                <input type="number" placeholder="0" className="ml-2 p-2 item"
                                    value={number2} 
                                    onChange={e => setNumber2(+e.target.value)} 
                                />
                                <span onClick={additionne} className="p-2 ml-2 btn btn-sm btn-dark shadow-none mb-1">=</span>
                                <p className="ml-2 p-2 bg-white text-dark d-inline-block">{total}</p>
                            </div>                   
                        </form>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default State3;