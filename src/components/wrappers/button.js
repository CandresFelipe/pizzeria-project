import React from 'react';
import css from './button.module.css'

export function Button(props){
    const {className, label} = props;
    function onClick(ev){
        alert(`hello ${ev.type}`)
    }
    return(
        <button className={css.button}
        onClick={onClick}>{label}</button>
    )
};