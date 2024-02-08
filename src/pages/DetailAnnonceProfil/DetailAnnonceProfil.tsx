import React, { useState, useEffect } from 'react';
import {
    IonPage,
    IonIcon,
    IonContent
} from '@ionic/react';
import './DetailAnnonceProfil.css';
import { arrowBack } from 'ionicons/icons';
import { Link,useParams } from 'react-router-dom';
import Sary2 from '../../assets/img/Audi Q3 2020.jpeg';
import { getListAnnonceProfil } from '../../axios_utils'
  
  const DetailAnnonceProfil = () => {
    const [data, setData] = useState([]);
    const [etatBouton, setEtatBouton] = useState('DISPONIBLE');

    const handleClick = () => {
        setEtatBouton((etatActuel) => (etatActuel === 'DISPONIBLE' ? 'VENDU' : 'DISPONIBLE'));
    };

    const {id_voiture} = useParams<any>();
    // console.log(id_voiture);

    useEffect(() => {
        setTimeout(() => {
            const url = `https://voiture-production-247e.up.railway.app/api/annonce/listeannonce/${id_voiture}`
            getListAnnonceProfil(url)
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

    const element = data.length > 0 ? data[0] : null;
    
    
    return (
        <> 
            {
                <IonPage>
                <IonContent className='ion-content' fullscreen={true}>
                  <section className='ion-content-body-annonce-profil'>
                      <div className='detail-header'>
                          <div className='icon-arrowBack' >
                              <Link to="/profil">
                                  <IonIcon aria-hidden="true" icon={arrowBack} />
                              </Link>
                          </div>
                      </div>
      
                      <div className='detail-picture'>
                          <img src={Sary2} alt="" />
                      </div>
      
                      <div className="details">
                            <div className="voiture-name">
                                {element && (
                                <>
                                    <h1>{element.marque} {element.model}</h1>
                                </>
                                )}
                            </div>

                            <div className="voiture-price">
                                {element && (
                                <>
                                    <h2>
                                        {element.prix}
                                    </h2>
                                </>
                                )}
                            </div>
        
                            <div className="voiture-description">
                                {element && (
                                <>
                                    <p>
                                        {element.description}
                                    </p>
                                </>
                                )}
                            </div>
      
                          <div className="voiture-details">
                                <div className="propriete-left">
                                    {element && (
                                    <>
                                        <div className="propriete">
                                            <h4>Categorie :</h4>
                                            <p>{element.categorie}</p>
                                        </div>
            
                                        <div className="propriete">
                                            <h4>Marque :</h4>
                                            <p>{element.marque}</p>
                                        </div>
            
                                        <div className="propriete">
                                            <h4>Modèle :</h4>
                                            <p>{element.model}</p>
                                        </div>
            
                                        <div className="propriete">
                                            <h4>Couleur :</h4>
                                            <p>{element.couleur}</p>
                                        </div>
            
                                        <div className="propriete">
                                            <h4>Année :</h4>
                                            <p>{element.annee}</p>
                                        </div>
            
                                        <div className="propriete">
                                            <h4>Origine :</h4>
                                            <p>{element.pays}</p>
                                        </div>
                                        </>
                                    )}
                                </div>
      
                              <div className="propriete-right">
                                    {element && (
                                    <>
                                        <div className="propriete">
                                            <h4>Transmission :</h4>
                                            <p>{element.transmission}</p>
                                        </div>
            
                                        <div className="propriete">
                                            <h4>Energie :</h4>
                                            <p>{element.energie}</p>
                                        </div>
            
                                        <div className="propriete">
                                            <h4>Matricule :</h4>
                                            <p>{element.matricule}</p>
                                        </div>

                                        <div className="propriete">
                                            <h4>Etat :</h4>
                                            <p>{element.etat}</p>
                                        </div>
            
                                        <div className="propriete">
                                            <h4>Kilometrage :</h4>
                                            <p>{element.kilometrage}</p>
                                        </div>
            
                                        <div className="propriete">
                                            <h4>Places :</h4>
                                            <p>{element.place}</p>
                                        </div>
                                    </>
                                    )}
                              </div>
                              
      
                              
                          </div>
                      </div>
      
                      <div className="button">
                          {/* <Link to=""> */}
                            {element && (
                                <>
                                    <button className={`button-valider ${element.status === '1' ? 'vendu' : ''}`} onClick={handleClick}>
                                        {/* {console.log(element.status)} */}
                                        {etatBouton}
                                    </button>
                                </>
                            )}
                          {/* </Link> */}
                      </div>
                  </section>
                </IonContent>
            </IonPage>
            }
        </>
    );
  };
  
  export default DetailAnnonceProfil;
  