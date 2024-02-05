import React, { FormEvent, useState, useEffect } from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { Link,useHistory } from 'react-router-dom';
import './Inscription.css';
import Sary from '../../assets/img/logo.png';
import { eye,eyeOff } from 'ionicons/icons';

const Inscription = () => {
    const [formPage,setFormPage] = useState(0);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory();

    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
      });

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        setError(null);
        const apiUrl = 'https://voiture-production-247e.up.railway.app/api/log/signup';

        try {
        const data = new FormData();
        data.append('nom', formData.nom);
        data.append('prenom', formData.prenom);
        data.append('email', formData.email);
        data.append('password', formData.password);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: apiUrl,
            headers: {
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
            console.log('Inscription successful:', response.data);
            history.push("/login")
            setFormData({
                nom: '',
                prenom: '',
                email: '',
                password: '',
            });

        }
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données à railway:', error);
            if (axios.isAxiosError(error) && error.response && error.response.data) {
                setError(error.response.data);
            } 
        }
    }

    function Form1() {
        return <>
            <div className="formulaire">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                            <div className="input-name">
                                <input type="text" placeholder="NOM" name='nom' defaultValue={formData.nom} onChange={handleChange}/>
                            </div>
                
                            <div className="input-first-name">
                                <input type="text" placeholder="PRENOM" name='prenom' defaultValue={formData.prenom} onChange={handleChange}/>
                            </div>

                            <div className="input-email">
                                <input type="email" placeholder="EMAIL" name='email' defaultValue={formData.email} onChange={handleChange} />
                            </div>

                            <div className="input-password">
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    placeholder="MOT DE PASSE"
                                    name='password'
                                    defaultValue={formData.password}
                                    onChange={handleChange}
                                />
                                <IonIcon
                                    icon={passwordVisible ? eye : eyeOff}
                                    slot="end"
                                    onClick={togglePasswordVisibility}
                                />
                            </div>
                    </div>

                    <div className="button">
                        <button type="submit">S'INSCRIRE</button>
                    </div>
                </form>
            </div>

            <div className="login-link">
                <Link to="/login">
                    <button>Se Connceter</button>
                </Link>
            </div>
        </>
    }


  return (
    <IonPage>
        <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-inscription'>
                <div className="body_inscription">
                    <div className="logo">
                        <img src={Sary} alt="" />
                    </div>

                    <div className="body_insc">
                        {Form1()}
                    </div>
                </div>
            </section>
        </IonContent>
    </IonPage>
  );
};

export default Inscription;
