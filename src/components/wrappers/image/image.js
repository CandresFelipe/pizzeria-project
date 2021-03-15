import React from 'react'



export function Image({ image }) {
    return(
    <picture>
        <source type="image/webp" srcset= {`${image.url}.webp`}/>
        <source type="image/jpeg" srcset={`${image.url}.jpg`}/>
        <img src={`${image.url}.jpg`} alt=""/>
    </picture>
    )
}