import React from 'react';
import { Form, Button, Select, TextArea, FormGroup, FormControl, VALIDATORS,useForm } from '../../../../components'
import {apiCall} from '../../../../api'
import PizzaService from '../../../../services/pizza-service'
import css from './create-comment.module.css'

export function CommentCreation({id}) {
    const frm = new FormGroup({
        'id':new FormControl(),
        'text':new FormControl(),
        'score': new FormControl()
    })
    const {register,handlerSubmit} = useForm(frm);
    const submit = async (data)=>{
        await apiCall(PizzaService.addComment,data);
    }
    var options = {
        '1': 'Excelente',
        '2': 'Muy buena',
        '3': 'Buena',
        '4': 'Regular',
        '5': 'Mal',
        '6': 'Horrible'
    };
    return (
        <Form onSubmit={handlerSubmit(submit)}>
            <div className={css.comment}>
            <input type="hidden" value={id} ref={register(frm.id)}/>
                <Select options={options} ref={register(frm.score)} />
                <TextArea ref={register(frm.text)} placeholder="Añade tu comentario"></TextArea>
                <Button type="submit" className={css.button}>Añadir</Button>
            </div>
        </Form>


    )
}