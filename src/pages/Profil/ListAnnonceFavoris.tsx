import './Profil.css';
import Sary from '../../assets/img/test3.jfif';
  
  const ListAnnonceFavoris = () => {
    return (
        <div className="listAnnonce">
            <div className="annonce">
                <img src={Sary} alt="" />
            </div>
            <div className="annonce">
                <img src={Sary} alt="" />
            </div>
            <div className="annonce">
                <img src={Sary} alt="" />
            </div>
        </div>
    );
  };
  
  export default ListAnnonceFavoris;
  