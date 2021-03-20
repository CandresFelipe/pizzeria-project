import React from 'react';
import { BreadCrumbs } from '../../components'
import { Page, Image, CartForm, IngredientList } from '../../components';
import { PizzaComments, CommentCreation, DetailsCard } from './components';
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
                    <Image public_id={pizza.image.public_id} width={4} height={3} big={400} small={200} />
                </div>
                <DetailsCard pizza={pizza} />
                <h2>Ingredientes</h2>
                <div>
                    <IngredientList ingredients={pizza.ingredients} />
                    <div className={css.cartForm}>
                        <CartForm id={pizza.id} />
                    </div>
                </div>
                <h2>Comentarios</h2>
                <PizzaComments comments={pizza.comments} />
                <div>
                    <h2>Añade tu comentario</h2>
                    <CommentCreation />
                </div>
            </main>
        </Page>

    )

}
