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
                    <li className={css.container} key={id}>
                        <div className={css.comment}>
                            <p className={css.name}> Nombre de usuario </p>
                            <p className={css.date}>{new Intl.DateTimeFormat('es').format(new Date(date))}</p>
                        </div>

                        <p className={css.rating}>Puntuación {rating}</p>
                        <p>{text}</p>
                    </li>
                )
            })}
        </ul>
    )
}