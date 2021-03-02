import React from 'react';
import css from './icon-page.module.css';

export function IconPage({children}) {
    return ( 
        <div className={css.iconpage}>
            <aside className={css.leftmenu}>
                <div>Icono</div>
            </aside>
            <main>
                {children}
            </main>
        </div>
    )
}