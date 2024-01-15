import React, { useState } from 'react';
import {
    IonPage,
    IonIcon,
    IonContent
} from '@ionic/react';
import './Profil.css';
import { Link } from 'react-router-dom';
import { camera } from 'ionicons/icons';
import Navigation from '../../components/Navigation/Navigation';
import Sary from '../../assets/img/test3.jfif';
  
  const Profil = () => {

    return (
      <IonPage>
          <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-profil'>
                <div className='profil-header'>
                    <div className="title">
                        <h2>Profil</h2>
                    </div>
                </div>

                <div className="profil">
                    <div className="profil-picture">
                        <img src={Sary} alt="" />
                    </div>
                    <div className="camera-icon">
                        <IonIcon icon={camera}></IonIcon>
                    </div>
                </div>

                <div className="modif-button">
                    <Link to="">Modifier le profil</Link>
                </div>
                

                <Navigation/>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Profil;
  