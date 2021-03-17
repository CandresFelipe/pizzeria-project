import React from "react";
import { Input } from '../../../../components';

export function NameAdd(){
    return (
        <div>
            <h2>Añadir el nombre</h2>
            <div>
                <Input placeholder="Nombre del ingrediente"/>
            </div>
        </div>
    )
}