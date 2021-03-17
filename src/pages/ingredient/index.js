import React from 'react'
import { Page } from '../../components'
import { IngredientCreate } from './components'
import {IngredientList} from '../../components/ingredient-list/ingredient-list'
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