import React from 'react';
import { Button, Image } from '../../../../components'
import css from './pizza-card.module.css'


export function PizzaCard({ pizza }) {
    const url = `pizzas/${pizza.id}`;
    return (
        <div className={css.container}>
            <div className={css.image_container}>
                <Image public_id={pizza.image.public_id} width={16} height={9} big={500} small={200} />
            </div>
            <div className={css.text}>
            <h2>{pizza.name}</h2>
                <h3>Precio: {pizza.price}€</h3>
                <Button className={css.button1}> Añadir al carrito</Button>
            <a className={css.button2} href={url}> Ver más </a>
            </div>
           
        </div>
    )
}