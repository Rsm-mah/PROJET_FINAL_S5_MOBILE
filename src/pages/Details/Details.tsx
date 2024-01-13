import {
  IonPage,
  IonIcon,
  IonContent
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import Navigation from '../../components/Navigation/Navigation';
import DetailsAnnonce from './DetailsAnnonce';
import './Details.css';

const Details = () => {
  return (
    <IonPage>
        <IonContent className='ion-content' fullscreen={true}>
          <section className='ion-content-body-detail'>
            <div className='detail-header'>
              <div className='icon-arrowBack'>
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
