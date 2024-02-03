import React, { useState } from 'react';
import { IonContent, IonIcon, IonPage } from '@ionic/react';
import { Link } from 'react-router-dom';
import './Inscription.css';
import { eye,eyeOff } from 'ionicons/icons';
import Sary from '../../assets/img/2-removebg-preview.png';


const Inscription_suite = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <IonPage>
        <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-inscription-suite'>
                <div className="body_inscription">
                    <span className='logo_next'>
                        <div className="logo_next">
                            <img src={Sary} alt="" />
                        </div>
                    </span>

                    <div className="body_insc">
                        <div className="formulaire">
                            <form action="" method="post">
                                <div className="input-group">
                                    <div className="input-email">
                                        <input type="email" placeholder="EMAIL" required />
                                    </div>
                                    <div className="input-password">
                                        <input
                                            type={passwordVisible ? 'text' : 'password'}
                                            placeholder="MOT DE PASSE"
                                            required
                                        />
                                        <IonIcon
                                            icon={passwordVisible ? eye : eyeOff}
                                            slot="end"
                                            onClick={togglePasswordVisibility}
                                        />
                                    </div>
                                </div>

                                <div className="button">
                                    <button type="submit">S'INSCRIRE</button>
                                </div>
                            </form>
                        </div>

                        <div className="back-link">
                            <Link to="/inscription">
                                <button>Retour</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </IonContent>
    </IonPage>
  );
};

export default Inscription_suite;
