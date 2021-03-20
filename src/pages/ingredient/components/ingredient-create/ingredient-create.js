import React from 'react';
import { Form, Input, Button } from '../../../../components'
import css from './ingredient-create.module.css'


export function IngredientCreate() {
    return (
        <section>
            <h2>Crear ingredientes</h2>
        <Form>
                <Input label= "Añade un nombre" placeholder="Nombre"></Input>
                <Input label ="Añade un precio" type="number" placeholder="Precio (00.00 €)"></Input>
                <Button className={css.button}>Crea un nuevo ingrediente</Button>            
        </Form>
        </section>
    )
}