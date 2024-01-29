import React, { useState,useRef,useEffect} from 'react';
import {IonModal} from '@ionic/react';
import { Link,useLocation } from 'react-router-dom';
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

    useEffect(()=> {
        if (location.pathname=="/details") {
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false);
        }
    },[location.pathname])

    return (
        <div className='details'>
            <div className='voiture-photo'>
                <img src={Sary} alt="" />
            </div>
            <IonModal className='ion-modal' ref={modal} trigger="open-modal" isOpen={isModalOpen} initialBreakpoint={0.4} breakpoints={[0.25, 0.4, 0.70]} backdropDismiss={false} backdropBreakpoint={0.5}>
                <div className="voiture">
                    <div className="voiture-name">
                        <div className="voiture-name-categorie">
                            <h1>Peugeot 3008</h1>
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
                                <p>Categorie: <span>SUV</span></p>
                                <p>Marque: <span>Peugeot</span></p>
                                <p>Transmission: <span>Manuelle</span></p>
                                <p>Origine: <span>France</span></p>
                                <p>Kilometrage: <span>1000</span></p>
                                <p>Energie: <span></span></p>
                            </div>
                            <div className="prop-right">
                                <p>Modele: <span></span></p>
                                <p>Annee: <span>2024</span></p>
                                <p>Carburant: <span>Diesel</span></p>
                                <p>Places: <span>4</span></p>
                                <p>Matricule: <span>AAAA</span></p>
                                <p>Couleur: <span>Noir</span></p>
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
  