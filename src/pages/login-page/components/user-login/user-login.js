import React from "react";
import css from "./user-login.module.css"
import { Button, Input, Form, useForm, FormGroup, FormControl, VALIDATORS } from '../../../../components'
import {apiCall} from '../../../../api'
import {UserService} from '../../../../services/user-service'

export function UserLogin() {
    const frm = new FormGroup({
        "email": new FormControl(),
        "password": new FormControl(),
        "remember": new FormControl(),
    });
    const { register, handlerSubmit } = useForm(frm);
    const submit= async (data)=>{
        await apiCall(UserService.login,data)
        }

    return (
        <div className={css.userlogin}>
            <h1 className={css.header1}>Inicia sesión</h1>
            <h2 className={css.header2}>y pide tu pizza favorita</h2>
            <Form onSubmit={handlerSubmit(submit)}>
                <div className={css.beggin}>
                    <Input className={css.container} placeholder="email" ref={register(frm.email)}/>
                    <Input className={css.container} type="password" placeholder="Contraseña" ref={register(frm.password)} />
                </div>
                <div className={css.firstcheckbox}>
                    <label><Input type="checkbox" defaultChecked ref={register(frm.remember)} />Recordarme</label>
                    <p>¿Olvidaste tus datos?</p>
                </div>
                <button type="submit">Empezar pedido</button>
            </Form>
        </div>
    )
}