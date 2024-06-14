"use client";

import React, { useState } from 'react';
import Image from "next/image";
import styles from '../../styles/Login.module.css'
import { database } from '@/services/firebase';
import { ref, set } from 'firebase/database';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // ID único para o usuário
        const userId = Date.now().toString();

        set(ref(database, 'users/' + userId), {
            firstName: firstName,
            email: email,
        }).then(() => {
            console.log('Dados salvos com sucesso!');
        }).catch((error) => {
            console.error('Erro ao salvar dados: ', error);
        });
    };


    return (
        <div className={styles.containerBody}>
            <div className={styles.loginContainer}>
                <div className={styles.loginHeader}>
                    <Image src="/images/logo.png" alt="Logo" width={280} height={280} />
                </div>
                <div className={styles.loginTabs}>
                    <button className={`${styles.tab} ${styles.active}`} id="login-tab">Login</button>
                </div>
                <div className={styles.loginForm}>
                    <form action="#">
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Senha"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                            <span className={styles.showPassword}>&#128065;</span>
                        </div>
                        <div className={styles.extraOptions}>
                            <label className={styles.checkboxContainer}>
                                <input type="checkbox" id="remember" name="remember" />
                                <label htmlFor="remember">Lembrar-se de mim</label>
                            </label>
                            <a href="#">Esqueceu sua senha?</a>
                        </div>
                        <div className={styles.buttonLogar}>
                            <button type="submit">Logar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
