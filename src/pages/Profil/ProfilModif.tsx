import React, { useState } from 'react';
import {
    IonPage,
    IonIcon,
    IonAvatar,
    IonContent
} from '@ionic/react';
import { Link } from 'react-router-dom';
import './ProfilModif.css';
import { arrowBack } from 'ionicons/icons';
import { SelectP } from '../../components/Select/SelectP';
import Sary from '../../assets/img/test3.jfif';
  
  const ProfilModif = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleClick = () => {
        setIsButtonClicked(true);

        setTimeout(() => {
            setIsButtonClicked(false);
        }, 300);
    };

    return (
      <IonPage>
          <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-modif-profil'>
                <div className='profil-modif-header'>
                    <div className='icon-arrowBack'>
                        <Link to="/profil">
                            <IonIcon aria-hidden="true" icon={arrowBack} />
                        </Link>
                    </div>
                    <div className="title">
                        <h2>Modification Profil</h2>
                    </div>
                </div>

                <div className="body_profil_modif">
                    <div className="formulaire">
                        <form action="" method="post">
                            <div className="profil-picture">
                                <IonAvatar>
                                    <img alt="" src={Sary} />
                                </IonAvatar>
                            </div>

                            <div className='modif-profil-picture'>
                                <label htmlFor='file'>Modifier la photo</label>
                                <input type="file" id='file'/>
                            </div>

                            <div className="input-group">
                                <div className="input-nom">
                                    <input type="text" placeholder="NOM" value="RASAMISOA" />
                                </div>

                                <div className="input-prenom">
                                    <input type="text" placeholder="PRENOM" value="Mahefa"/>
                                </div>

                                <div className="select-genre">
                                    <SelectP title="GENRE" options={['HOMME','FEMME']}/>
                                </div>

                                <div className="input-adresse">
                                    <input type="text" placeholder="ADRESSE" value="Analamahitsy"/>
                                </div>

                                <div className="input-contact">
                                    <input type="text" placeholder="CONTACT" value="0320000000"/>
                                </div>

                                
                            </div>

                            <div className="button">
                                <button className={`button-valider ${isButtonClicked ? 'button-valider-clicked' : ''}`} onClick={handleClick}>ENREGISTRER</button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default ProfilModif;
  