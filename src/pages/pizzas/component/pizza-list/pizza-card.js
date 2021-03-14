import React from 'react';
import {Button} from '../../../../components'
import css from './pizza-card.module.css';


export function PizzaCard({pizza}){
    return(
        <article className={css.container}>
            <img id={css.img} src = {pizza.img}/>
            <h2>{pizza.name}</h2>
            <Button label="añadir al carrito"/>
            <Button label="ver mas"/>
        </article>        
    )
}