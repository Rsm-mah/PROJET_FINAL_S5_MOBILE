import React, { FormEvent, useState } from 'react';
import axios from 'axios';
import { IonContent, IonIcon, IonPage } from '@ionic/react';
import { Link,useHistory } from 'react-router-dom';
import './Login.css';
import { eye,eyeOff } from 'ionicons/icons';
import Sary from '../../assets/img/logo.png';


const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

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
        const apiUrl = 'https://voiture-production-247e.up.railway.app/api/log/signin';

        try {
        const data = new FormData();
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
            console.log('Login successful:', response.data);
            localStorage.setItem('token', response.data.token);
            history.push("/annonce")
            setFormData({
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

  return (
    <IonPage>
        <IonContent className='ion-content' fullscreen={true}>
            <section className='ion-content-body-login'>
                <div className="body_login">
                    <div className="logo">
                        <img src={Sary} alt="" />
                    </div>

                    <div className="body_log">
                        <div className="formulaire">
                            <form onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <div className="input-email">
                                        <input type="email" placeholder="EMAIL" value={formData.email} name='email' onChange={handleChange} required />
                                    </div>
                                    <div className="input-password">
                                        <input
                                            type={passwordVisible ? 'text' : 'password'}
                                            placeholder="MOT DE PASSE"
                                            value={formData.password}
                                            name='password'
                                            onChange={handleChange}
                                            required
                                        />
                                        <IonIcon
                                            icon={passwordVisible ? eye : eyeOff}
                                            slot="end"
                                            onClick={togglePasswordVisibility}
                                        />
                                    </div>
                                </div>

                                <div className='error'>
                                    <div className="error-message">
                                        {error && <p style={{ color: 'red' }}>{error}</p>}
                                    </div>
                                </div>

                                <div className="button">
                                    <button type="submit">SE CONNECTER</button>
                                </div>

                            </form>
                        </div>

                        <div className="inscription-link">
                            <Link to="/inscription">
                                <button>S'inscrire</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </IonContent>
    </IonPage>
  );
};

export default Login;
