import React, { useState, ChangeEvent} from 'react';
import {
    IonPage,
    IonIcon,
    IonContent
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { imageOutline  } from 'ionicons/icons';
import './AjoutAnnonce.css';
  
  const AjoutAnnonceFour = () => {
    const [selectedFile, setSelectedFile] = useState<string>('');

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        setSelectedFile(fileName);
    } else {
        setSelectedFile('');
    }
    };
    
    return (
      <IonPage>
          <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-ajout'>
                <div className='ajout-header'>
                    <div className="title">
                        <h2>Nouvelle annonce</h2>
                    </div>
                </div>

                <div className="body_ajout">
                    <div className="formulaire">
                        <form action="" method="post">
                            <div className="input-group">
                                <div className="input-file">
                                    <label htmlFor="file">PHOTO {selectedFile && `(${selectedFile})`} <IonIcon icon={imageOutline}></IonIcon></label>
                                    <input type="file" id="file" accept="image/*" onChange={handleFileChange}/>
                                </div>

                                <div className="input-description">
                                    <textarea name="" id="" cols="30" rows="10" placeholder='DESCRIPTION'></textarea>
                                </div>
                            </div>

                            <div className="link">
                                <Link to="/ajoutannoncethree" className='link-back'>Annuler</Link>
                                <Link to='/ajoutannoncefive' className='link-next'>Suivant</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default AjoutAnnonceFour;
  