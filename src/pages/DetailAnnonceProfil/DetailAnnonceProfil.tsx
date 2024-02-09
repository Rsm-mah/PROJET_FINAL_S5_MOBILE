import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import {
    IonPage,
    IonIcon,
    IonContent,
    IonPopover
} from '@ionic/react';
import './DetailAnnonceProfil.css';
import { arrowBack } from 'ionicons/icons';
import { Link,useParams,useHistory } from 'react-router-dom';
import { SelectP } from '../../components/Select/SelectP';
import { getListAnnonceProfil,putStatusAnnonceProfil } from '../../axios_utils'
import { ClipLoader } from 'react-spinners';
  
  const DetailAnnonceProfil = () => {
    const [data, setData] = useState([]);
    const history = useHistory();
    const [etatBouton, setEtatBouton] = useState('DISPONIBLE');
    const [loading,setLoading] = useState(true);
    const [showPopover, setShowPopover] = useState(false);
    const [error, setError] = useState(null);

    const {id_voiture} = useParams<any>();
    // console.log(id_voiture);

    const [selectedUser, setSelectedUser] = useState('');
    const [users, setUsers] = useState([]);
    const [annonce,setAnnonce] = useState<string>('');
    const [user,setUser] = useState<string>('');
    const [prix,setPrix] = useState<string>('');

    const [dataForm,setDataForm] = useState({
        annonce: '',
        user:'',
        prix:''
    });


    const handleOpenPopover = () => {
        setShowPopover(true);
    };

    const handleClosePopover = () => {
        setShowPopover(false);
    };

    const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        console.log("user", newValue);
        setUser(newValue);
        setDataForm({ ...dataForm, user: newValue });
    };

    const handlePrix = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        console.log("prix", newValue);
        setPrix(newValue);
        setDataForm({ ...dataForm, prix: newValue });
    };

    const fetchDataUser = async () => {
        try {
            const response = await axios.get('https://voiture-production-247e.up.railway.app/api/log/voir');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching data',error);
        }
    };

    useEffect(() => {
        fetchDataUser();
        console.log(dataForm);
        setTimeout(() => {
            const url = `https://voiture-production-247e.up.railway.app/api/annonce/listeannonce/${id_voiture}`
            getListAnnonceProfil(url)
            .then(response => {
                if (response) {
                    setData(response.data);
                    setLoading(false);
                    console.log(response.data);
                } else {
                    console.log('Response is undefined');
                }
            })
            .catch(error => {
                console.log('Error fetching data', error);
            })
        })
    }, [dataForm]);

    const element = data.length > 0 ? data[0] : null;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);

        if (element) {
        
            const apiUrl = `https://voiture-production-247e.up.railway.app/api/annonce/status/${element.id_annonce}`;
            // console.log(apiUrl);

            const token =localStorage.getItem('token');

            try {
            const data = new FormData();
            data.append('id_acheteur', dataForm.user);
            data.append('prix', dataForm.prix);

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: apiUrl,
                headers: {
                'authorization':token,
                'Content-Type': 'multipart/form-data',
                },
                data: data
            };
            const response = await axios.request(config);

            if (response.data.error) {
                // Si il y a une erreur dans la reponse
                console.error('Erreur lors de la requête:', response.data.error);
                setError(response.data.error);
            } else {
                history.push(`/detailannonceprofil/${element.id_voiture}`)
                setDataForm({
                    annonce: '',
                    user: '',
                    prix: ''
                });

            }
            } catch (error) {
                console.error('Erreur lors de l\'envoi des données à railway:', error);
            }
        } else {
            console.error('Element is null');
        }
    };
    
    
    return (
        <> 
            {loading ? (
                <div className="spinner-container">
                    <ClipLoader loading={loading} />
                </div>
            ) : (
                <IonPage>
                    <IonContent className='ion-content' fullscreen={true}>
                    <section className='ion-content-body-annonce-profil'>
                        <div className='detail-header'>
                            <div className='icon-arrowBack' >
                                <Link to="/profil">
                                    <IonIcon aria-hidden="true" icon={arrowBack} />
                                </Link>
                            </div>
                        </div>
        
                        <div className='detail-picture'>
                            {element && (
                                <>
                                    <img src={element.photo} alt="" />
                                </>
                            )}
                        </div>
        
                        <div className="details">
                                <div className="voiture">
                                    <div className="voiture-name">
                                        {element && (
                                        <>
                                            <h1>{element.marque} {element.model}</h1>
                                        </>
                                        )}
                                    </div>

                                    <div className="voiture-price">
                                        {element && (
                                        <>
                                            <h2>
                                                {element.prix}
                                            </h2>
                                        </>
                                        )}
                                    </div>
                                </div>
            
                                <div className="voiture-description">
                                    {element && (
                                    <>
                                        <p>
                                            {element.description}
                                        </p>
                                    </>
                                    )}
                                </div>
        
                            <div className="voiture-details">
                                    <div className="propriete-left">
                                        {element && (
                                        <>
                                            <div className="propriete">
                                                <h4>Categorie :</h4>
                                                <p>{element.categorie}</p>
                                            </div>
                
                                            <div className="propriete">
                                                <h4>Marque :</h4>
                                                <p>{element.marque}</p>
                                            </div>
                
                                            <div className="propriete">
                                                <h4>Modèle :</h4>
                                                <p>{element.model}</p>
                                            </div>

                                            <div className="propriete">
                                                <h4>Réservoir :</h4>
                                                <p>{element.reservoir}</p>
                                            </div>
                
                                            <div className="propriete">
                                                <h4>Couleur :</h4>
                                                <p>{element.couleur}</p>
                                            </div>
                
                                            <div className="propriete">
                                                <h4>Année :</h4>
                                                <p>{element.annee}</p>
                                            </div>
                
                                            <div className="propriete">
                                                <h4>Origine :</h4>
                                                <p>{element.pays}</p>
                                            </div>
                                            </>
                                        )}
                                    </div>
        
                                <div className="propriete-right">
                                        {element && (
                                        <>
                                            <div className="propriete">
                                                <h4>Transmission :</h4>
                                                <p>{element.transmission}</p>
                                            </div>
                
                                            <div className="propriete">
                                                <h4>Energie :</h4>
                                                <p>{element.energie}</p>
                                            </div>
                
                                            <div className="propriete">
                                                <h4>Matricule :</h4>
                                                <p>{element.matricule}</p>
                                            </div>

                                            <div className="propriete">
                                                <h4>Consommation :</h4>
                                                <p>{element.consommation}</p>
                                            </div>
                
                                            <div className="propriete">
                                                <h4>Kilometrage :</h4>
                                                <p>{element.kilometrage}</p>
                                            </div>
                
                                            <div className="propriete">
                                                <h4>Places :</h4>
                                                <p>{element.place}</p>
                                            </div>

                                            <div className="propriete">
                                                <h4>Status :</h4>
                                                <p>{element.status === 20 ? "Disponible" : "Vendu"}</p>
                                            </div>
                                        </>
                                        )}
                                </div>
                                
        
                                
                            </div>
                        </div>
        
                        <div className="button">
                            <button className='button-valider' onClick={handleOpenPopover} disabled={element && element.status === 30}>VENDRE</button>
                        </div>

                        <IonPopover
                            isOpen={showPopover}
                            onDidDismiss={handleClosePopover}
                        >
                            <form onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <div className="select-user">
                                        <select name="id_acheteur" onChange={handleUser}>
                                            <option value="">ACHETEUR</option>
                                            {users.map(user => (
                                                <option key={user.id} value={user.id}>
                                                    {user.prenom}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="input-prix">
                                        <input type="number" placeholder="PRIX"  onChange={handlePrix} name='prix'/>
                                    </div>

                                    {element && (
                                        <>
                                            <input type="hidden" value={element.id_annonce} name='id_annonce'/>
                                        </>
                                    )}
                                </div>

                                <div className="valider">
                                    <button className='link-valider' >Valider</button>
                                </div>
                            </form>
                        </IonPopover>
                    </section>
                    </IonContent>
                </IonPage>
            )}
        </>
    );
  };
  
  export default DetailAnnonceProfil;
  