import React from 'react';
import { Form, Input, Button } from '../../../../components'
import css from './ingredient-create.module.css'
export function IngredientCreate() {
    return (
        <Form>
            <h1>Crear ingredientes</h1>
            <h2> Añade un nombre</h2>
            <div className={css.contour}>
                <Input  placeholder="Nombre"></Input>
            </div>
            <h2> Añade un precio</h2>
            <div className={css.contour}>
                <Input type="numeric" placeholder="Precio (00.00.00 $)"></Input>
            </div>
                <Button className={css.button} label="Crea un nuevo ingrediente"></Button>
        </Form>
    )
}