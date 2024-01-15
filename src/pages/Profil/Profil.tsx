import React, { useState } from 'react';
import {
    IonPage,
    IonIcon,
    IonContent
} from '@ionic/react';
import './Profil.css';
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
                        <p>sjs</p>
                    </div>
                </div>

                

                <Navigation/>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Profil;
  