import React from 'react'
import '../../../../styles'
import css from './details-card.module.css'

export function DetailsCard({pizza}){
    return(
        <div>
            <h2 className={css.name}>{pizza.name}</h2>
            <p className={css.price}>{pizza.price} €</p>
        </div>
    )
}