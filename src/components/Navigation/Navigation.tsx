import {
    IonIcon,
    IonTabBar,
    IonTabButton
  } from '@ionic/react';
import { home, notifications, person } from 'ionicons/icons';
import './Navigation.css';
  
  const Navigation = () => {
    return (
        <section className='navigation'>
            <IonTabBar slot="bottom" className='ion-tab-bar'>
                <IonTabButton className='ion-tab-button' tab="tab1" href="/tab1">
                    <IonIcon aria-hidden="true" icon={home} />
                </IonTabButton>
                <IonTabButton className='ion-tab-button' tab="tab2" href="/tab2">
                    <IonIcon aria-hidden="true" icon={notifications} />
                </IonTabButton>
                <IonTabButton className='ion-tab-button' tab="tab3" href="/tab3">
                    <IonIcon aria-hidden="true" icon={person} />
                </IonTabButton>
            </IonTabBar>
        </section>
    );
  };
  
  export default Navigation;
  