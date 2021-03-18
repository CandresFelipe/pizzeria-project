import React from 'react';
import { Form, Button, Select, TextArea } from '../../../../components'
import css from './create-comment.module.css'

export function CommentCreation() {
    var options = {
        '1': 'Horrible',
        '2': 'Mal',
        '3': 'Regular',
        '4': 'Buena',
        '5': 'Muy buena',
        '6': 'Excelente'
    };
    return (
        <Form>
            <div className={css.comment}>
                <Select options={options} />
                <TextArea>Añade tu compentario</TextArea> 
                <Button className={css.button}>
                    Añadir
            </Button>
            </div>
        </Form>


    )
}