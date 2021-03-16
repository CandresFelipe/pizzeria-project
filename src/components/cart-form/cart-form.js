import React from 'react'
import { Button } from '../wrappers/button'
import { Form } from '../wrappers/form'

export function CartForm({ id }) {
    return (
    <Form>
        <input type="hidden" value={id} />
        <Button>
            Añadir al Carrito
        </Button>
    </Form>

    )
}