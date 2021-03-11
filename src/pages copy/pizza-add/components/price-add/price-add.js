import React from "react";
import {Input} from '../../../../components';

export function PriceAdd() {
    return (
        <div>
            <h2>Añadir el precio</h2>
            <div>
                <Input placeholder="Precio del Ingrediente" />
            </div>
        </div>
    )
}