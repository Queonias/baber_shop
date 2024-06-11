import React from 'react';
import Image from "next/image";
import styles from '../../../styles/Login.module.css'

const Login = () => {
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
                            <input type="email" id="email" name="email" placeholder="E-mail" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" name="password" placeholder="Senha" required />
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
