import React from "react";
import css from "./not-registered.module.css";
import { Button } from '../../../../components';

export function NotRegistered() {
    return (
        <div className={css.notregistered}>
            <h2>¿Aún no estás registrado?</h2>
            <button>Registrarme</button>
        </div>
    )
}