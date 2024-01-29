import './Profil.css';
import { Link } from 'react-router-dom';
import Sary from '../../assets/img/system vega_ a car.jpeg';
  
  const ListAnnonceVendu = () => {
    return (
        <div className="listAnnonce">
            <div className="annonce">
                <Link to="/detailannonceprofil">
                    <img src={Sary} alt="" />
                </Link>
            </div>
        </div>
    );
  };
  
  export default ListAnnonceVendu;
  