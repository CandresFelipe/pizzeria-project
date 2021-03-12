import React from 'react';
import { Form, Input } from '../../../../components'
import css from './ingredient-list.module.css'

export function IngredientList({ ingredients }) {
    return (
        <div className={css.ingredientlist}>
            <h2>Todos los ingredientes</h2>
            <ul className={css.grid}>
                {ingredients.map((ingredient) => {
                    return (
                        <li key={ingredient.id} >                           
                          <div className={css.contour}>                         
                          {ingredient.name} ({ingredient.price}€)
                          </div>
                        </li> 
                    )
                })}
            </ul>
        </div>
    )
}