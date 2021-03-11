import React from "react";
import { Button } from '../../../../components'
import css from "./social-media.module.css"
export function SocialMedia() {
    return (
        <div className={css.media}>
            <hr className={css.leftline}></hr><p>o con tus RRSS</p><hr className={css.rightline}></hr>
            <button className={css.rrss}>Google</button>
        </div>
    )
}