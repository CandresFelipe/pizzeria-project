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

