import React from 'react';

export function Render(props, ref){
    const {className, label, ...rest} = props;
   return(<div className={className}>
        {label && <label><span>{label}</span></label>}
        <input {...rest} ref={ref}/>
    </div>);
}
const Input= React.forwardRef(Render);
export {
    Input
}