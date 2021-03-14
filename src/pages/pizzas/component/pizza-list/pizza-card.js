import React from 'react';
import { Button } from '../../../../components'
import css from './pizza-card.module.css'


export function PizzaCard({ pizza }) {
    return (
        <article className={css.container}>
            <img id={css.img} src={pizza.img}/>
            <div>
                <h2>{pizza.name}</h2>
                <h3>{pizza.price}</h3>
                <Button className={css.button1}label="añadir al carrito" />
                <Button className={css.button2} label="ver mas" />
            </div>
        </article>
    )
}