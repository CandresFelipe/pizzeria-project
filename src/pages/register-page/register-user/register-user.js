import React from "react"
import css from "./register-user.module.css"
import { Input, Button, Form, useForm, FormGroup, FormControl,VALIDATORS } from '../../../components'
import '../../../styles'


export function RegisterUser() {
    const frm = new FormGroup({
        "email": new FormControl(),
        "name": new FormControl(),
        "surname": new FormControl(),
        "password": new FormControl(),
        "privacy": new FormControl(),
        "accept": new FormControl(),
    });
    const {
        register, handlerSubmit
    } = useForm(frm);
    function submit(data) {
        console.log(data)
    }
    return (
        <div className={css.registeruser}>
            <h1>¿Quieres registrarte?</h1>
            <Form onSubmit={handlerSubmit(submit)}>
                <Input className={css.boxes} placeholder="Tu e-mail" ref={register(frm.email)} />
                <Input className={css.boxes} placeholder="Nombre"  ref={register(frm.name)}/>
                <Input className={css.boxes} placeholder="Apellidos" ref={register(frm.surname)} />
                <Input className={css.boxes} type="password" placeholder="Contraseña" ref={register(frm.password)} />
                <div className={css.privacy}>
                    <Input type="checkbox" defaultChecked  ref={register(frm.privacy)}/>
                    <p>"He leído y acepto la Política de Privacidad" </p>
                </div>
                <div className={css.accept}>
                <Input type="checkbox" defaultChecked  ref={register(frm.accept)}/>
                <p>"Sí,acepto recibir comunicaciones comerciales y ofertas personalizadas según mi perfil"</p>
                </div>
                <button type="submit">Registrarme</button>
            </Form>
        </div>
    )
}