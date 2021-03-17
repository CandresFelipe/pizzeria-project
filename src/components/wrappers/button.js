import React from 'react';
import css from './button.module.css'

export function Button(props){
    const {className, children} = props;
    function onClick(ev){
        alert(`hello ${ev.type}`)
    }
    const buttonClass = className && `${css.button} ${className}` || css.button;
    return(
        <button className={buttonClass}
        onClick={onClick}>{children}</button>
    )
};