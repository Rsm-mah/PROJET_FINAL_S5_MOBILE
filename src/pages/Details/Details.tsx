import React, { useEffect} from 'react';
import {
  IonPage,
  IonIcon,
  IonContent,
  useIonLoading,
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { Link,useHistory,useLocation } from 'react-router-dom';
import DetailsAnnonce from './DetailsAnnonce';
import './Details.css';

const Details = () => {
  const history = useHistory();
  const location = useLocation();

  const handleGoBack = () => {
    history.goBack();
  };

  useEffect(()=> {
  },[location.pathname])

  return (
    <IonPage>
        <IonContent className='ion-content' fullscreen={true}>
          <section className='ion-content-body-detail'>
            <div className='detail-header'>
              <div className='icon-arrowBack' >
                <Link to="/annonce">
                    <IonIcon aria-hidden="true" icon={arrowBack} />
                </Link>
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
