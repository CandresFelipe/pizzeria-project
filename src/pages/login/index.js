import React from "react";
import { IconPage } from '../../components';
import { NotRegistered, SocialMedia, UserLogin } from './components';

export default function Login() {
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

