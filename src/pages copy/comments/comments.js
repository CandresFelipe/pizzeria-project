import React from 'react'
import { Form } from '../../../../components/wrappers'

export function Comments({ pizza }) {
    return (
        <div>
            <h2>Comentarios</h2>
            <Form>
                <h3>{user.id}</h3>
                <h3>{newDate().toLocalTimeString()}</h3>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <textarea>Lorem ipsum</textarea>
            </Form>
        </div>
    )
}
