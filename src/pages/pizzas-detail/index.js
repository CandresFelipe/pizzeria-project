import React from 'react';
import { BreadCrumbs } from '../../components'
import { Page, Image, CartForm, IngredientList} from '../../components';
import { PizzaDetails } from './components/pizza-details';


export default function PizzaDetail({ pizza }) {
    const items = [{ text: "Carta", url: "/" }, { text: pizza.name }]
    return (
        <main>
            <Page>
                <h1 className="visually-hidden">Detalles de la pizza</h1>
                <BreadCrumbs items={items} />
                <div >
                    <Image public_id={pizza.image.public_id} width={16} height={9} big={700} small={300} />
                </div>
                <PizzaDetails pizza={pizza} />
                <div>
                    <h2>Ingredientes</h2>
                    <IngredientList ingredients={pizza.ingredients} />
                    <CartForm id={pizza.id} />
                </div>                
            </Page>
        </main>
    )
    //TODO: comprobar por que da error <IngredientList ingredients={ingredients} /> 

}
