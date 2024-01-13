import {
  IonPage,
  IonIcon,
  IonContent
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import DetailsAnnonce from './DetailsAnnonce';
import './Details.css';

const Details = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <IonPage>
        <IonContent className='ion-content' fullscreen={true}>
          <section className='ion-content-body-detail'>
            <div className='detail-header'>
              <div className='icon-arrowBack' onClick={handleGoBack}>
                <IonIcon aria-hidden="true" icon={arrowBack} />
              </div>
              <div className="title">
                <h2>Details</h2>
              </div>
            </div>

            <DetailsAnnonce/>
          </section>
        </IonContent>
    </IonPage>
  );
};

export default Details;
