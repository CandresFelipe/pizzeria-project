import React from 'react';
import { BreadCrumbs } from '../../components'
import { Page, Image, CartForm } from '../../components';
import { PizzaDetails } from './components/pizza-details';

export default function PizzaDetail({ pizza }) {
    const items = [{ text: "Carta", url: "/" }, { text: pizza.name }]
    return (
        <main>
            <Page>
                <BreadCrumbs items={items} />
                <div >
                    <Image public_id={pizza.image.public_id} width={16} height={9} big={700} small={300} />
                </div>
                <PizzaDetails pizza={pizza} />
                <CartForm id={pizza.id} />
            </Page>
        </main>
    )

}
