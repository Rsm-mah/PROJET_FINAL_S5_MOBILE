import React, { useState} from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';
import './Annonce.css';
import { ellipsisVertical,informationCircle } from 'ionicons/icons';
import Sary from '../../assets/img/test3.jfif';
  
  const ListAnnonce = () => {

    return (
        <div className="annonce">
            <IonCard>
                <img src={Sary} alt="" />
                <IonCardHeader>
                    <IonCardTitle>Peugeot 3008</IonCardTitle>
                    <IonCardSubtitle>100.000 Ar</IonCardSubtitle>

                    <IonCardContent>
                        Disponible
                        <Link to="/details">
                            <IonIcon icon={informationCircle} />
                        </Link>
                    </IonCardContent>
                </IonCardHeader>
            </IonCard>
        </div>
    );
  };
  
  export default ListAnnonce;
  