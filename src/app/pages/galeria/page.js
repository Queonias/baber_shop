import Link from "next/link";
import Image from "next/image";
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "../../../styles/Galeria.module.css";
import Slider from './Slider';

export default function Galeria() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const images = [
        '/images/domiciliar.png',
        '/images/completo.png',
        '/images/barbeiro.png',
        // Adicione mais URLs de imagens conforme necessário
    ];
    return (
        <div className={styles.galeria_container}>
            <div className={styles.title_container}>
                <h2>Galeria</h2>
            </div>
            <div className={styles.slider_container}>

                <Slider
                    isHorizontal={true}
                    gap={20}
                    autoPlay={true}
                    minHeight="200px"
                    minWidth="300px"
                    hideArrows={false}
                    hideDevPanel={true}
                    hideInitGap={false}
                    autoPlayInterval={3000}
                    onActiveIndexUpdate={(index) => console.log('Índice ativo:', index)}
                >
                    {/* Aqui estão os elementos JSX que serão renderizados no carrossel */}
                    <div style={{ backgroundColor: 'red', width: '100%', height: '100%' }}>Slide 1</div>
                    <div style={{ backgroundColor: 'blue', width: '100%', height: '100%' }}>Slide 2</div>
                    <div style={{ backgroundColor: 'green', width: '100%', height: '100%' }}>Slide 3</div>
                </Slider>
            </div>
        </div>)
};