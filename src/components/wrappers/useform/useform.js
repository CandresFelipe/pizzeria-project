import React from 'react'
export function useForm(frm) {
    const ref = React.useRef();
    const register = (formControl) => {
        return (control) => {
            control.__formControl__ = formControl;
        }
    }
    const handlerSubmit = (cb) => {
        return (ev) => {
            ev.stopPropagation();
            ev.preventDefault();
            cb(frm.data)
        }
    }
    return {
        register: React.useCallback(register, ref.current),
        handlerSubmit: React.useCallback(handlerSubmit, [])
    }
}