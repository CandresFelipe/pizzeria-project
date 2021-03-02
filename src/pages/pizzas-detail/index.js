import React from 'react';
import {Pagetitle} from './components/page-title/pagetitle'
import { Page } from '../../components';
import{PizzaImg} from './components/pizza-img/pizza-img';
import {PizzaDescription} from './components/pizza-description/pizza-description';
import {Ingredient} from '../ingredient/components'
import { Pizzaprice } from './components/pizza-price/pizza-price';

export default function PizzaDetail({ pizza }) {
    return (
        <main>
            <Page>
                <Pagetitle pizza={pizza}/>
                <PizzaImg pizza={pizza}/>
                <h2 pizza={pizza}>{pizza.name}</h2>
                <PizzaDescription pizza={pizza}/>
                <Pizzaprice pizza={pizza}/>
                <Ingredient ingredients={pizza.ingredients}/>
                <button>AÑADIR AL CARRITO</button>
                               
            </Page>
        </main>
    )

}
PizzaDetail.route = '/pizzas/:id'
PizzaDetail.getData = async function (params) {
    const { id } = params;
    const response = await fetch(`http://localhost:3000/pizzas/${id}`);
    return {
        pizza: await response.json()
    }
}