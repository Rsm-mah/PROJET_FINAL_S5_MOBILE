import React, { useState} from 'react';
import {
    IonPage,
    IonIcon,
    IonContent
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { arrowBack  } from 'ionicons/icons';
import './AjoutAnnonce.css';
import { SelectP } from '../../components/Select/SelectP';
  
  const AjoutAnnonceTwo = () => {
    const [selectedOrigine, setSelectedOrigine] = useState('');
    const [selectedEnergie, setSelectedEnergie] = useState('');

    return (
      <IonPage>
          <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-ajout'>
                <div className='ajout-header'>
                    <div className="title">
                        <h2>Nouvelle annonce</h2>
                    </div>
                </div>

                <div className="body_ajout">
                    <div className="formulaire">
                        <form action="" method="post">
                            <div className="input-group">
                                <div className="select-origine">
                                    <SelectP title="ORIGINE" options={['FRANCE','ALLEMAGNE']} selectedValue={selectedOrigine} onValueChange={setSelectedOrigine}/>
                                </div>

                                <div className="select-energie">
                                    <SelectP title="ENERGIE" options={['ELECTRIQUE','HYBRIDE']} selectedValue={selectedEnergie} onValueChange={setSelectedEnergie}/>
                                </div>

                                <div className="input-place">
                                    <input type="number" placeholder="PLACES" required />
                                </div>
                            </div>

                            <div className="link">
                                <Link to="/ajoutannonce" className='link-back'>Annuler</Link>
                                <Link to='/ajoutannoncethree' className='link-next'>Suivant</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default AjoutAnnonceTwo;
  