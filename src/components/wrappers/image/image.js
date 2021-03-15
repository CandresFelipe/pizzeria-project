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
        <img className={css.img} src={url} {...rest}/>
    </picture>
    )
}