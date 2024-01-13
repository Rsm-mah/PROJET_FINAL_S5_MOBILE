import React, { useState,useRef} from 'react';
import {IonModal} from '@ionic/react';
import { Link } from 'react-router-dom';
import './DetailsAnnonce.css';
import Sary from '../../assets/img/test3.jfif';
  
  const DetailsAnnonce = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleClick = () => {
        setIsButtonClicked(true);

        setTimeout(() => {
            setIsButtonClicked(false);
            setIsModalOpen(false);
        }, 300);
    };

    return (
        <div className='details'>
            <div className='voiture-photo'>
                <img src={Sary} alt="" />
            </div>
            <IonModal className='ion-modal' ref={modal} trigger="open-modal" isOpen={isModalOpen} initialBreakpoint={0.4} breakpoints={[0.25, 0.4, 0.65]} backdropDismiss={false} backdropBreakpoint={0.5}>
                <div className="voiture">
                    <div className="voiture-name">
                        <div className="voiture-name-categorie">
                            <h1>Peugeot 3008</h1>
                            <p>SUV</p>
                        </div>
                        <div className="voiture-price">
                            <h2>100.000 Ar</h2>
                        </div>  
                    </div>

                    <div className="voiture-description">
                        <p>
                            Discover the PEUGEOT SUV 3008 with its unique design with innovative SUV codes. Its characheristic and original design combines powwer and elegance with dynamism 
                            and flowing lines.
                        </p>
                    </div>

                    <div className="voiture-details">
                        <h1>Propriétés</h1>
                        <div className="propriete">
                            <div className="prop-left">
                                <p>Moteur: <span>120 hp</span></p>
                                <p>Capacité: <span>1580 cc</span></p>
                                <p>Vitesse: <span>Manuelle</span></p>
                                <p>Origine: <span>France</span></p>
                                <p>Kilometrage: <span>1000</span></p>
                            </div>
                            <div className="prop-right">
                                <p>Carburant: <span>Diesel</span></p>
                                <p>Traction: <span>4x2</span></p>
                                <p>Etat: <span>8</span></p>
                                <p>Places: <span>4</span></p>
                                <p>Couleur: <span>noir</span></p>
                            </div>
                        </div>
                        <div className='statut'>
                            <p>Statut: <span>Disponible</span></p>
                        </div>
                    </div>
                    <Link to="/modification">
                        <button className={`modif-button ${isButtonClicked ? 'button-clicked' : ''}`} onClick={handleClick}>MODIFIER</button>
                    </Link>
                </div>
            </IonModal>
        </div>
    );
  };
  
  export default DetailsAnnonce;
  