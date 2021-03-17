import React from 'react'
import css from './pizza-comments.module.css'

export function PizzaComments({ comments }) {
    if (!comments || !comments.length) {
        return null;
    }
    return (
        <ul>
            {comments.map(({ text, rating, id, date }) => {
                return (
                    <li key={id}>
                        <p>{new Intl.DateTimeFormat('es').format(new Date(date))}</p>
                        <p className={css.rating}>Puntuacion {rating}</p>
                        <p>{text}</p>
                    </li>
                )
            })}
        </ul>
    )
}