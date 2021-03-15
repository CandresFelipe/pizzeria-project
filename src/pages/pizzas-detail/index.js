import React from 'react';
import { BreadCrumbs } from '../../components'
import { Page, Image } from '../../components';


export default function PizzaDetail({ pizza }) {
    const items = [{ text: "Carta", url: "/" }, { text: pizza.name }]
    return (
        <main>
            <Page>
                <BreadCrumbs items={items} />
                <Image image ={pizza.image}/>
                <h2 pizza={pizza}>{pizza.name}</h2>
                <button>AÑADIR AL CARRITO</button>

            </Page>
        </main>
    )

}
