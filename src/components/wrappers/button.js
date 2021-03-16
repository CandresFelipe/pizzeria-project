import React from 'react';
import css from './button.module.css'

export function Button(props){
    const {className, children} = props;
    function onClick(ev){
        alert(`hello ${ev.type}`)
    }
    return(
        <button className={css.button}
        onClick={onClick}>{children}</button>
    )
};