import {
  IonApp,
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, notifications, person } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';

import '../App.css';

setupIonicReact();

const Tabs: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
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
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default Tabs;
