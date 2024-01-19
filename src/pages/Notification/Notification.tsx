import React, { useState} from 'react';
import {
    IonPage,
    IonAvatar,
    IonContent
} from '@ionic/react';
import './Notification.css';
import Navigation from '../../components/Navigation/Navigation';
import Sary from '../../assets/img/test3.jfif';
  
  const Notification = () => {

    return (
      <IonPage>
          <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-notif'>
                <div className='notif-header'>
                    <div className="title">
                        <h2>Notifications</h2>
                    </div>
                </div>

                <div className='listNotification'>
                  <div className="notification">
                    <div className="sender-picture">
                      <IonAvatar>
                          <img alt="Silhouette of a person's head" src={Sary} />
                      </IonAvatar>
                    </div>
                    <div className="message">
                      <p><span className='name'>RASAMISOA Mahefa</span> vous a envoyé un nouveau message</p>
                      <p className='heure'>Maintenant</p>
                    </div>
                  </div>
                  <div className="notification">
                    <div className="sender-picture">
                      <IonAvatar>
                        <img alt="Silhouette of a person's head" src={Sary} />
                      </IonAvatar>
                    </div>
                    <div className="message">
                      <p><span className='name'>RASAMISOA Mahefa</span> vous a envoyé un nouveau message</p>
                      <p className='heure'>Maintenant</p>
                    </div>
                  </div>
                  <div className="notification">
                    <div className="sender-picture">
                    <IonAvatar>
                        <img alt="Silhouette of a person's head" src={Sary} />
                      </IonAvatar>
                    </div>
                    <div className="message">
                      <p><span className='name'>RASAMISOA Mahefa</span> vous a envoyé un nouveau message</p>
                      <p className='heure'>Maintenant</p>
                    </div>
                  </div>
                  <div className="notification">
                    <div className="sender-picture">
                    <IonAvatar>
                        <img alt="Silhouette of a person's head" src={Sary} />
                      </IonAvatar>
                    </div>
                    <div className="message">
                      <p><span className='name'>RASAMISOA Mahefa</span> vous a envoyé un nouveau message</p>
                      <p className='heure'>Maintenant</p>
                    </div>
                  </div>
                  <div className="notification">
                    <div className="sender-picture">
                    <IonAvatar>
                        <img alt="Silhouette of a person's head" src={Sary} />
                      </IonAvatar>
                    </div>
                    <div className="message">
                      <p><span className='name'>RASAMISOA Mahefa</span> vous a envoyé un nouveau message</p>
                      <p className='heure'>Maintenant</p>
                    </div>
                  </div>
                  <div className="notification">
                    <div className="sender-picture">
                      <IonAvatar>
                        <img alt="Silhouette of a person's head" src={Sary} />
                      </IonAvatar>
                    </div>
                    <div className="message">
                      <p><span className='name'>RASAMISOA Mahefa</span> vous a envoyé un nouveau message</p>
                      <p className='heure'>Maintenant</p>
                    </div>
                  </div>
                  <div className="notification">
                    <div className="sender-picture">
                      <IonAvatar>
                        <img alt="Silhouette of a person's head" src={Sary} />
                      </IonAvatar>
                    </div>
                    <div className="message">
                      <p><span className='name'>RASAMISOA Mahefa</span> vous a envoyé un nouveau message</p>
                      <p className='heure'>Maintenant</p>
                    </div>
                  </div>
                  <div className="notification">
                    <div className="sender-picture">
                      <IonAvatar>
                        <img alt="Silhouette of a person's head" src={Sary} />
                      </IonAvatar>
                    </div>
                    <div className="message">
                      <p><span className='name'>RASAMISOA Mahefa</span> vous a envoyé un nouveau message</p>
                      <p className='heure'>Maintenant</p>
                    </div>
                  </div>
                  <div className="notification">
                    <div className="sender-picture">
                      <IonAvatar>
                        <img alt="Silhouette of a person's head" src={Sary} />
                      </IonAvatar>
                    </div>
                    <div className="message">
                      <p><span className='name'>RASAMISOA Mahefa</span> vous a envoyé un nouveau message</p>
                      <p className='heure'>Maintenant</p>
                    </div>
                  </div>
                  <div className="notification">
                    <div className="sender-picture">
                      <IonAvatar>
                        <img alt="Silhouette of a person's head" src={Sary} />
                      </IonAvatar>
                    </div>
                    <div className="message">
                      <p><span className='name'>RASAMISOA Mahefa</span> vous a envoyé un nouveau message</p>
                      <p className='heure'>Maintenant</p>
                    </div>
                  </div>
                </div>

                <Navigation/>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Notification;
  