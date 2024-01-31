import { useState } from 'react'
import {
    IonIcon
} from '@ionic/react';
import './SelectP.css'
import { caretDown } from 'ionicons/icons';

interface SelectPProps {
    title: string;
    options: string[]; 
    selectedValue: string;
    onValueChange: (value: string) => void;
}

export function SelectP({ title , options, selectedValue, onValueChange} : SelectPProps) {
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
               <div>{selectedValue || title}</div>
               <IonIcon className={`icon_select ${open}`} icon={caretDown}></IonIcon>
            </div>
            <div className={`box_option_select ${open}`}>
                {options.map((option, index) => (
                <div key={index} className='option_item' onClick={() => {
                    onValueChange(option);
                    setOpen('close');
                    console.log(open);
                }}>
                    {option}
                </div>
                ))}
            </div>
        </div>
    </>
}