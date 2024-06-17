"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import styles from '../../../styles/ClientesDoDia.module.css';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from '../../../services/firebase';
import { collection, getDocs } from "firebase/firestore";
import Card from '../../components/card';

const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const EditarHorarios = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null);
    const [calendarDays, setCalendarDays] = useState([]);
    const [clientesDoDia, setClientesDoDia] = useState([]);
    const [dayClients, setDayClients] = useState([]);

    const renderCalendar = (date) => {
        const month = date.getMonth();
        const year = date.getFullYear();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
        const lastDateOfLastMonth = new Date(year, month, 0).getDate();

        let days = [];
        let day = 1;
        let nextMonthDay = 1;

        for (let i = 0; i < 6; i++) {
            let week = [];
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    week.push({
                        type: 'prev-month',
                        day: lastDateOfLastMonth - firstDay + j + 1
                    });
                } else if (day > lastDateOfMonth) {
                    week.push({
                        type: 'next-month',
                        day: nextMonthDay++
                    });
                } else {
                    week.push({
                        type: 'current-month',
                        day: day,
                        isSelected: day === selectedDate.getDate() &&
                            month === selectedDate.getMonth() &&
                            year === selectedDate.getFullYear()
                    });
                    day++;
                }
            }
            days.push(week);
        }
        setCalendarDays(days);
    };

    const getAllDocuments = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "agendamentos"));
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({ id: doc.id, ...doc.data() });
            });
            return documents;
        } catch (error) {
            console.error("Error getting documents: ", error);
            throw error;
        }
    };

    useEffect(() => {
        if (clientesDoDia.length > 0) {
            const days = clientesDoDia[0].filter(cliente => cliente.data.getDate() === selectedDay);
            setDayClients(days);
        }
        // console.log(clientesDoDia[0].map((days) => days.data.getMonth));
        console.log(clientesDoDia[0]);
    }, [selectedDay]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setLoading(false);
            } else {
                // User is signed out, redirect to login
                router.push('pages/login');
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [router]);

    useEffect(() => {
        renderCalendar(currentDate);
        const clientes = [];
        getAllDocuments().then(docs => {
            docs = docs.map(doc => {
                const dataAgendamento = doc.dataAgendamento;
                const date = new Date(dataAgendamento);
                return {
                    ...doc,
                    data: date,
                    mes: date.getMonth() + 1
                };

            });
            clientes.push(docs);
        }).catch(error => {
            console.error("Error: ", error);
        });
        setClientesDoDia(clientes);
    }, [currentDate]);

    if (loading) {
        return <div>Loading...</div>;
    }



    const handleDayClick = (day, month, year) => {
        setSelectedDate(new Date(year, month, day));
        setSelectedDay(day);
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    };

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === 'Profile') {
            // Redireciona para o perfil
            window.location.href = '#profile'; // Ajuste o href conforme necessário
        } else if (selectedValue === 'Logout') {
            // Executa a ação de logout
            window.location.href = '#logout'; // Ajuste o href conforme necessário
        }
    };

    return (
        <div className={styles.divBody}>
            <div className={styles.divHeader}>
                <header>
                    <div className={styles.logo}>
                        <Image src="/images/logo.png" alt="Logo" width={180} height={180} />
                    </div>
                    <nav className={styles.active}>
                        <a href="#">Home</a>
                        <a href="#" >Editar Horários</a>
                        <div className={styles.userDropdown}>
                            <select className={styles.dropbtn} onChange={handleSelectChange}>
                                <option value="Davi Nunes">Davi Nunes</option>
                                <option value="Logout">Sair</option>
                            </select>
                        </div>
                    </nav>
                </header>
            </div>
            <div className={styles.divMain}>
                <main className={styles.divMain}>
                    <h1>Data</h1>
                    <div className={styles.calendar}>
                        <div className={styles.calendarHeader}>
                            <button className={styles.navArrow} onClick={handlePrevMonth}>&#9664;</button>
                            <span>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
                            <button className={styles.navArrow} onClick={handleNextMonth}>&#9654;</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Dom</th>
                                    <th>Seg</th>
                                    <th>Ter</th>
                                    <th>Qua</th>
                                    <th>Qui</th>
                                    <th>Sex</th>
                                    <th>Sab</th>
                                </tr>
                            </thead>
                            <tbody>
                                {calendarDays.map((week, weekIndex) => (
                                    <tr key={weekIndex}>
                                        {week.map((day, dayIndex) => (
                                            <td key={dayIndex}
                                                className={styles[day.type] + (day.isSelected ? ` ${styles.selected}` : '')}
                                                onClick={() => day.type === 'current-month' && handleDayClick(day.day, currentDate.getMonth(), currentDate.getFullYear())}>
                                                {day.day}
                                                {/* {console.log(clientesDoDia.filter(days => days.data.getDate() === day.day))} */}
                                                {/* {clientesDoDia[0].some((days) => days.data.getDate() === day.day)} */}
                                                {/* {console.log(clientesDoDia[0].map((days) => days.data.getMonth))} */}
                                                {/* {+ ((clientesDoDia[0].some((days) => days.data.getDate() === day.day)) ? ` ${styles.hasClients}` : '')} */}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </main>
                <div>
                    <h2>Clientes do dia {selectedDay}</h2>
                    {dayClients.map((cliente, index) => (
                        <Card key={index} client={cliente} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EditarHorarios;
