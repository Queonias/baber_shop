"use client";

import React, { useState } from 'react';
import Image from "next/image";
import styles from '../../styles/Login.module.css'
import { database, db } from '@/services/firebase';
import { ref, set } from 'firebase/database';
import { collection, addDoc } from "firebase/firestore";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "users"), {
                email: email,
                password: password,
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
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
                    <form >
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                            <button
                                type="button"
                                onClick={handleSubmit}
                            >
                                Logar
                            </button>
                        </div>
                    </form>
                    <button
                        onClick={handleSubmit}
                    >
                        <a href="#">Criar uma conta</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
