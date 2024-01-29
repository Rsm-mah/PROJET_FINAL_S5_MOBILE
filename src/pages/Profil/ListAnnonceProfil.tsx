import './Profil.css';
import { Link } from 'react-router-dom';
import Sary from '../../assets/img/Audi Q3 2020.jpeg';
  
  const ListAnnonceProfil = () => {
    return (
        <div className="listAnnonce">
            <div className="annonce">
                <Link to="/detailannonceprofil">
                    <img src={Sary} alt="" />
                </Link>
            </div>
            <div className="annonce">
                <Link to="/detailannonceprofil">
                    <img src={Sary} alt="" />
                </Link>
            </div>
            <div className="annonce">
                <Link to="/detailannonceprofil">
                    <img src={Sary} alt="" />
                </Link>
            </div>
            <div className="annonce">
                <Link to="/detailannonceprofil">
                    <img src={Sary} alt="" />
                </Link>
            </div>
            <div className="annonce">
                <Link to="/detailannonceprofil">
                    <img src={Sary} alt="" />
                </Link>
            </div>
            <div className="annonce">
                <Link to="/detailannonceprofil">
                    <img src={Sary} alt="" />
                </Link>
            </div>
        </div>
    );
  };
  
  export default ListAnnonceProfil;
  