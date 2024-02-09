import React, { useState, useEffect } from 'react';
import {
    IonPage,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonContent
} from '@ionic/react';
import './Profil.css';
import { listOutline,heartOutline,exitOutline } from 'ionicons/icons';
import Navigation from '../../components/Navigation/Navigation';
import ListAnnonceProfil from './ListAnnonceProfil';
  
  const Profil = () => {
    const [selectedSegment, setSelectedSegment] = useState<string>('dark');


    const handleSegmentChange = (e: CustomEvent) => {
        const newSegment = e.detail.value as string;
        setSelectedSegment(newSegment || 'dark');
    };
    
    
    return (
      <IonPage>
          <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-profil'>
                <div className='profil-header'>
                    <div className="title">
                        <h2>Profil</h2>
                    </div>
                    <div className="icon_exit">
                        <IonIcon icon={exitOutline}></IonIcon>
                    </div>
                </div>

                <div className="profil">
                    <div className='profil-name'>
                        <h2>RASAMISOA Mahefa</h2>
                    </div>
                </div>
                

                <div className="swiper">
                    <IonSegment color="dark" value={selectedSegment} onIonChange={handleSegmentChange}>
                        <IonSegmentButton value="dark">
                            <IonIcon icon={listOutline}></IonIcon>
                        </IonSegmentButton>
                    </IonSegment>
                </div>

                <ListAnnonceProfil />

                <Navigation/>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Profil;
  