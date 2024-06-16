"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import styles from '../../styles/Login.module.css'
import { db, auth } from '@/services/firebase';
import { ref, set } from 'firebase/database';
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    const login = () => {
        const auth = getAuth();
        console.log(`E-mail: ${email},  Password: ${password}`);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User signed in successfully:", user);
                // Redireciona para a página desejada após o login
                router.push('/pages/ClientesDoDia');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error signing in:", errorCode, errorMessage);
                // Você pode adicionar lógica para lidar com erros, como mostrar uma mensagem de erro no UI
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    }


    function createAccount() {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User created successfully:", user);
                router.push('/');
                // Você pode adicionar mais lógica aqui, como redirecionar o usuário ou atualizar o UI
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error creating user:", errorCode, errorMessage);
                // Você pode adicionar lógica para lidar com erros, como mostrar uma mensagem de erro no UI
            });
    }

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
                    <form>
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
                    {/* <button
                        onClick={createAccount}
                    >
                        <a href="#">Criar uma conta</a>
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export default Login;
