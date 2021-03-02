import React from 'react';

export function Render(props, ref){
    const {className, label, ...rest} = props;
   return(<div className={className}>
        <input {...rest} ref={ref}/>
        {label && <label><span>{label}</span></label>}
    </div>);
}
const Input= React.forwardRef(Render);
export {
    Input
}