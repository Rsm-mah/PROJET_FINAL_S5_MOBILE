import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';
import './Annonce.css';
import { informationCircle } from 'ionicons/icons';
import Sary from '../../assets/img/Audi Q3 2020.jpeg';
  
  const ListAnnonce = () => {

    return (
        <div className="annonce">
            <IonCard>
                <img src={Sary} alt="" />
                <IonCardHeader>
                    <IonCardTitle>Peugeot 3008</IonCardTitle>
                    <IonCardSubtitle>100.000 Ar</IonCardSubtitle>

                    <IonCardContent>
                        Statut : Disponible
                        <Link to="/details">
                            Voir Détail
                        </Link>
                    </IonCardContent>
                </IonCardHeader>
            </IonCard>
        </div>
    );
  };
  
  export default ListAnnonce;
  