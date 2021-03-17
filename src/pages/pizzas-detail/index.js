import React from 'react';
import { BreadCrumbs } from '../../components'
import { Page, Image, CartForm, IngredientList } from '../../components';
import { PizzaDetails } from './components/pizza-details';
import { PizzaComments } from './components/pizza-comments/pizza-comments'
import { CommentCreation } from './components/pizza-form-comment/create-comment'

export default function PizzaDetail({ pizza }) {
    const items = [{ text: "Carta", url: "/" }, { text: pizza.name }]
    return (

        <Page>
            <main>
                <h1 className="visually-hidden">Detalles de la pizza</h1>
                <BreadCrumbs items={items} />
                <div >
                    <Image public_id={pizza.image.public_id} width={16} height={9} big={1024} small={50} />
                </div>
                <PizzaDetails pizza={pizza} />
                <div>
                    <h2>Ingredientes</h2>
                    <IngredientList ingredients={pizza.ingredients} />
                    <CartForm id={pizza.id} />
                </div>
                <PizzaComments comments={pizza.comments} />
                <div>
                    <h2>Añade tu comentario</h2>
                    <CommentCreation/>
                </div>
            </main>
        </Page>

    )

}
