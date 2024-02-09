import React, { useEffect } from 'react';
import {
    IonPage,
    IonSearchbar,
    IonContent
} from '@ionic/react';
import './Annonce.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ListAnnonce from './ListAnnonce';
import Navigation from '../../components/Navigation/Navigation';
  
  const Annonce = () => {

    return (
      <IonPage>
          <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-annonce'>
                <div className='annonce-header'>
                    <div className="title">
                        <h2>Annonces</h2>
                    </div>
                </div>

                <div className='listAnnonce'>
                    <ListAnnonce/>
                </div>

                <Navigation/>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Annonce;
  