import React, { useState } from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';
import './Inscription.css';
import Sary from '../../assets/img/logo.png';
import { eye,eyeOff } from 'ionicons/icons';

const Inscription = () => {
    const [formPage,setFormPage] = useState(0);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    function Form1(fonction:any) {
        return <>
            <div className="formulaire">
                <form action="" method="post">
                    <div className="input-group">
                            <div className="input-name">
                                <input type="text" placeholder="NOM" />
                            </div>
                
                            <div className="input-first-name">
                                <input type="text" placeholder="PRENOM" />
                            </div>

                            <div className="input-genre">
                                <select name="">
                                    <option value="" selected>GENRE</option>
                                    <option value="" >HOMME</option>
                                    <option value="" >FEMME</option>
                                </select>
                            </div>

                            <div className="input-birthday">
                                <input type="date" />
                            </div>

                            <div className="input-adress">
                                <input type="text" placeholder="ADRESSE" />
                            </div>

                            <div className="input-contact">
                                <input type="text" placeholder="CONTACT" />
                            </div>
                    </div>

                    <div className="button">
                        <button type="submit" onClick={ ()=>{
                            fonction(1)
                            }}>SUIVANT
                        </button>
                    </div>
                </form>
            </div>

            <div className="login-link">
                <Link to="/login">
                    <button>Se Connceter</button>
                </Link>
            </div>
        </>
    }

    function Form2(fonction:any) {
        return <>
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
                <button type="submit" onClick={ ()=>{
                    fonction(0)
                    }}>Retour
                </button>
            </div>
        </>
    }


  return (
    <IonPage>
        <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-inscription'>
                <div className="body_inscription">
                    <div className="logo">
                        <img src={Sary} alt="" />
                    </div>

                    <div className="body_insc">
                        {formPage == 0 && Form1(setFormPage)}
                        {formPage == 1 && Form2(setFormPage)}
                    </div>
                </div>
            </section>
        </IonContent>
    </IonPage>
  );
};

export default Inscription;
