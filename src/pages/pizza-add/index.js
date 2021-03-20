import React from "react";
import { Page} from '../../components';
import {ImageAdd, NameAdd, IngredientsAdd} from './components'


export default function PizzaAdd({ pizza }) {
    return (
        <Page>
            <main>
                <h1 className="visually-hidden">Añadir pizza</h1>
                <ImageAdd/>
                <NameAdd/>
                <IngredientsAdd/>                      
            </main>
        </Page>
    )
}
