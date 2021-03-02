import React from "react"
import css from "./image-add.module.css"
export function ImageAdd ({pizza}){
    return (
        <div className={css.ImageAdd}>
            <h2>Añade una imagen</h2>
            <image alt="pizza.img"></image> 
            <button >Subir imagen</button>
        </div>
    )
}
/*Hay que añadirle el evento y el src a la imagen*/
