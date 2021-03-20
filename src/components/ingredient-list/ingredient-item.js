import React from "react"
import css from './ingredient-item.module.css'

export function IngredientItem({ price, name }) {
    const totalIng = price && `${name} (${price}€)` || name && `${name}`;
    return (
        <div className={css.ingredientItem}>
        {totalIng}
        </div>

    )
}