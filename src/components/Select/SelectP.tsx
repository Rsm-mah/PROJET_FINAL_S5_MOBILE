import { useState } from 'react'
import {
    IonIcon
} from '@ionic/react';
import './SelectP.css'
import { caretDown } from 'ionicons/icons';

interface SelectPProps {
    title: string; // Spécifier le type de la propriété title comme string
    options: string[]; // Spécifier le type de la propriété options comme un tableau de chaînes
}

export function SelectP({ title , options} : SelectPProps) {
    let [open,setOpen] = useState('open');
    let [id,setId]= useState(-1);

    return <>
        <div className='box_select'>
            <div className='label_select' onClick={()=>{
                if (open=='close') {
                    setOpen('open');
                }else{
                    setOpen('close');
                }
            }}>
               <div>{title}</div>
               <IonIcon className={`icon_select ${open}`} icon={caretDown}></IonIcon>
            </div>
            <div className={`box_option_select ${open}`}>
                {options.map((option, index) => (
                    <div key={index} className='option_item' onClick={() => setId(index + 1)}>
                        {option}
                    </div>
                ))}
            </div>
        </div>
    </>
}