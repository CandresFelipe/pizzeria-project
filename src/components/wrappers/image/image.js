import React from 'react'
import css from './image.module.css'

export function Image(props) {
    const {image, ...rest} = props;
    const {url} = image;
    const urlwebp = url.replace(/[^.]+$/,'webp')
    return(
    <picture>
        <source type={urlwebp} srcset= {urlwebp}/>
        <source type={url} srcset={url}/>
<<<<<<< HEAD
        <img className={css.img} src={url} {...rest}/>
=======
        <img src={url} {...rest}/>
>>>>>>> 270d4c5ba4b8b04cbef1e4feb7a3a8ca288f765d
    </picture>
    )
}