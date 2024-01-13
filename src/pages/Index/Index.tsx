import { IonContent, IonPage } from '@ionic/react';
import './Index.css';

const Index = () => {
  return (
    <IonPage>
        <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-index'>
                <div className='app-info'>
                    <h1 className='app-title'>MyCar</h1>
                    <p className='app-description'>Trouvez la voiture parfaite pour vous.</p>
                </div>
                <a href="/login">
                    <button className='button-start'>Commencer</button>
                </a>
            </section>
        </IonContent>
    </IonPage>
  );
};

export default Index;
