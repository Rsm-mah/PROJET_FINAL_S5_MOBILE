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
                    <IonSearchbar placeholder="Search a car"></IonSearchbar>

                    <div className="slide-search">
                      <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>Tous</SwiperSlide>
                        <SwiperSlide>Nouveaux</SwiperSlide>
                        <SwiperSlide>Récents</SwiperSlide>
                        <SwiperSlide>Meilleurs prix</SwiperSlide>
                      </Swiper>
                    </div>
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
  