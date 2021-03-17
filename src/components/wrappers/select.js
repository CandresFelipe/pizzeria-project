import React from 'react'
import css from './select.module.css'

export function Select({options}){
    return(
        <select className ={css['select-css']}>
            {Object.keys(options).map((key)=>{
                return(
                    <option key={key}>
                        {options[key]}
                    </option>
                )
            })}
        </select>    
    )
}