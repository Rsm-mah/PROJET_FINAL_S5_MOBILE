import React, { useState} from 'react';
import {
    IonPage,
    IonIcon,
    IonContent
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { arrowBack  } from 'ionicons/icons';
import './ModifAnnonce.css';
import { SelectP } from '../../components/Select/SelectP';
  
  const ModifAnnonce = () => {
    const [selectedCategorie, setSelectedCategorie] = useState('');
    const [selectedMarque, setSelectedMarque] = useState('');
    const [selectedModele, setSelectedModele] = useState('');
    const [selectedCarburant, setSelectedCarburant] = useState('');
    const [selectedOrigine, setSelectedOrigine] = useState('');
    const [selectedTransmission, setSelectedTransmission] = useState('');
    const [selectedEnergie, setSelectedEnergie] = useState('');

    return (
      <IonPage>
          <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-modif'>
                <div className='modif-header'>
                    <div className='icon-arrowBack'>
                        <Link to="/details">
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
                                <div className="select-categorie">
                                    <SelectP title="CATEGORIE" options={['CAT 1','CAT 2','CAT 3','CAT 4']} selectedValue={selectedCategorie} onValueChange={setSelectedCategorie}/>
                                </div>

                                <div className="select-marque">
                                    <SelectP title="MARQUE" options={['MARQUE 1','MARQUE 1','MARQUE 1','MARQUE 1']} selectedValue={selectedMarque} onValueChange={setSelectedMarque}/>
                                </div>

                                <div className="select-modele">
                                    <SelectP title="MODELE" options={['MODELE 1','MODELE 1','MODELE 1','MODELE 1']} selectedValue={selectedModele} onValueChange={setSelectedModele}/>
                                </div>

                                <div className="select-vitesse">
                                    <SelectP title="TRANSMISSION" options={['MANUELLE','AUTOMATIQUE']} selectedValue={selectedTransmission} onValueChange={setSelectedTransmission}/>
                                </div>

                                <div className="select-origine">
                                    <SelectP title="ORIGINE" options={['FRANCE','ALLEMAGNE']} selectedValue={selectedOrigine} onValueChange={setSelectedOrigine}/>
                                </div>

                                <div className="select-carburant">
                                    <SelectP title="CARBURANT" options={['ESSENCE','DIESEL']} selectedValue={selectedCarburant} onValueChange={setSelectedCarburant}/>
                                </div>

                                <div className="select-carburant">
                                    <SelectP title="ENERGIE" options={['ELECTRIQUE','HYBRIDE']} selectedValue={selectedEnergie} onValueChange={setSelectedEnergie}/>
                                </div>
                                
                            </div>

                            <div className="link">
                                <Link to="/details" className='link-back'>Annuler</Link>
                                <Link to='/modificationsuite' className='link-next'>Suivant</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default ModifAnnonce;
  