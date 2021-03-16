import React from 'react';
import { BreadCrumbs } from '../../components'
import { Page, Image } from '../../components';
import { PizzaDetails} from './components/pizza-details';

export default function PizzaDetail({ pizza }) {
    const items = [{ text: "Carta", url: "/" }, { text: pizza.name }]
    return (
        <main>
            <Page>
                <BreadCrumbs items={items} />
                <Image image ={pizza.image}/>
                <PizzaDetails pizza={pizza}/>
                <button>AÑADIR AL CARRITO</button>
            </Page>
        </main>
    )

}
