import React, { useState} from 'react';
import {
    IonPage,
    IonIcon,
    IonContent
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { arrowBack  } from 'ionicons/icons';
import './AjoutAnnonce.css';
  
  const AjoutAnnonceFour = () => {
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
                                <div className="input-file">
                                    <label htmlFor="file">PHOTO</label>
                                    <input type="file" id="file" accept="image/*"/>
                                </div>

                                <div className="input-description">
                                    <textarea name="" id="" cols="30" rows="10" placeholder='DESCRIPTION'></textarea>
                                </div>
                            </div>

                            <div className="link">
                                <Link to="/ajoutannoncethree" className='link-back'>Annuler</Link>
                                <Link to='/ajoutannoncefive' className='link-next'>Suivant</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default AjoutAnnonceFour;
  