import axios from 'axios';

export function handleChange(e:any,formData:any,setFormData:any) {
    const { name, value } = e.target;
    if (formData.get(name)!="") {
        formData.set(name,value);
    } else {
        formData.append(name,value);
    }
    setFormData(formData);
}

export async function  post(formData:any,setFormData:any,url:any) {
    const token =localStorage.getItem('token');
        try {
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: url,
                headers: {
                    'authorization':token
                },
                data: formData
            };
            const response = await axios.request(config);
            setFormData(new FormData());
            return response;
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données à railway:', error);
        }
}

export async function getListAnnonce(url:any) {
    const token =localStorage.getItem('token');
        try {
            let config = {
                method: 'GET',
                maxBodyLength: Infinity,
                url: url,
                headers: {
                    'authorization':token
                },
            };
            const response = await axios.request(config);
            return response;
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données à railway:', error);
        }
}

export async function getListAnnonceProfil(url:any) {
    const token =localStorage.getItem('token');
        try {
            let config = {
                method: 'GET',
                maxBodyLength: Infinity,
                url: url,
                headers: {
                    'authorization':token
                },
            };
            const response = await axios.request(config);
            return response;
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données à railway:', error);
        }
}

export async function putStatusAnnonceProfil(url:any) {
    const token =localStorage.getItem('token');
        try {
            let config = {
                method: 'POST',
                maxBodyLength: Infinity,
                url: url,
                headers: {
                    'authorization':token
                },
            };
            const response = await axios.request(config);
            return response;
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données à railway:', error);
        }
}