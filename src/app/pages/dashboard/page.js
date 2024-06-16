// pages/dashboard.js
"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../../services/firebase';

const Dashboard = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

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

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Dashboard</h1>
            <p>Bem-vindo ao seu dashboard!</p>
            {/* Adicione aqui mais conteúdo ou componentes do dashboard conforme necessário */}
        </div>
    );
};

export default Dashboard;
