import React from 'react';
export function Form(props) {
    const {children, ...rest} = props;
    function handlerInput(ev){
        ev.stopPropagation();
        ev.preventDefault();
        const {__formControl__,value} =ev.target;
        if(__formControl__){
            __formControl__.value= value;
        }
    }
    return (
        <form {...rest} onInput={handlerInput}>
            {children}
        </form>
    )
}

