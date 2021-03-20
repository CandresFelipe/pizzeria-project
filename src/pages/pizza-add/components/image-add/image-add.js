import React from "react"
import css from "./image-add.module.css"

export function ImageAdd ({pizza}){
    return (
        <section className={css.ImageAdd}>
            <h2>Añade una imagen</h2>
            <button>Subir imagen</button>
        </section>
    )
}

