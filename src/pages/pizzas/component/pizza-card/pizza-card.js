import React from 'react';
import { Image, CartForm, Anchor } from '../../../../components'
import css from './pizza-card.module.css'


export function PizzaCard({ pizza }) {
    const url = `pizzas/${pizza.id}`;
    return (
        <article>
            <Image className={css.image} public_id={pizza.image.public_id} width={16} height={9} big={400} small={200} />
            <div className={css.text}>
                <h2>{pizza.name}</h2>
                <h3>{pizza.price}€</h3>
                <div className={css.container}>
                    <CartForm className={css.cartform} text="Añadir al carrito" />
                    <Anchor href={url}> Ver más </Anchor>
                </div>

            </div>
        </article>
    )
}