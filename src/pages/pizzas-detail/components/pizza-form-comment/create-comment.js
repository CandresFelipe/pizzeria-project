import React from 'react';
import { Form, Button, Select, TextArea } from '../../../../components'
import css from './create-comment.module.css'

export function CommentCreation() {
    var options = {
        '1': 'Excelente',
        '2': 'Muy buena',
        '3': 'Buena',
        '4': 'Regular',
        '5': 'Mal',
        '6': 'Horrible'
    };
    return (
        <Form>
            <div className={css.comment}>
                <Select options={options} />
                <TextArea>Añade tu compentario</TextArea>
                <Button className={css.button}>Añadir</Button>
            </div>
        </Form>


    )
}