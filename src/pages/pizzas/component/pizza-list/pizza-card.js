import React from 'react';
import { Button, Image } from '../../../../components'
import css from './pizza-card.module.css'


export function PizzaCard({ pizza }) {
    return (
        <article className={css.container}>
            <div>
                <Image public_id={pizza.image.public_id} width={1} height={1} big={400} small={200} />
            </div>
            <div>
                <h2>{pizza.name}</h2>
                <h3>{pizza.price}</h3>
            </div>
            <Button className={css.button1}> Añadir al carrito</Button>
            <a className={css.button2}>np</a>
        </article>
        
    )
}