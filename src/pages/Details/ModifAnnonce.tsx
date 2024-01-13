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
                                    <SelectP title="CATEGORIE" options={['CAT 1','CAT 2','CAT 3','CAT 4']}/>
                                </div>

                                <div className="select-marque">
                                    <SelectP title="MARQUE" options={['MARQUE 1','MARQUE 1','MARQUE 1','MARQUE 1']}/>
                                </div>

                                <div className="select-modele">
                                    <SelectP title="MODELE" options={['MODELE 1','MODELE 1','MODELE 1','MODELE 1']}/>
                                </div>

                                <div className="select-vitesse">
                                    <SelectP title="VITESSE" options={['MANUELLE','AUTOMATIQUE']}/>
                                </div>

                                <div className="select-origine">
                                    <SelectP title="ORIGINE" options={['FRANCE','ALLEMAGNE']}/>
                                </div>

                                <div className="select-carburant">
                                    <SelectP title="CARBURANT" options={['ESSENCE','DIESEL']}/>
                                </div>

                                <div className="select-couleur">
                                    <SelectP title="COULEUR" options={['NOIR','ROUGE']}/>
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
  