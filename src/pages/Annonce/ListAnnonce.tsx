import React, { useState, useEffect } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';
import './Annonce.css';
import Sary from '../../assets/img/Audi Q3 2020.jpeg';
import { getListAnnonce } from '../../axios_utils'
import { ClipLoader } from 'react-spinners';
  
  const ListAnnonce = () => {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            getListAnnonce('https://voiture-production-247e.up.railway.app/api/annonce/annonceValider')
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
                data.map((data, index) => (
                    <div className="annonce" key={index}>
                        <IonCard>
                            <img src={data.photo} alt="" />
                            <IonCardHeader>
                                <IonCardTitle>{data.marque} {data.model}</IonCardTitle>
                                <IonCardSubtitle>{data.prix} Ar</IonCardSubtitle>

                                <IonCardContent>
                                    Status : {data.status === 0 ? "Disponible" : "Vendu"}
                                    <Link to={`/details/${data.id_voiture}`}>
                                        Voir Détail
                                    </Link>
                                </IonCardContent>
                            </IonCardHeader>
                        </IonCard>
                    </div>
                ))
            )}
        </>
    );
  };
  
  export default ListAnnonce;
  