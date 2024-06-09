// pages/editar-horarios.js
import React from 'react';
import Image from "next/image";
import styles from '../../../styles/ClientesDoDia.module.css'

const ClientesDoDia = () => {
    return (
        <div>
            <header>
                <div className={styles.logo}>
                    <Image className={styles.imagem} src={`/images/logo.png`} width="75" height="75" />
                </div>
                <nav>
                    <a href="/editar-horarios" className={styles.active}>Editar Horários</a>
                    <a href="/clientes-do-dia">Clientes do dia</a>
                    <div className={styles.userDropdown}>
                        <button className={styles.dropbtn}>Davi Nunes</button>
                        <div className={styles.dropdownContent}>
                            <a href="#">Profile</a>
                            <a href="#">Logout</a>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <h1>Data e horário</h1>
                <div className={styles.calendar}>
                    <div className={styles.calendarHeader}>
                        <button className={styles.navArrow} id="prev-month">&#9664;</button>
                        <span id="month-year"></span>
                        <button className={styles.navArrow} id="next-month">&#9654;</button>
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
                        <tbody id="calendar-body">
                            {/* Os dias corridos serão inseridos dinamicamente aqui */}
                        </tbody>
                    </table>
                </div>
                <div id="times-container" className={styles.timesContainer}>
                    {/* Os intervalos de tempo serão inseridos dinamicamente aqui */}
                </div>
                <button id="add-time-btn" className={styles.addTimeBtn}>+</button>
            </main>
        </div>
    );
}
export default ClientesDoDia;
/*
document.addEventListener('DOMContentLoaded', () => {
    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    let currentDate = new Date();
    let selectedDate = new Date(currentDate);  // Initialize selected date to current date
    let selectedDay = null;

    const calendarBody = document.getElementById('calendar-body');
    const monthYear = document.getElementById('month-year');

    function renderCalendar(date) {
        calendarBody.innerHTML = '';

        const month = date.getMonth();
        const year = date.getFullYear();

        monthYear.textContent = `${monthNames[month]} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
        const lastDateOfLastMonth = new Date(year, month, 0).getDate();

        let day = 1;
        let nextMonthDay = 1;

        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                if (i === 0 && j < firstDay) {
                    cell.classList.add('prev-month');
                    cell.textContent = lastDateOfLastMonth - firstDay + j + 1;
                } else if (day > lastDateOfMonth) {
                    cell.classList.add('next-month');
                    cell.textContent = nextMonthDay++;
                } else {
                    cell.classList.add('current-month');
                    cell.textContent = day;

                    // Highlight the selected day
                    if (day === selectedDate.getDate() &&
                        month === selectedDate.getMonth() &&
                        year === selectedDate.getFullYear() && 
                        selectedDay === null) {
                        cell.classList.add('selected');
                        selectedDay = cell;
                    }

                    cell.addEventListener('click', () => {
                        // Update selected day
                        if (selectedDay) {
                            selectedDay.classList.remove('selected');
                        }
                        cell.classList.add('selected');
                        selectedDay = cell;

                        // Update selected date
                        selectedDate.setDate(day);
                        selectedDate.setMonth(month);
                        selectedDate.setFullYear(year);
                    });

                    day++;
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }

    document.getElementById('prev-month').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    document.getElementById('next-month').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
*/

