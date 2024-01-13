import React, { useState} from 'react';
import {
    IonPage,
    IonSearchbar,
    IonContent
} from '@ionic/react';
import { Link } from 'react-router-dom';
import './Annonce.css';
import ListAnnonce from './ListAnnonce';
import Navigation from '../../components/Navigation/Navigation';
  
  const Annonce = () => {

    return (
      <IonPage>
          <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-annonce'>
                <div className='annonce-header'>
                    <IonSearchbar placeholder="Search a car"></IonSearchbar>
                </div>

                <div className='listAnnonce'>
                    <ListAnnonce/>
                    <ListAnnonce/>
                    <ListAnnonce/>
                    <ListAnnonce/>
                    <ListAnnonce/>
                    <ListAnnonce/>
                    <ListAnnonce/>
                    <ListAnnonce/>
                    <ListAnnonce/>
                </div>

                <Navigation/>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Annonce;
  