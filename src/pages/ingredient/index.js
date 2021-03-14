import React from 'react'
import { Page } from '../../components'
import { IngredientList, IngredientCreate } from './components'
import '../../styles'

export default function Ingredients({ ingredients }) {
    return (
        <Page>
            <main>
                <h1 className= "visually-hidden">Gestionar Ingredientes</h1>
                <IngredientList ingredients={ingredients} />
                <IngredientCreate/>
            </main>
        </Page>)
}