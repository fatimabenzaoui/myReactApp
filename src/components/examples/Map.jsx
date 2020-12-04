import React from 'react';

import { users } from '../../constants';

const Map = () => {
    return (
        <>
            <h2 className="mt-5 mb-5"><span className="spantitleh2">Parcourir un tableau avec</span> map()</h2>            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="h3-examples">constants/users.jsx</h3>
                        <img src="img/users.png" alt="users.js" className="w-100" />
                    </div>
                    <div className="col-md-4">
                        <h3 className="h3-examples">Map.jsx</h3>
                        <img src="img/map.png" alt="map.js" className="w-100" />
                    </div>
                    <div className="col-md-4">
                        <h3 className="h3-examples">Aperçu</h3>
                        <table className="table table-bordered table-hover table-secondary table-striped w-100 mx-auto text-dark">
                            <thead>
                                <tr>
                                    <th>id</th><th>avatar</th><th>name</th><th>email</th>
                                </tr>
                            </thead>
                            <tbody>
                                { users.map(({ id, avatar, name, email }) => (
                                <tr key={ id }>
                                    <td>{ id + 1 }</td>
                                    <td><img src={ avatar } alt={ name } className="avatar" /></td>
                                    <td>{ name }</td>
                                    <td>{ email }</td>
                                </tr>
                                )) }
                            </tbody>
                        </table>
                    </div>
                </div>                
            </div> 
        </>
    );
}

export default Map;


