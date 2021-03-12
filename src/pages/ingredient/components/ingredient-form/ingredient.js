import React from 'react';
import { Form, Input } from '../../../../components'
import css from './ingredient-form.module.css'

export function Ingredient({ ingredients }) {
    return (
        <Form className={css.grid}>
            {ingredients.map((ingredient) => {
                return (
                <Input 
                className={css.contour}
                key ={ingredient.id} 
                ingredient={ingredient} 
                placeholder={`${ingredient.name} (${ingredient.price}€)`} />
                )
            })}
        </Form>
    )
}
