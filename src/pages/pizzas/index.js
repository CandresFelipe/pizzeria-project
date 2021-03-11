import React from 'react';
import {Page} from '../../components/'
import {Search, PizzaList} from './component/'
import {PizzaService} from '../../services/pizza-service'

export default function Pizzas({pizzas}) {
    return (
        <Page>
            <Search />
            <main>
                <h2>
                    <PizzaList pizzas={pizzas}/>
                </h2>
            </main>
        </Page>)
}
Pizzas.route = '/';

Pizzas.getData = async function (parms, query) {
    const {pizzas} = query
    return await PizzaService.getAll(pizzas);
}