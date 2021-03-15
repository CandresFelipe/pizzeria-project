import React from 'react';
import { BreadCrumbs } from '../../components'
import { Page } from '../../components';
import { PizzaImg } from './components/pizza-img/pizza-img';


export default function PizzaDetail({ pizza }) {
    const items = [{ text: "Carta", url: "/" }, { text: pizza.name }]
    return (
        <main>
            <Page>
                <BreadCrumbs items={items} />
                <PizzaImg pizza={pizza} />
                <h2 pizza={pizza}>{pizza.name}</h2>
                <button>AÑADIR AL CARRITO</button>

            </Page>
        </main>
    )

}
