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
import { Link } from 'react-router-dom';
import { list,checkmarkCircle,heart } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Navigation from '../../components/Navigation/Navigation';
import Sary from '../../assets/img/test3.jfif';
  
  const Profil = () => {
    const [selectedIcon, setSelectedIcon] = useState('');

    const handleIconClick = (iconName : string) => {
        console.log("eto");
        setSelectedIcon(iconName);
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
                    <div className="profil-picture">
                        <IonAvatar>
                            <img alt="Silhouette of a person's head" src={Sary} />
                        </IonAvatar>
                    </div>
                    <div className='profil-name'>
                        <h2>RASAMISOA Mahefa</h2>
                    </div>
                    {/* <div className="camera-icon">
                        <IonIcon icon={camera}></IonIcon>
                    </div> */}
                </div>
                
                <div className="stats">
                    <div className="stats-annonce">
                        <h2>20</h2>
                        <p>Annonces</p>
                    </div>
                    <hr />
                    <div className="stats-annonce">
                        <h2>3</h2>
                        <p>Vendus</p>
                    </div>
                    <hr />
                    <div className="stats-annonce">
                        <h2>0</h2>
                        <p>Favoris</p>
                    </div>
                </div>

                <div className="swiper">
                <IonSegment color="dark" value="dark">
                    <IonSegmentButton value="dark">
                        <IonIcon icon={list}></IonIcon>
                    </IonSegmentButton>
                    <IonSegmentButton value="checkmarkCircle">
                        <IonIcon icon={checkmarkCircle}></IonIcon>
                    </IonSegmentButton>
                    <IonSegmentButton value="heart">
                        <IonIcon icon={heart}></IonIcon>
                    </IonSegmentButton>
                </IonSegment>
                </div>

                <div className="listAnnonce">
                    <div className="annonce">
                        <img src={Sary} alt="" />
                    </div>
                    <div className="annonce">
                        <img src={Sary} alt="" />
                    </div>
                    <div className="annonce">
                        <img src={Sary} alt="" />
                    </div>
                    <div className="annonce">
                        <img src={Sary} alt="" />
                    </div>
                    <div className="annonce">
                        <img src={Sary} alt="" />
                    </div>
                    <div className="annonce">
                        <img src={Sary} alt="" />
                    </div>
                    <div className="annonce">
                        <img src={Sary} alt="" />
                    </div>
                    <div className="annonce">
                        <img src={Sary} alt="" />
                    </div>
                    <div className="annonce">
                        <img src={Sary} alt="" />
                    </div>
                    <div className="annonce">
                        <img src={Sary} alt="" />
                    </div>
                    <div className="annonce">
                        <img src={Sary} alt="" />
                    </div>
                </div>

                <Navigation/>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Profil;
  