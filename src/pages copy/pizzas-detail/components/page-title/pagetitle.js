import React from 'react'
import css from './pagetitle.module.css'


export function Pagetitle({ pizza }) {
    return (
        <div className={css.detailHeader}>
        <div className={css.pageTitle}>Carta/{pizza.name}</div>
        </div>
    )
};
