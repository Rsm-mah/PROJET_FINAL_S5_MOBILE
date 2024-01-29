import React, { useState } from 'react';
import {
    IonPage,
    IonIcon,
    IonContent
} from '@ionic/react';
import './DetailAnnonceProfil.css';
import { arrowBack } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Sary2 from '../../assets/img/Audi Q3 2020.jpeg';
  
  const DetailAnnonceProfil = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleClick = () => {
        setIsButtonClicked(true);

        setTimeout(() => {
            setIsButtonClicked(false);
        }, 300);
    };
    
    return (
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
                        <h1>Peugeot 3008</h1>
                    </div>

                    <div className="voiture-price">
                        <h2>100.000 Ar</h2>
                    </div>

                    <div className="voiture-description">
                        <p>
                            Discover the PEUGEOT SUV 3008 with its unique design with innovative SUV codes. Its characheristic and original design combines powwer and elegance with dynamism 
                            and flowing lines.
                        </p>
                    </div>

                    <div className="voiture-details">
                        <div className="propriete-left">
                            <div className="propriete">
                                <h4>Categorie :</h4>
                                <p>SUV</p>
                            </div>

                            <div className="propriete">
                                <h4>Marque :</h4>
                                <p>Peugeot</p>
                            </div>

                            <div className="propriete">
                                <h4>Modèle :</h4>
                                <p>3008</p>
                            </div>

                            <div className="propriete">
                                <h4>Couleur :</h4>
                                <p>Noir</p>
                            </div>

                            <div className="propriete">
                                <h4>Année :</h4>
                                <p>2024</p>
                            </div>

                            <div className="propriete">
                                <h4>Origine :</h4>
                                <p>France</p>
                            </div>
                        </div>

                        <div className="propriete-right">
                            <div className="propriete">
                                <h4>Transmission :</h4>
                                <p>Manuelle</p>
                            </div>

                            <div className="propriete">
                                <h4>Carburant :</h4>
                                <p>Essence</p>
                            </div>

                            <div className="propriete">
                                <h4>Energie :</h4>
                                <p></p>
                            </div>

                            <div className="propriete">
                                <h4>Matricule :</h4>
                                <p>AAAA</p>
                            </div>

                            <div className="propriete">
                                <h4>Kilometrage :</h4>
                                <p>1000</p>
                            </div>

                            <div className="propriete">
                                <h4>Places :</h4>
                                <p>4</p>
                            </div>
                        </div>
                        

                        
                    </div>
                </div>

                <div className="button">
                    <Link to="/modification">
                        <button className="button-valider">MODIFIER</button>
                    </Link>
                </div>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default DetailAnnonceProfil;
  