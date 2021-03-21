import React from 'react'
import { Button } from '../wrappers/button'
import { Form } from '../wrappers/form'
import { FormGroup, FormControl } from '../../components/controls/controls'
import { useForm } from '../../components/useForm/useForm'

export function CartForm({ id }) {
    const frm = new FormGroup({
        'pizza_id': new FormControl()
    })
    const { handlerSubmit, register } = useForm(frm);
    const submit = async (data) => {
        console.log(data)
    }
    return (
        <Form onSubmit={handlerSubmit(submit)}>
            <input type="hidden" value={id}  ref={register(frm.pizza_id)}/>
            <Button>
                AÑADIR AL CARRITO
        </Button>
        </Form>

    )
}