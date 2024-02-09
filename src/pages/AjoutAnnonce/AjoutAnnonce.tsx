import React, { useState , useEffect, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import {
    IonPage,
    IonIcon,
    IonContent
} from '@ionic/react';
import { Link,useHistory } from 'react-router-dom';
import { imageOutline  } from 'ionicons/icons';
import './AjoutAnnonce.css';
import { SelectP } from '../../components/Select/SelectP';
import { SelectPCategorie } from '../../components/Select/SelectPCategorie';
import { Camera, CameraResultType } from '@capacitor/camera';

  const AjoutAnnonce = () => {
    interface Transmission {
        id: number;
        nom: string;
    }

    const history = useHistory();
    const [error, setError] = useState(null);

    const [selectedFile, setSelectedFile] = useState<string>('');
    const [image, setImage] = useState<string>('');

    const [selectedCategorie, setSelectedCategorie] = useState('');
    const [selectedMarque, setSelectedMarque] = useState('');
    const [selectedEnergie, setSelectedEnergie] = useState('');
    const [selectedTransmission, setSelectedTransmission] = useState('');
    const [selectedOrigine, setSelectedOrigine] = useState('');
    const [selectedCouleur, setSelectedCouleur] = useState('');

    const [formPage,setFormPage] = useState(0);

    const [categorie, setCategorie] = useState([]);
    const [marque, setMarque] = useState([]);
    const [energie, setEnergie] = useState([]);
    const [transmission, setTransmission] = useState([]);
    const [couleur, setCouleur] = useState([]);
    const [origine, setOrigine] = useState([]);
    const [month,setMonth] = useState<string>('');
    const [modele,setModele] = useState<string>('');
    const [place,setPlace] = useState<string>('');
    const [matricule,setMatricule] = useState<string>('');
    const [kilometrage,setKilometrage] = useState<string>('');
    const [description,setDescription] = useState<string>('');
    const [prix,setPrix] = useState<string>('');

    const [base64, setBase64] = useState<string>(''); 


    const [dataForm,setDataForm] = useState({
        categorie:'',
        marque:'',
        annne:'',
        energie:'',
        transmission:'',
        couleur:'',
        pays:'',
        places :'',
        model :'',
        reservoir :'',
        consommation :'',
        matricule:'',
        kilometrage:'',
        selectedFile:'',
        description:'',
        prix:''
    });


    

    const handleMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        console.log("annee", newValue);
        setMonth(newValue);
        console.log(month);
        setDataForm({ ...dataForm, annne: newValue });
    };

    const handlePlace = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        console.log("place", newValue);
        setPlace(newValue);
        setDataForm({ ...dataForm, places: newValue });
    };

    const handleModele = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        console.log("modele", newValue);
        setModele(newValue);
        setDataForm({ ...dataForm, model: newValue });
    };

    const handleReservoir = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        console.log("reservoir", newValue);
        setMatricule(newValue);
        setDataForm({ ...dataForm, reservoir: newValue });
    };

    const handleConsommation = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        console.log("consommation", newValue);
        setMatricule(newValue);
        setDataForm({ ...dataForm, consommation: newValue });
    };

    const handleMatricule = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        console.log("matricule", newValue);
        setMatricule(newValue);
        setDataForm({ ...dataForm, matricule: newValue });
    };

    const handleKilometrage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        console.log("kilometrage", newValue);
        setKilometrage(newValue);
        setDataForm({ ...dataForm, kilometrage: newValue });
    };

    const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        console.log("description", newValue);
        setDescription(newValue);
        setDataForm({ ...dataForm, description: newValue });
    };

    const handlePrix = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        console.log("prix", newValue);
        setPrix(newValue);
        setDataForm({ ...dataForm, prix: newValue });
    };


    const getBase64 = async (url:any)  => {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.blob())
            .then(blob => {
                let reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            })
            .catch(reject);
        });
    };

    const takePicture = async () => {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri
        });
    
        const web = image.webPath as string;
        setImage(web);
    
        if (web) {
            getBase64(web)
                .then((result) => {
                    setBase64(result);
                    console.log('base : ', result);
                    setDataForm({ ...dataForm, selectedFile: result });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        const apiUrl = 'https://voiture-production-247e.up.railway.app/api/annonce/insert';

        const token =localStorage.getItem('token');

        try {
        const data = new FormData();
        data.append('images', dataForm.selectedFile);
        data.append('marque', dataForm.marque);
        data.append('model', dataForm.model);
        data.append('categorie', dataForm.categorie);
        data.append('transmission', dataForm.transmission);
        data.append('couleur', dataForm.couleur);
        data.append('energie', dataForm.energie);
        data.append('pays', dataForm.pays);
        data.append('matricule', dataForm.matricule);
        data.append('annee', dataForm.annne);
        data.append('conso', dataForm.consommation);
        data.append('reservoir', dataForm.reservoir);
        data.append('nbr_place', dataForm.places);
        data.append('kilometrage', dataForm.kilometrage);
        data.append('prix', dataForm.prix);
        data.append('description', dataForm.description);

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
            history.push("/annonce")
            setDataForm({
                categorie:'',
                marque:'',
                annne:'',
                energie:'',
                transmission:'',
                couleur:'',
                pays:'',
                places :'',
                model :'',
                reservoir :'',
                consommation :'',
                matricule:'',
                kilometrage:'',
                selectedFile:'',
                description:'',
                prix:''
            });

        }
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données à railway:', error);
        }
    };

    useEffect(() => {
        fetchDataCategorie();
        fetchDataMarque();
        fetchDataEnergie();
        fetchDataTransmission();
        fetchDataCouleur();
        fetchDataOrigine();

        console.log(dataForm);
    }, [dataForm]);

    const fetchDataCategorie = async () => {
        try {
            const response = await axios.get('https://voiture-production-247e.up.railway.app/api/categorie/voir');
            setCategorie(response.data);
        } catch (error) {
            console.error('Error fetching data',error);
        }
    };

    const fetchDataMarque = async () => {
        try {
            const response = await axios.get('https://voiture-production-247e.up.railway.app/api/marques/voir');
            setMarque(response.data);
        } catch (error) {
            console.error('Error fetching data',error);
        }
    };

    const fetchDataEnergie = async () => {
        try {
            const response = await axios.get('https://voiture-production-247e.up.railway.app/api/energies/voir');
            setEnergie(response.data);
        } catch (error) {
            console.error('Error fetching data',error);
        }
    };

    const fetchDataTransmission = async () => {
        try {
            const response = await axios.get('https://voiture-production-247e.up.railway.app/api/transmission/voir');
            setTransmission(response.data);
        } catch (error) {
            console.error('Error fetching data',error);
        }
    };

    const fetchDataCouleur = async () => {
        try {
            const response = await axios.get('https://voiture-production-247e.up.railway.app/api/couleurs/voir');
            setCouleur(response.data);
        } catch (error) {
            console.error('Error fetching data',error);
        }
    };

    const fetchDataOrigine = async () => {
        try {
            const response = await axios.get('https://voiture-production-247e.up.railway.app/api/pays/voir');
            setOrigine(response.data);
        } catch (error) {
            console.error('Error fetching data',error);
        }
    };


    function Form1(fonction:any,categorie:any,selectedCategorie:any,setSelectedCategorie:any,marque:any,selectedMarque:any,setSelectedMarque:any,energie:any,selectedEnergie:any,setSelectedEnergie:any,transmission:any,selectedTransmission:any,setSelectedTransmission:any,setDataForm:any,dataForm:any) {
        return <>
            <form action="" method="post">
                <div className="input-group">
                    <div className="select-categorie">
                        <SelectPCategorie  title="CATEGORIE" options={categorie} selectedValue={selectedCategorie} onValueChange={setSelectedCategorie} setDataForm={setDataForm} dataForm={dataForm} name={'categorie'}/>
                    </div>

                    <div className="select-marque">
                        <SelectP title="MARQUE" options={marque} selectedValue={selectedMarque} onValueChange={setSelectedMarque} setDataForm={setDataForm} dataForm={dataForm} name={'marque'}/>
                    </div>

                    <div className="input-month">
                        <input type="text" placeholder='ANNEE'  onChange={handleMonth} name='annee'/>
                    </div>

                    <div className="select-energie">
                        <SelectP title="ENERGIE" options={energie} selectedValue={selectedEnergie} onValueChange={setSelectedEnergie} setDataForm={setDataForm} dataForm={dataForm} name={'energie'}/>
                    </div>

                    <div className="select-transmission">
                        <SelectP title="TRANSMISSION" options={transmission} selectedValue={selectedTransmission} onValueChange={setSelectedTransmission} setDataForm={setDataForm} dataForm={dataForm} name={'transmission'}/>
                    </div>

                    
                </div>

                <div className="link">
                    <Link to="/annonce" className='link-back'>Annuler</Link>
                    <button className='link-next' onClick={ ()=>{
                        fonction(1)
                    }}>Suivant</button>
                </div>
            </form>
        </>
    }
    

    function Form2(fonction:any,origine:any,selectedOrigine:any,setSelectedOrigine:any,couleur:any,selectedCouleur:any,setSelectedCouleur:any,setDataForm:any,dataForm:any) {
        return <>
            <form action="" method="post">
                <div className="input-group">
                    <div className="input-modele">
                        <input type="text" placeholder="MODELE" onChange={handleModele} name='model'/>
                    </div>
                    
                    <div className="select-origine">
                        <SelectP title="ORIGINE" options={origine} selectedValue={selectedOrigine} onValueChange={setSelectedOrigine} setDataForm={setDataForm} dataForm={dataForm} name={'pays'}/>
                    </div>

                    <div className="select-couleur">
                        <SelectP title="COULEUR" options={couleur} selectedValue={selectedCouleur} onValueChange={setSelectedCouleur} setDataForm={setDataForm} dataForm={dataForm} name={'couleur'}/>
                    </div>

                    <div className="input-place">
                        <input type="number" placeholder="PLACES"  onChange={handlePlace} name='nbr_place'/>
                    </div>
                </div>

                <div className="link">
                    <button className='link-back'onClick={ ()=>{
                        fonction(0)
                        }}>Annuler
                    </button>
                    <button className='link-next' onClick={ ()=>{
                        fonction(2)
                        }}>Suivant
                    </button>
                </div>
            </form>
        </>
    }

    function Form3(fonction:any) {
        return <>
            <form action="" method="post">
                <div className="input-group">
                    <div className="input-reservoir">
                        <input type="number" placeholder="RESERVOIR" onChange={handleReservoir} name='reservoir'/>
                    </div>

                    <div className="input-consommation">
                        <input type="number" placeholder="CONSOMMATION" onChange={handleConsommation} name='conso'/>
                    </div>

                    <div className="input-matricule">
                        <input type="text" placeholder="MATRICULE" onChange={handleMatricule} name='matricule'/>
                    </div>

                    <div className="input-kilometrage">
                        <input type="text" placeholder="KILOMETRAGE" onChange={handleKilometrage} name='kilometrage'/>
                    </div>

                </div>

                <div className="link">
                    <button className='link-back' onClick={ ()=>{
                        fonction(1)
                    }}>Annuler
                    </button>
                    <button className='link-next' onClick={ ()=>{
                        fonction(3)
                        }}>Suivant
                    </button>
                </div>
            </form> 
        </>
    }

    function Form4(fonction:any,image:any) {
        return <>
            <form action="" method="post">
                <div className="input-group">
                    <div className="input-file">
                        <label htmlFor="file"><img src={image} alt="" /> <IonIcon icon={imageOutline}></IonIcon></label>
                        <input type="button" id="file" name='images' accept="image/*" onClick={() => takePicture()}/>
                        {/* <p className="file-warning">Assurez-vous que la photo a une dimension de 735 x 490 pixels.</p> */}
                    </div>

                    <div className="input-description">
                        <textarea name="description" id="" cols="30" rows="10" placeholder='DESCRIPTION' onChange={handleDescription}></textarea>
                    </div>
                </div>

                <div className="link">
                    <button className='link-back'onClick={ ()=>{
                        fonction(2)
                        }}>Annuler
                    </button>
                    <button className='link-next' onClick={ ()=>{
                        fonction(4)
                        }}>Suivant
                    </button>
                </div>
            </form>
        </>
    }

    function Form5(fonction:any) {
        return <>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-prix">
                        <input type="text" placeholder="PRIX" onChange={handlePrix} name='prix' />
                    </div>
                </div>

                <div className="link">
                    <button className='link-back'onClick={ ()=>{
                        fonction(3)
                        }}>Annuler
                    </button>
                    <button className='link-next'>Valider</button>
                </div>
            </form>
        </>
    }


    return (
      <IonPage>
          <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-ajout'>
                <div className='ajout-header'>
                    <div className="title">
                        <h2>Nouvelle annonce</h2>
                    </div>
                </div>

                <div className="body_ajout">
                    <div className="formulaire">
                        {formPage == 0 && Form1(setFormPage,categorie,selectedCategorie,setSelectedCategorie,marque,selectedMarque,setSelectedMarque,energie,selectedEnergie,setSelectedEnergie,transmission,selectedTransmission,setSelectedTransmission,setDataForm,dataForm)}
                        {formPage == 1 && Form2(setFormPage,origine,selectedOrigine,setSelectedOrigine,couleur,selectedCouleur,setSelectedCouleur,setDataForm,dataForm)}
                        {formPage == 2 && Form3(setFormPage)}
                        {formPage == 3 && Form4(setFormPage,image)}
                        {formPage == 4 && Form5(setFormPage)}
                    </div>
                </div>
            </section>
          </IonContent>
      </IonPage>
    );
  };
  
  export default AjoutAnnonce;
  