import './Profil.css';
  
  const ProfilStats = () => {
    return (
        <div className="stats">
            <div className="stats-annonce">
                <h2>20</h2>
                <p>Annonces</p>
            </div>
            <hr />
            <div className="stats-annonce">
                <h2>3</h2>
                <p>Vendus</p>
            </div>
            <hr />
            <div className="stats-annonce">
                <h2>0</h2>
                <p>Favoris</p>
            </div>
        </div>
    );
  };
  
  export default ProfilStats;
  