import React from 'react'
import '../../../styles'

export function PizzaDetails({pizza}){
    return(
        <div>
            <h2>{pizza.name}</h2>
            <p>{pizza.price}</p>
        </div>
    )
}