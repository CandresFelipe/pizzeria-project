import React from 'react';
import {IngredientItem} from './ingredient-item'
import css from './ingredient-list.module.css'

export function IngredientList({ ingredients }) {
    return (
        <section>
            <ul className={css.grid}>
                {ingredients.map((ingredient) => {
                    return (
                        <li className={css.box} key={ingredient.id} >                           
                          <IngredientItem price={ingredient.price} name={ingredient.name}/>
                        </li> 
                    )
                })}
            </ul>
        </section>
    )
}