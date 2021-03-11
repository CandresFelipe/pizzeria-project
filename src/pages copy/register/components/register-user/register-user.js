import React from "react"
import css from "./register-user.module.css"
import {Input, Button, Form} from '../../../../components'

export function RegisterUser (){
    return (
        <div className={css.registeruser}>
        <h1>¿Quieres registrarte?</h1>
        <Form>
            <Input className={css.container} placeholder="Tu e-mail" />
            <Input className={css.container} placeholder="Nombre" />
            <Input className={css.container} placeholder="Apellidos"/>
            <Input  className={css.container} placeholder="Contraseña"/>
            <Input type="checkbox" defaultChecked/> <p>"He leído y acepto la Política de Privacidad"</p> 
            <Input type="checkbox" defaultChecked/> <p>"Sí,acepto recibir comunicaciones comerciales y ofertas personalizadas según mi perfil"</p>
            <button>Registrarme</button>
        </Form>
        </div>
        )}