import React from 'react';

export function Pizzaprice({pizza}){
    return(
        <div>
            {pizza.ingredients.reduce((acumulado,ingredient)=>{
                acumulado=ingredient.prize+acumulado;
                return acumulado*1.20;
            },0)}
        </div>
    )
}