import React from 'react';
import { BreadCrumbs } from '../../components'
import { Page } from '../../components';


 function PizzaDetail( {pizza} ) {
    const items = [{ text: "Carta", url: "/" }, { text: pizza.name }]
    return (
        <main>
            <Page>
                <BreadCrumbs items={items} />
            </Page>
        </main>
    )

}
export default PizzaDetail;