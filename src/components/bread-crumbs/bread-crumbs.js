import React from 'react'
import css from './bread-crumbs.module.css'


export function BreadCrumbs({ items }) {
    return (
        <ul className={css.breadcrumb}>
            {items.map(({ text, url }) => {
                if (url) {
                    return (
                        <li key={text}>
                            <a href={url}>{text}</a>
                        </li>
                    )
                }
                return (
                    <li key = {text}>{text}</li>
                )
            })}
        </ul>


        //<div className={css.pageTitle}>Carta/{pizza.name}</div>
    )
};
