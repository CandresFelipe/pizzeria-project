import React from 'react';
import css from './input.module.css'

export function Render(props, ref){
    const {className, label, ...rest} = props;
   return(
   <div className={css.container}>
        {label && <label>{label}</label>}
        <input {...rest} ref={ref}/>
    </div>);
}
const Input= React.forwardRef(Render);
export {
    Input
}