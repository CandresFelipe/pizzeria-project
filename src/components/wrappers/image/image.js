import React from 'react'

export function Image(props) {
    const {image, ...rest} = props;
    const {url} = image;
    const urlwebp = url.replace(/[^.]+$/,'webp')
    return(
    <picture>
        <source type={urlwebp} srcset= {urlwebp}/>
        <source type={url} srcset={url}/>
        <img src={url} {...rest}/>
    </picture>
    )
}