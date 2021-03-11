import React from "react";
import {IconPage} from "../../components";
import {RegisterUser} from "./components";

export default function AddUser({ingredients}) {
    return (
        <IconPage>
            <main>
                <RegisterUser />
            </main>
        </IconPage>
    )
}

AddUser.route = '/adduser';

AddUser.getData = async function (params, query) {
    const res = await fetch('http://localhost:3000/UserAdd');
    return {
        ingredients: await res.json(),
    }
}
