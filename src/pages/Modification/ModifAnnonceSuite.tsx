import React, { useState} from 'react';
import {
    IonPage,
    IonIcon,
    IonContent
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { arrowBack } from 'ionicons/icons';
import './ModifAnnonce.css';
  
  const ModifAnnonceSuite = () => {
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
            <section className='ion-content-body-modif'>
                <div className='modif-header'>
                    <div className='icon-arrowBack'>
                        <Link to="/modification">
                            <IonIcon aria-hidden="true" icon={arrowBack} />
                        </Link>
                    </div>
                    <div className="title">
                        <h2>Modification</h2>
                    </div>
                </div>

                <div className="body_modif">
                        <div className="formulaire">
                            <form action="" method="post">
                                <div className="input-group">
                                    <div className="input-moteur">
                                        <input type="text" placeholder="MOTEUR" required />
                                    </div>

                                    <div className="input-capacite">
                                        <input type="text" placeholder="CAPACITE" required />
                                    </div>

                                    <div className="input-traction">
                                        <input type="text" placeholder="TRACTION" required />
                                    </div>

                                    <div className="input-etat">
                                        <input type="text" placeholder="ETAT" required />
                                    </div>

                                    <div className="input-place">
                                        <input type="number" placeholder="PLACES" required />
                                    </div>

                                    
                                </div>

                                <div className="button">
                                    <Link to="/modification">Retour</Link>
                                    <button className={`button-valider ${isButtonClicked ? 'button-valider-clicked' : ''}`} onClick={handleClick}>VALIDER</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default ModifAnnonceSuite;
  