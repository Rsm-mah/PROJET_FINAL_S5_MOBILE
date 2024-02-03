import React, { useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Link } from 'react-router-dom';
import './Inscription.css';

const Inscription = () => {
  return (
    <IonPage>
        <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-inscription'>
                <div className="body_inscription">
                    <div className="logo">
                        <img src="" alt="" />
                        <h1>INSCRIPTION</h1>
                    </div>

                    <div className="body_insc">
                        <div className="formulaire">
                            <form action="" method="post">
                                <div className="input-group">
                                        <div className="input-name">
                                            <input type="text" placeholder="NOM" required />
                                        </div>
                            
                                        <div className="input-first-name">
                                            <input type="text" placeholder="PRENOM" required />
                                        </div>

                                        <div className="input-genre">
                                            <select name="">
                                                <option value="" selected>GENRE</option>
                                                <option value="" >HOMME</option>
                                                <option value="" >FEMME</option>
                                            </select>
                                        </div>

                                        <div className="input-birthday">
                                            <input type="date" required />
                                        </div>

                                        <div className="input-adress">
                                            <input type="text" placeholder="ADRESSE" required />
                                        </div>

                                        <div className="input-contact">
                                            <input type="text" placeholder="CONTACT" required />
                                        </div>
                                </div>

                                <div className="button">
                                    <button type="submit">SUIVANT</button>
                                </div>
                            </form>
                        </div>

                        <div className="login-link">
                            <Link to="/login">
                                <button>S'inscrire</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </IonContent>
    </IonPage>
  );
};

export default Inscription;
