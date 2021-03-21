import React from "react";
import { IconPage } from '../../components';
import { NotRegistered, SocialMedia, UserLogin } from './components';

export default function LoginPage() {
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
