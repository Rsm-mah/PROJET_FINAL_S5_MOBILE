import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    IonPage,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonContent
} from '@ionic/react';
import './Profil.css';
import { createOutline,listOutline,checkmarkCircleOutline,heartOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import ListAnnonceProfil from './ListAnnonceProfil';
import ListAnnonceFavoris from './ListAnnonceFavoris';
import ProfilStats from './ProfilStats';
  
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
                </div>

                <div className="profil">
                    <div className='profil-name'>
                        <h2>RASAMISOA Mahefa</h2>
                        {/* <Link to="/modifprofil">
                            Modifier le profil
                        </Link> */}
                    </div>
                </div>
                
                <ProfilStats/>

                <div className="swiper">
                    <IonSegment color="dark" value={selectedSegment} onIonChange={handleSegmentChange}>
                        <IonSegmentButton value="dark">
                            <IonIcon icon={listOutline}></IonIcon>
                        </IonSegmentButton>
                        <IonSegmentButton value="heart">
                            <IonIcon icon={heartOutline}></IonIcon>
                        </IonSegmentButton>
                    </IonSegment>
                </div>

                {selectedSegment === 'dark' && <ListAnnonceProfil />}
                {selectedSegment === 'heart' && <ListAnnonceFavoris />}

                <Navigation/>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Profil;
  