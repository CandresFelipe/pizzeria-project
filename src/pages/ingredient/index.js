import React from 'react'
import { Page,IngredientList } from '../../components'
import { IngredientCreate} from './components'
import css from './ingredient.module.css'
import '../../styles'

export default function Ingredients({ ingredients }) {
    return (
        <Page>
            <main className={css.pagina}>
                <h1 className= "visually-hidden">Gestionar Ingredientes</h1>
                <h2>Todos los ingredientes</h2>
                <IngredientList ingredients={ingredients} />
                <IngredientCreate/>
            </main>
        </Page>)
}