import React from 'react';
import { Button, Image } from '../../../../components'
import css from './pizza-card.module.css'


export function PizzaCard({ pizza }) {
    return (
        <div className={css.container}>
            <div>
                <Image public_id={pizza.image.public_id} width={16} height={9} big={1024} small={50} />
            </div>
            <div>
                <h2>{pizza.name}</h2>
                <h3>{pizza.price}</h3>
            </div>
            <Button className={css.button1}> Añadir al carrito</Button>
            <Button className={css.button2}> Ver más </Button>
        </div>
    )
}