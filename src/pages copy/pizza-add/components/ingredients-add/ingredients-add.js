import React from "react";
import { Input, Form } from '../../../../components';

export function IngredientsAdd({ ingredients }) {
    return (
        <Form>
            {ingredients.map((ingredient) => {
                return (
                    <Input
                        className={css.contour}
                        key={ingredient.id}
                        ingredient={ingredient}
                        placeholder={`${ingredient.name} (${ingredient.prize}.00.00 $)`} />
                )
            })}
        </Form>
    )
}
