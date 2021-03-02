import React from 'react';
import {Button} from '../../../../components'
import css from './pizza-card.module.css';

export function PizzaCard({pizza}){
    return(
        <article className={css.container}>
            <img id={css.img} src = {pizza.img}/>
            <h5>{pizza.name}</h5>
            <p></p>
            <Button label="añadir al carrito"/>
            <Button label="ver mas"/>
        </article>        
    )
}