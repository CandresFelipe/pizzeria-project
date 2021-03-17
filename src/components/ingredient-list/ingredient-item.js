import React from "react"
import css from './ingredient-item.module.css'

export function IngredientItem({ ingredient }) {
    return (
        <div className={css.ingredientItem}>
            {ingredient.name} ({ingredient.price}€)
        </div>
    )
}