import React from "react";
import { IconPage } from '../../components';
import { NotRegistered, SocialMedia, UserLogin } from './components';

export default function Login({ingredients}) {
    return (
        <IconPage>
            <main>
                <UserLogin />
                <SocialMedia />
                <NotRegistered />
            </main>
        </IconPage>
    )
}

Login.route='/login';

Login.getData = async function (params, query) {
    const res = await fetch('http://localhost:3000/login');
    return {
        ingredients: await res.json(),
    }
}