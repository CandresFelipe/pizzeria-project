import React from 'react';
import { Page } from '../../components'
import { Search, PizzaList } from './component'
import css from './pizzas.module.css'
import '../../styles'


export default function Pizzas({ pizzas }) {
    return (
        <Page>
            <main className={css.main}>
                <h1 className="visually-hidden">Carta de Pizzas</h1>
                <Search className={css.search}/>
                <PizzaList pizzas={pizzas}/>
            </main>
        </Page>)
}
