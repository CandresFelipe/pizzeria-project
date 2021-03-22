import React from 'react'
import css from './text-area.module.css'

export function TextArea(){
    return(
        <textarea className={css.textarea} placeholder="Agrega tu comentario"></textarea>
        
    )
}