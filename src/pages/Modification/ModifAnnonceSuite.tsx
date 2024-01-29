import React, { useState} from 'react';
import {
    IonPage,
    IonIcon,
    IonContent
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { arrowBack } from 'ionicons/icons';
import './ModifAnnonce.css';
import { SelectP } from '../../components/Select/SelectP';
  
  const ModifAnnonceSuite = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [selectedCouleur, setSelectedCouleur] = useState('');

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
                                    <div className="input-month">
                                        <input type="month" />
                                    </div>

                                    <div className="select-couleur">
                                        <SelectP title="COULEUR" options={['NOIR','ROUGE']} selectedValue={selectedCouleur} onValueChange={setSelectedCouleur}/>
                                    </div>

                                    <div className="input-place">
                                        <input type="number" placeholder="PLACES" required />
                                    </div>

                                    <div className="input-matricule">
                                        <input type="text" placeholder="MATRICULE" required />
                                    </div>

                                    <div className="input-kilometrage">
                                        <input type="text" placeholder="KILOMETRAGE" required />
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
  