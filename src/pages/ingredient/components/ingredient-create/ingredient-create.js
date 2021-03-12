import React from 'react';
import { Form, Input, Button } from '../../../../components'
import css from './ingredient-create.module.css'
export function IngredientCreate() {
    return (
        <section>
        <Form>
            <div>Crear ingredientes
                <div>Añade un nombre</div>
                <Input placeholder="Nombre"></Input>
                <div> Añade un precio</div>
                <Input type="numeric" placeholder="Precio (00.00 €)"></Input>
                <Button className={css.button} label="Crea un nuevo ingrediente"></Button>
            </div>
        </Form>
        </section>
    )
}