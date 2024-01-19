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
  
  const Profil = () => {
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
  