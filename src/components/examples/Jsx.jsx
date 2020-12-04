import React from 'react';

const user = {
    avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    name: "Pikachu",
    twitter: "pikachu"
};

const Jsx = () => {
    const url =`https://www.twitter.com/${user.twitter}`;
    return (
        <>
            <div className="cont-jsx">
                <h2 className="mt-5 mb-5"><span className="spantitleh2">Afficher des données en</span> JSX</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="h3-examples">Jsx.jsx</h3>
                            <div className="ascenseur text-center">
                                <img src="img/jsx.png" alt="Jsx.js" className="w-100" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="h3-examples">Aperçu</h3>
                            <div className="text-center">
                                <div className="w-100 mx-auto p-5 div-cont">
                                    <img src={user.avatar} alt={user.name} />
                                    <span> - {user.name}</span>
                                    <a href={url} className="text-info"> - @{user.twitter}</a>
                                </div>                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Jsx;




