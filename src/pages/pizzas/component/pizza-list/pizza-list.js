import React from 'react';
import { PizzaCard } from '../pizza-card/pizza-card'
import css from './pizza-list.module.css'


export function PizzaList({ pizzas }) {
    return (
        <ul className={css.card}> 
        {pizzas.map((pizza) => {
                return (
                    <li className={css.box} key={pizza.id}>
                    <PizzaCard pizza={pizza}/>
                    </li>
                )
            })}
        </ul>
    );
}