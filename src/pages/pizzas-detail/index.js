import React from 'react';
import { BreadCrumbs } from '../../components'
import { Page, Image, CartForm, IngredientList } from '../../components';
import { PizzaDetails } from './components/pizza-details';
import { PizzaComments } from './components/pizza-comments/pizza-comments'
import { CommentCreation } from './components/pizza-form-comment/create-comment'
import css from './pizza-detail.module.css'
import '../../styles'

export default function PizzaDetail({ pizza }) {
    const items = [{ text: "Carta", url: "/" }, { text: pizza.name }]
    return (

        <Page>
            <main className={css.main}>
                <h1 className="visually-hidden">Detalles de la pizza</h1>
                <BreadCrumbs items={items} />
                <div className={css.image_container}>
                    <Image public_id={pizza.image.public_id} width={16} height={9} big={400} small={200} />
                </div>
                <PizzaDetails pizza={pizza} />
                <h2>Ingredientes</h2>
                <div>
                    <IngredientList ingredients={pizza.ingredients} />
                    <div className={css.cartForm}>
                        <CartForm id={pizza.id} />
                    </div>
                </div>
                <PizzaComments comments={pizza.comments} />
                <div>
                    <h2>Añade tu comentario</h2>
                    <CommentCreation />
                </div>
            </main>
        </Page>

    )

}
