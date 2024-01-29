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
  
  const AjoutAnnonceThree = () => {
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
                                <div className="input-matricule">
                                    <input type="text" placeholder="MATRICULE" required />
                                </div>

                                <div className="input-kilometrage">
                                    <input type="text" placeholder="KILOMETRAGE" required />
                                </div>
                            </div>

                            <div className="link">
                                <Link to="/ajoutannoncetwo" className='link-back'>Annuler</Link>
                                <Link to='/ajoutannoncefour' className='link-next'>Suivant</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default AjoutAnnonceThree;
  