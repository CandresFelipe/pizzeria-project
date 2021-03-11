import React from "react";
import css from "./user-login.module.css"
import { Button, Input, Form, useForm, FormGroup, FormControl } from '../../../../components'

export function UserLogin() {
    const frm = new FormGroup({
        "alias": new FormControl(),
        "password": new FormControl(),
        "remember": new FormControl(),
    });
    const {
        register, handlerSubmit
    } = useForm(frm);
    function submit(data) {
        console.log(data)
    }
    return (
        <div className={css.userlogin}>
            <h1 className={css.header1}>Inicia sesión</h1>
            <h2 className={css.header2}>y pide tu pizza favorita</h2>
            <Form>
                <div className={css.beggin}>
                    <Input className={css.container} placeholder="Usuario" ref={register(frm.alias)} />
                    <Input className={css.container} type="password" placeholder="Contraseña"  ref={register(frm.password)}/>
                </div>
                <div className={css.firstcheckbox}>
                    <label><Input type="checkbox" defaultChecked  ref={register(frm.remember)}/>Recordarme</label>
                    <p>¿Olvidaste tus datos?</p>
                </div>
                <button type="submit">Empezar pedido</button>
            </Form>
        </div>
    )
}