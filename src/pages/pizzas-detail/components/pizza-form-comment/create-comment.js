import React from 'react';
import { Form, Button, Select, TextArea } from '../../../../components'
import css from './create-comment.module.css'

export function CommentCreation() {
    var options = {
        '1': 'horrible',
        '2': 'desagradable',
        '3': 'feo',
        '4': 'regular',
        '5': 'bueno',
        '6': 'excelente'
    };
    return (
        <Form>
            <div className={css.comment}>
                <Select options={options} />
                <TextArea/>
                <Button className={css.button}>
                    Añadir
            </Button>
            </div>
        </Form>


    )
}