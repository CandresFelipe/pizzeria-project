import React from 'react'
import { Form, Input } from '../../../../components';
import css from './search.module.css'
export function Search() {
    return (
        <Form className ={css.search}>
            <Input className={css.contour}  placeholder="busque su pizza favorita" />
            <Input className={css.contour}  placeholder="filtro" />
            <Input className={css.contour}  placeholder="ordenar" />
        </Form>
    )
}