import './Profil.css';
import { Link } from 'react-router-dom';
import Sary from '../../assets/img/test3.jfif';
import Sary2 from '../../assets/img/Audi Q3 2020.jpeg';
  
  const ListAnnonceFavoris = () => {
    return (
        <div className="listAnnonce">
            <div className="annonce">
                <Link to="/detailannonceprofil">
                    <img src={Sary} alt="" />
                </Link>
            </div>
            <div className="annonce">
                <Link to="/detailannonceprofil">
                    <img src={Sary2} alt="" />
                </Link>
            </div>
        </div>
    );
  };
  
  export default ListAnnonceFavoris;
  