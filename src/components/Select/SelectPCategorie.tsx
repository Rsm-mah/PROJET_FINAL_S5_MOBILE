import { useState, useEffect } from 'react'
import {
    IonIcon
} from '@ionic/react';
import './SelectP.css'
import { caretDown } from 'ionicons/icons';

interface SelectPProps {
    title: string;
    options: { id_categorie: number, nom_categorie: string }[]; 
    selectedValue: string;
    onValueChange: (value: string) => void;
    setDataForm:any;
    dataForm:any;
    name:string
}

export function SelectPCategorie({ title , options, selectedValue, onValueChange,setDataForm,dataForm,name} : SelectPProps) {
    let [open,setOpen] = useState('open');

    // useEffect(() => {
    //     console.log(dataForm);
    // }, [dataForm]);

    return <>
        <div className='box_select'>
            <div className='label_select' onClick={()=>{
                if (open=='close') {
                    setOpen('open');
                }else{
                    setOpen('close');
                }
            }}>
               <div>{selectedValue || title}</div>
               <IonIcon className={`icon_select ${open}`} icon={caretDown}></IonIcon>
            </div>
            <div className={`box_option_select ${open}`}>
                {options.map((option, index) => (
                <div key={index} className='option_item' onClick={() => {
                    onValueChange(option.nom_categorie);
                    setOpen('open');
                    console.log(open);
                    setDataForm({...dataForm,  [name]: option.id_categorie})
                }}>
                    {option.nom_categorie}
                </div>
                ))}
            </div>
        </div>
    </>
}