"use client";

import React, { useState } from 'react';
import styles from '../../../styles/AgendeSeuHorario.module.css';
import Link from "next/link";
import Image from "next/image";
import InputMask from 'react-input-mask';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../services/firebase';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from "../../components/MobileMenu";

const AgendeSeuHorario = () => {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [dataAgendamento, setDataAgendamento] = useState('');
    const [horarioAgendamento, setHorarioAgendamento] = useState('');
    const [servico, setServico] = useState('');
    const [telefone, setTelefone] = useState('');
    const [formSalve, setFormSalve] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const [errors, setErrors] = useState({});

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const salveData = async (data) => {
        try {
            const docRef = await addDoc(collection(db, "agendamentos"), {
                nomeCompleto: data.nomeCompleto,
                dataAgendamento: data.dataAgendamento,
                horarioAgendamento: data.horarioAgendamento,
                servico: data.servico,
                telefone: data.telefone,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ",)
        }
    }

    const handleSelectChange = (event) => {
        setServico(event.target.value);
    };

    const validate = () => {
        const errors = {};
        if (!nomeCompleto.trim()) {
            errors.nomeCompleto = 'Nome completo é obrigatório';
        }
        if (!dataAgendamento) {
            errors.dataAgendamento = 'Data de agendamento é obrigatória';
        }
        if (!horarioAgendamento) {
            errors.horarioAgendamento = 'Horário de agendamento é obrigatório';
        }
        if (!servico) {
            errors.servico = 'Escolha um serviço';
        }
        const telefoneDigits = telefone.replace(/\D/g, '');
        if (telefoneDigits.length !== 11) {
            errors.telefone = 'Telefone inválido';
        }
        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setFormSalve(false);
        } else {
            // Aqui você pode adicionar a lógica para enviar os dados
            salveData({
                nomeCompleto,
                dataAgendamento,
                horarioAgendamento,
                servico,
                telefone,
            });
            // Resetar campos e erros
            setNomeCompleto('');
            setDataAgendamento('');
            setHorarioAgendamento('');
            setServico('');
            setTelefone('');
            setErrors({});
            setFormSalve(true);
        }
    };

    if (formSalve) {
        return (
            <div className={styles.main}>
                <nav className={styles.navbar}>
                    <div className={styles.navbar_container}>
                        <Image className={styles.imagem} src={`/images/logo.png`} width="75" height="75" />
                        <ul className={styles.link_items}>
                            <li>
                                <Link className={styles.link} href={`/`}>Inicio</Link>
                            </li>
                            <li>
                                <Link className={styles.link} href={`/#services`}>Serviços</Link>
                            </li>
                            <li>
                                <Link className={styles.link} href={`/about`}>Galeria</Link>
                            </li>
                            <li>
                                <Link className={styles.link} href={`/about`}>Localização</Link>
                            </li>
                        </ul>
                        <button className={styles.menuButton} onClick={toggleMenu}>
                            <MenuIcon />
                        </button>
                    </div>
                </nav>
                <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
                <div className={styles.container}>
                    <div className={styles.title}>
                        <p>Agende Seu Horário</p>
                    </div>
                    <div className={styles.formSalve}>
                        <p>Seu agendamento foi realizado com sucesso!</p>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={styles.main}>
            <nav className={styles.navbar}>
                <div className={styles.navbar_container}>
                    <Image className={styles.imagem} src={`/images/logo.png`} width="75" height="75" />
                    <ul className={styles.link_items}>
                        <li>
                            <Link className={styles.link} href={`/`}>Inicio</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href={`/#services`}>Serviços</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href={`/about`}>Galeria</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href={`/about`}>Localização</Link>
                        </li>
                    </ul>
                    <button className={styles.menuButton} onClick={toggleMenu}>
                        <MenuIcon />
                    </button>

                </div>
            </nav>
            <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
            <div className={styles.container}>
                <div className={styles.title}>
                    <p>Agende Seu Horário</p>
                </div>
                <div className={styles.inf}>
                    <div className={styles.left_container}>
                        <div className={styles.welcome}>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputContainer}>
                                    <div className={styles.container_conteudo}>
                                        <label htmlFor="nomeCompleto" className={styles.label}>Nome completo</label>
                                        <input
                                            type="text"
                                            id="nomeCompleto"
                                            name="nomeCompleto"
                                            value={nomeCompleto}
                                            onChange={(e) => setNomeCompleto(e.target.value)}
                                            className={styles.dropbtn}
                                        />
                                        {errors.nomeCompleto && <span className={styles.error}>{errors.nomeCompleto}</span>}
                                    </div>
                                </div>

                                <div className={styles.inputContainer}>
                                    <div className={styles.container_conteudo}>
                                        <label htmlFor="dataAgendamento" className={styles.label}>Data de agendamento:</label>
                                        <input
                                            type="date"
                                            id="dataAgendamento"
                                            name="dataAgendamento"
                                            value={dataAgendamento}
                                            onChange={(e) => setDataAgendamento(e.target.value)}
                                            className={styles.dropbtn}
                                        />
                                        {errors.dataAgendamento && <span className={styles.error}>{errors.dataAgendamento}</span>}
                                    </div>
                                </div>

                                <div className={styles.inputContainer}>
                                    <div className={styles.container_conteudo}>
                                        <label className={styles.label}>Escolha o horário:</label>
                                        <div className={styles.radioGroup}>
                                            <input
                                                type="radio"
                                                id="hora0900"
                                                name="horarioAgendamento"
                                                value="09:00"
                                                checked={horarioAgendamento === '09:00'}
                                                onChange={(e) => setHorarioAgendamento(e.target.value)}
                                                className={styles.radioInput}
                                            />
                                            <label htmlFor="hora0900" className={styles.radioLabel}>09:00</label>

                                            <input
                                                type="radio"
                                                id="hora1100"
                                                name="horarioAgendamento"
                                                value="11:00"
                                                checked={horarioAgendamento === '11:00'}
                                                onChange={(e) => setHorarioAgendamento(e.target.value)}
                                                className={styles.radioInput}
                                            />
                                            <label htmlFor="hora1100" className={styles.radioLabel}>11:00</label>

                                            <input
                                                type="radio"
                                                id="hora1400"
                                                name="horarioAgendamento"
                                                value="14:00"
                                                checked={horarioAgendamento === '14:00'}
                                                onChange={(e) => setHorarioAgendamento(e.target.value)}
                                                className={styles.radioInput}
                                            />
                                            <label htmlFor="hora1400" className={styles.radioLabel}>14:00</label>

                                            <input
                                                type="radio"
                                                id="hora1600"
                                                name="horarioAgendamento"
                                                value="16:00"
                                                checked={horarioAgendamento === '16:00'}
                                                onChange={(e) => setHorarioAgendamento(e.target.value)}
                                                className={styles.radioInput}
                                            />
                                            <label htmlFor="hora1600" className={styles.radioLabel}>16:00</label>
                                        </div>
                                        {errors.horarioAgendamento && <span className={styles.error}>{errors.horarioAgendamento}</span>}
                                    </div>
                                </div>

                                <div className={styles.inputContainer}>
                                    <div className={styles.container_conteudo}>
                                        <label htmlFor="servico" className={styles.label}>Escolher serviço</label>
                                        <select
                                            id="servico"
                                            name="servico"
                                            value={servico}
                                            onChange={handleSelectChange}
                                            className={styles.dropbtn}
                                        >
                                            <option value="">Selecione um serviço</option>
                                            <option value="Cabelo">Cabelo</option>
                                            <option value="Barba">Barba</option>
                                            <option value="Domiciliar">Domiciliar</option>
                                        </select>
                                        {errors.servico && <span className={styles.error}>{errors.servico}</span>}
                                    </div>
                                </div>

                                <div className={styles.inputContainer}>
                                    <div className={styles.container_conteudo}>
                                        <label htmlFor="telefone" className={styles.label}>Telefone:</label>
                                        <InputMask
                                            mask="(99) 9 9999-9999"
                                            value={telefone}
                                            onChange={(e) => setTelefone(e.target.value)}
                                        >
                                            {() => <input type="tel" id="telefone" name="telefone" className={styles.inputTelefone} />}
                                        </InputMask>
                                        {errors.telefone && <span className={styles.error}>{errors.telefone}</span>}
                                    </div>
                                </div>

                                <div className={styles.containerButton}>
                                    <button type="submit" className={styles.buttonEnviar}>Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgendeSeuHorario;
