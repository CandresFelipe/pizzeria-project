import React from 'react';
import {IngredientItem} from './ingredient-item'
import css from './ingredient-list.module.css'

export function IngredientList({ ingredients }) {
    return (
        <section>
            <ul className={css.grid}>
                {ingredients.map((ingredient) => {
                    return (
                        <li key={ingredient.id} >                           
                          <IngredientItem ingredient={ingredient}/>
                        </li> 
                    )
                })}
            </ul>
        </section>
    )
}