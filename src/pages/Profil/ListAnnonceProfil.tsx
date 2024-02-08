import React, { useState, useEffect } from 'react';
import './Profil.css';
import { Link } from 'react-router-dom';
import { getListAnnonceProfil } from '../../axios_utils'
  
  const ListAnnonceProfil = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            getListAnnonceProfil('https://voiture-production-247e.up.railway.app/api/annonce/listeannonce')
            .then(response => {
                if (response) {
                    setData(response.data);
                    console.log(response.data);
                } else {
                    console.log('Response is undefined');
                }
            })
            .catch(error => {
                console.log('Error fetching data', error);
            })
        })
    }, []);

    return (
        <>
            {
            <div className="listAnnonce">
                {data.map((data, index) => (
                    <div className="annonce" key={index}>
                        <Link to={`/detailannonceprofil/${data.id_voiture}`}>
                            {/* <img src={Sary} alt="" /> */}
                            <p>{data.id_voiture}</p>
                        </Link>
                    </div>
                ))}
                {/* <div className="annonce">
                    <Link to="/detailannonceprofil">
                        <img src={Sary} alt="" />
                    </Link>
                </div>
                <div className="annonce">
                    <Link to="/detailannonceprofil">
                        <img src={Sary} alt="" />
                    </Link>
                </div>
                <div className="annonce">
                    <Link to="/detailannonceprofil">
                        <img src={Sary} alt="" />
                    </Link>
                </div>
                <div className="annonce">
                    <Link to="/detailannonceprofil">
                        <img src={Sary} alt="" />
                    </Link>
                </div>
                <div className="annonce">
                    <Link to="/detailannonceprofil">
                        <img src={Sary} alt="" />
                    </Link>
                </div> */}
            </div>
            }
        </>
    );
  };
  
  export default ListAnnonceProfil;
  