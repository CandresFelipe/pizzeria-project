import React from 'react';
import { Form, Input, Button,FormControl, FormGroup, useForm, VALIDATORS } from '../../../../components'
import {apiCall} from '../../../../api'
import {IngredientService} from '../../../../services/ingredient-service'
import css from './ingredient-create.module.css'


export function IngredientCreate() {
    const frm = new FormGroup({
        'name':new FormControl(),
        'price':new FormControl()
    });
    const {register,handlerSubmit} = useForm(frm)
    const submit= async (data)=>{
        await apiCall(IngredientService.create,data)
    }
    return (
        <section>
            <h2>Crea un nuevo ingrediente</h2>
        <Form onSubmit={handlerSubmit(submit)}>
                <Input label= "Añade un nombre" placeholder="Nombre"  ref={register(frm.name)}></Input>
                <Input label ="Añade un precio" type="number" placeholder="Precio (00.00 €)" ></Input>
                <Button className={css.button} type="submit">Crea un nuevo ingrediente</Button>            
        </Form>
        </section>
    )
}