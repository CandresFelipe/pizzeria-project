import React from 'react';
import { Page } from '../../components'
import { Ingredient, IngredientCreate } from './components'

export default function Ingredients({ ingredients }) {
    return (
        <Page>
            <main>
            <h1>Todos los ingredientes</h1>
                <Ingredient ingredients={ingredients}/>
            <IngredientCreate/>
            </main>
        </Page>)
}
