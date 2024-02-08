import React, { useState,useRef,useEffect} from 'react';
import {IonModal} from '@ionic/react';
import { Link,useParams } from 'react-router-dom';
import './DetailsAnnonce.css';
import Sary from '../../assets/img/Audi Q3 2020.jpeg';
import { getListAnnonce } from '../../axios_utils'
import { ClipLoader } from 'react-spinners';
  
  const DetailsAnnonce = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [loading,setLoading] = useState(true);

    const {id_voiture} = useParams<any>();

    const handleClick = () => {
        setIsButtonClicked(true);

        setTimeout(() => {
            setIsButtonClicked(false);
            setIsModalOpen(false);
        }, 300);
    };

    useEffect(()=> {
        if (location.pathname==`/details/${id_voiture}`) {
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false);
        }
        setTimeout(() => {
            const url = `https://voiture-production-247e.up.railway.app/api/annonce/annonceValider/${id_voiture}`
            getListAnnonce(url)
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
    },[location.pathname])

    const element = data.length > 0 ? data[0] : null;

    return (
        <>
            {loading ? (
                <div className="spinner-container">
                    <ClipLoader loading={loading} />
                </div>
            ) : (
                <div className='details'>
                    <div className='voiture-photo'>
                        <img src={Sary} alt="" />
                    </div>
                    <IonModal className='ion-modal' ref={modal} trigger="open-modal" isOpen={isModalOpen} initialBreakpoint={0.4} breakpoints={[0.4, 0.4, 0.73]} backdropDismiss={false} backdropBreakpoint={0.5}>
                        <div className="voiture">
                            {element && (
                                <>
                                    <div className="voiture-name">
                                        <div className="voiture-name-categorie">
                                            <h1>{element.marque} {element.model}</h1>
                                        </div>
                                        <div className="voiture-price">
                                            <h2>{element.prix}</h2>
                                        </div>  
                                    </div>
                
                                    <div className="voiture-description">
                                        <p>
                                            {element.description}
                                        </p>
                                    </div>
                
                                    <div className="voiture-details">
                                        <h1>Propriétés</h1>
                                        <div className="propriete">
                                            <div className="prop-left">
                                                <p>Categorie: <span>{element.categorie}</span></p>
                                                <p>Marque: <span>{element.marque}</span></p>
                                                <p>Transmission: <span>{element.transmission}</span></p>
                                                <p>Origine: <span>{element.pays}</span></p>
                                                <p>Réservoir: <span>{element.reservoir}</span></p>
                                                <p>Kilometrage: <span>{element.kilometrage}</span></p>
                                                <p>Energie: <span>{element.energie}</span></p>
                                            </div>
                                            <div className="prop-right">
                                                <p>Modele: <span>{element.model}</span></p>
                                                <p>Annee: <span>{element.annee}</span></p>
                                                <p>Etat: <span>{element.etat}</span></p>
                                                <p>Places: <span>{element.place}</span></p>
                                                <p>Consommation: <span>{element.consommation}</span></p>
                                                <p>Matricule: <span>{element.matricule}</span></p>
                                                <p>Couleur: <span>{element.couleur}</span></p>
                                            </div>
                                        </div>
                                        <div className='statut'>
                                            <p>Statut: <span>Disponible</span></p>
                                        </div>
                                    </div>
                                    
                                    <Link to="">
                                        <button className="achat-button">ACHETER</button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </IonModal>
                </div>
            )}
        </>
    );
  };
  
  export default DetailsAnnonce;
  