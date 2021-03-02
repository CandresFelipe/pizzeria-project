import React from 'react';

export function Button(props){
    const {className, label} = props;
    function onClick(ev){
        alert(`hello ${ev.type}`)
    }
    return(
        <button className={className}
        onClick={onClick}>{label}</button>
    )
};