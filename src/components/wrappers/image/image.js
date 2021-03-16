import React from 'react'
import css from './image.module.css'

export function Image(props) {
    const { image, ...rest } = props;
    const { url } = image;
    const urlwebp = url.replace(/[^.]+$/, 'webp')
    return (
        <picture>
            <source type={urlwebp} srcSet={urlwebp} />
            <source type={url} srcSet={url} />
            <img className={css.container} src={url} {...rest} />
        </picture>
    )
}