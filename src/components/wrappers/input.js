import React from 'react';
import css from './input.module.css'

function Control(props, ref) {
    const { className, label, ...rest } = props;
    if (!label) {
        return (
            <div className={css.container}>

                <input {...rest} ref={ref} />
            </div>)
    } else {
        return (
            <div className={css.container}>
                {label && <label>{label}</label>}
                <input {...rest} ref={ref} />
            </div>
        )
    }


}
const Input = React.forwardRef(Control);
export {
    Input
}