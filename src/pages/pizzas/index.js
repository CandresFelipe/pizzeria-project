import React from 'react';
import { Page } from '../../components'
import { Search, PizzaList } from './component'


export default function Pizzas({ pizzas }) {
    return (
        <Page>
            <main>
                <h1 className="visually-hidden">Carta de Pizzas</h1>
                <Search />
                <PizzaList pizzas={pizzas} />
            </main>
        </Page>)
}
