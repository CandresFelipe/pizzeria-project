import React from 'react';

export default function Pizzaprice({pizza}){
    return(
        <div>
            {pizza.ingredients.reduce((acumulado,ingredient)=>{
                acumulado=ingredient.price+acumulado;
                return acumulado*1.20;
            },0)}
        </div>
    )
}