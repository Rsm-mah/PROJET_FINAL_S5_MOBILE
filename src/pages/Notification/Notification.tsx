import React, { useState} from 'react';
import {
    IonPage,
    IonIcon,
    IonContent
} from '@ionic/react';
import { Link } from 'react-router-dom';
import './Notification.css';
import Navigation from '../../components/Navigation/Navigation';
  
  const Notification = () => {

    return (
      <IonPage>
          <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-modif'>
                <div className='annonce-header'>
                    <div className="title">
                        <h2>Notifications</h2>
                    </div>
                </div>

                <Navigation/>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Notification;
  