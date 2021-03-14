import React from 'react';
import { PizzaCard } from './pizza-card'

export function PizzapriceDB({ pizzas }) {
    return (
        <ul> 
        {pizzas.map((pizza) => {
                return (
                    <li key={price.id}>
                    <PizzaCard pizza={pizza}/>
                    </li>
                )
            })}
        </ul>
    );
}