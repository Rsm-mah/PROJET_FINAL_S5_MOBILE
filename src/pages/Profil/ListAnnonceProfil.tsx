import React, { useState, useEffect } from 'react';
import './Profil.css';
import { Link } from 'react-router-dom';
import { getListAnnonceProfil } from '../../axios_utils'
import { ClipLoader } from 'react-spinners';
  
  const ListAnnonceProfil = () => {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            getListAnnonceProfil('https://voiture-production-247e.up.railway.app/api/annonce/listeannonce')
            .then(response => {
                if (response) {
                    setData(response.data);
                    setLoading(false);
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
            {loading ? (
                <div className="spinner-container">
                    <ClipLoader loading={loading} />
                </div>
            ) : (
            <div className="listAnnonce">
                {data.map((data, index) => (
                    <div className="annonce" key={index}>
                        <Link to={`/detailannonceprofil/${data.id_voiture}`}>
                            <img src={data.photo} alt="" />
                        </Link>
                    </div>
                ))}
            </div>
            )}
        </>
    );
  };
  
  export default ListAnnonceProfil;
  