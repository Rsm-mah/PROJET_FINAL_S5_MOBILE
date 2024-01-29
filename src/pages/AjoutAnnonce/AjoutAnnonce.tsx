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
  
  const AjoutAnnonce = () => {
    const [selectedCategorie, setSelectedCategorie] = useState('');
    const [selectedMarque, setSelectedMarque] = useState('');
    const [selectedModele, setSelectedModele] = useState('');
    const [selectedCarburant, setSelectedCarburant] = useState('');
    const [selectedTransmission, setSelectedTransmission] = useState('');

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
                                <div className="select-categorie">
                                    <SelectP title="CATEGORIE" options={['CAT 1','CAT 2','CAT 3','CAT 4']} selectedValue={selectedCategorie} onValueChange={setSelectedCategorie}/>
                                </div>

                                <div className="select-marque">
                                    <SelectP title="MARQUE" options={['MARQUE 1','MARQUE 1','MARQUE 1','MARQUE 1']} selectedValue={selectedMarque} onValueChange={setSelectedMarque}/>
                                </div>

                                <div className="select-modele">
                                    <SelectP title="MODELE" options={['MODELE 1','MODELE 1','MODELE 1','MODELE 1']} selectedValue={selectedModele} onValueChange={setSelectedModele}/>
                                </div>

                                <div className="input-month">
                                    <input type="month" required />
                                </div>

                                <div className="select-carburant">
                                    <SelectP title="CARBURANT" options={['ESSENCE','DIESEL']} selectedValue={selectedCarburant} onValueChange={setSelectedCarburant}/>
                                </div>

                                <div className="select-transmission">
                                    <SelectP title="TRANSMISSION" options={['MANUELLE','AUTOMATIQUE']} selectedValue={selectedTransmission} onValueChange={setSelectedTransmission}/>
                                </div>

                                
                            </div>

                            <div className="link">
                                <Link to="/annonce" className='link-back'>Annuler</Link>
                                <Link to='/ajoutannoncetwo' className='link-next'>Suivant</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default AjoutAnnonce;
  