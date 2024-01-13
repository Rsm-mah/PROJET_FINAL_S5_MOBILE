import React, { useState } from 'react';
import { IonContent, IonIcon, IonPage } from '@ionic/react';
import './Login.css';
import { eye,eyeOff } from 'ionicons/icons';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <IonPage>
        <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-login'>
                <div className="body_login">
                    <div className="logo">
                        <img src="" alt="" />
                        <h1>LOGIN</h1>
                    </div>

                    <div className="body_log">
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
                                    <button type="submit">SE CONNECTER</button>
                                </div>

                            </form>
                        </div>

                        <div className="inscription-link">
                            <a href="/inscription">
                                <button>S'inscrire</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </IonContent>
    </IonPage>
  );
};

export default Login;
