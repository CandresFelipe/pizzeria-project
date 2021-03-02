import React from "react";
import { Page } from '../../components';
import { PriceAdd, NameAdd, IngredientsAdd, ImageAdd } from './components';

export default function PizzaAdd({ pizza }) {
    return (
        <Page>
            <main>
                <ImageAdd />
                <NameAdd/>
                <PriceAdd/>
                <IngredientsAdd/>
            </main>
        </Page>
    )
}

PizzaAdd.route = '/pizzaadd';

PizzaAdd.getData = async function (params, destination) {
    const res = await fetch('http://localhost:3000/')
    return {
        ingredients: await res.json(),
    }
}