import React, { useState } from 'react';
import {
    IonPage,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonAvatar,
    IonContent
} from '@ionic/react';
import './Profil.css';
import { createOutline,listOutline,checkmarkCircleOutline,heartOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Sary from '../../assets/img/test3.jfif';
import ListAnnonceProfil from './ListAnnonceProfil';
import ListAnnonceFavoris from './ListAnnonceFavoris';
import ListAnnonceVendu from './ListAnnonceVendu';
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
                    <div className='icon-create' >
                        <Link to="/modifprofil">
                            <IonIcon aria-hidden="true" icon={createOutline} />
                        </Link>
                    </div>
                </div>

                <div className="profil">
                    <div className="profil-picture">
                        <IonAvatar>
                            <img alt="Silhouette of a person's head" src={Sary} />
                        </IonAvatar>
                    </div>
                    <div className='profil-name'>
                        <h2>RASAMISOA Mahefa</h2>
                    </div>
                </div>
                
                <ProfilStats/>

                <div className="swiper">
                    <IonSegment color="dark" value={selectedSegment} onIonChange={handleSegmentChange}>
                        <IonSegmentButton value="dark">
                            <IonIcon icon={listOutline}></IonIcon>
                        </IonSegmentButton>
                        <IonSegmentButton value="checkmarkCircle">
                            <IonIcon icon={checkmarkCircleOutline}></IonIcon>
                        </IonSegmentButton>
                        <IonSegmentButton value="heart">
                            <IonIcon icon={heartOutline}></IonIcon>
                        </IonSegmentButton>
                    </IonSegment>
                </div>

                {selectedSegment === 'dark' && <ListAnnonceProfil />}
                {selectedSegment === 'checkmarkCircle' && <ListAnnonceVendu />}
                {selectedSegment === 'heart' && <ListAnnonceFavoris />}

                <Navigation/>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Profil;
  