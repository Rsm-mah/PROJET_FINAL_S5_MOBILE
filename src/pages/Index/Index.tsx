import { IonContent, IonPage } from '@ionic/react';
import { Link } from 'react-router-dom';
import './Index.css';

const Index = () => {
  return (
    <IonPage>
        <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-index'>
                <div className='app-info'>
                    <h1 className='app-title'>FIAR'AKO</h1>
                    <p className='app-description'>Trouvez la voiture parfaite pour vous.</p>
                </div>
                <Link to="/login">
                    <button className='button-start'>Commencer</button>
                </Link>
            </section>
        </IonContent>
    </IonPage>
  );
};

export default Index;
