import React from 'react'
import css from './pizza-img.module.css'


export function PizzaImg({ pizza }) {
    return (
        <div className={css.pizzaImg}>{pizza.img}</div>
        


    )
};