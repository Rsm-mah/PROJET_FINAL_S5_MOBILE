import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Import page */
import Index from './pages/Index/Index';
import Login from './pages/Login/Login';
import Inscription from './pages/Inscription/Inscription';
import Inscription_suite from './pages/Inscription/Inscription_suite';
import Details from './pages/Details/Details';
import ModifAnnonce from './pages/Modification/ModifAnnonce';
import ModifAnnonceSuite from './pages/Modification/ModifAnnonceSuite';
import Annonce from './pages/Annonce/Annonce';
import Notification from './pages/Notification/Notification';
import Profil from './pages/Profil/Profil';
import ProfilModif from './pages/Profil/ProfilModif';
import AjoutAnnonce from './pages/AjoutAnnonce/AjoutAnnonce';
import AjoutAnnonceTwo from './pages/AjoutAnnonce/AjoutAnnonceTwo';
import AjoutAnnonceThree from './pages/AjoutAnnonce/AjoutAnnonceThree';
import AjoutAnnonceFour from './pages/AjoutAnnonce/AjoutAnnonceFour';
import AjoutAnnonceFive from './pages/AjoutAnnonce/AjoutAnnonceFive';
import DetailAnnonceProfil from './pages/DetailAnnonceProfil/DetailAnnonceProfil';

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
import './theme/variables.css';

import './App.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/index">
            <Index />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/inscription">
            <Inscription />
          </Route>
          <Route exact path="/inscription_next">
            <Inscription_suite />
          </Route>
          <Route exact path="/annonce">
            <Annonce />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route>
          <Route exact path="/modification">
            <ModifAnnonce />
          </Route>
          <Route exact path="/modificationsuite">
            <ModifAnnonceSuite />
          </Route>
          <Route exact path="/notification">
            <Notification />
          </Route>
          <Route exact path="/profil">
            <Profil />
          </Route>
          <Route exact path="/modifprofil">
            <ProfilModif />
          </Route>
          <Route exact path="/ajoutannonce">
            <AjoutAnnonce />
          </Route>
          <Route exact path="/ajoutannoncetwo">
            <AjoutAnnonceTwo />
          </Route>
          <Route exact path="/ajoutannoncethree">
            <AjoutAnnonceThree />
          </Route>
          <Route exact path="/ajoutannoncefour">
            <AjoutAnnonceFour />
          </Route>
          <Route exact path="/ajoutannoncefive">
            <AjoutAnnonceFive />
          </Route>
          <Route exact path="/detailannonceprofil">
            <DetailAnnonceProfil />
          </Route>
          <Route exact path="/">
            <Redirect to="/index" />
          </Route>
        </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;
