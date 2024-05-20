import { useState, useEffect } from 'react';
import { Link } from '@remix-run/react';
import { ArrowRight } from './icons/icon'

export function HeroHome() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageUrls = [
        'https://cdn.shopify.com/s/files/1/0822/2569/3009/files/JUICYFRUIT.webp?v=1712411987',
        'https://cdn.shopify.com/s/files/1/0822/2569/3009/files/GRAPE-N_CREAM.webp?v=1712850992',
        'https://cdn.shopify.com/s/files/1/0822/2569/3009/files/ALIEN-FRUIT.webp?v=1712411808',
        'https://cdn.shopify.com/s/files/1/0822/2569/3009/files/ORANGE-SHERBET.webp?v=1712411760',
    ];

    const hero = {
        h1: "Compra y descubre el CBD",
        p: ""
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 1100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="hero-wrapper">
            <div className="content">
                <div className="left">
                    <h1>
                        {hero.h1}
                    </h1>
                    <p>
                        {hero.p}
                    </p>
                    <div className="calls">
                        <Link
                            className="primary-button p-button-mobile"
                            to="/collections"
                            onClick={() => {
                                if (layout === 'aside') {
                                    window.location.href = '/collections';
                                }
                            }}
                        >
                            Ir a la tienda
                        </Link>
                    </div>

                </div>
                <div className="right">
                    <img
                        src={imageUrls[currentIndex]}
                    />
                </div>
            </div>
        </div>
    );
}

export function CardsCategory() {
    const content = [
        {
            title: "Flowers",
            description: "Una selección de las mejores géneticas del mercado cultivadas de la mejor manera. Simplemente deliciosas.",
            imageUrl: "https://cdn.shopify.com/s/files/1/0822/2569/3009/files/ORANGE-SHERBET.webp?v=1712411760",
            color: "#FFE6E6",
            url: "",
        },
        {
            title: "Indoor",
            description: "Nuestras genéticas cultivadas en interior con las mejores condiciones. Para lograr una altísima calidad.",
            imageUrl: "https://cdn.shopify.com/s/files/1/0822/2569/3009/files/WEEDINGCAKE.webp?v=1712938190",
            color: "#EAEAEA",
            url: "indoor",
        },
        {
            title: "Cali",
            description: "Aquí solo tenemos lo mejor de lo mejor. Nuestra selección de genéticas pata negra cultivadas en interior e hydroponía.",
            imageUrl: "https://cdn.shopify.com/s/files/1/0822/2569/3009/files/ALIEN-FRUIT.webp?v=1712411808",
            color: "#EEFBE0",
            url: "cali",
        },
        {
            title: "Hydro",
            description: "Atrévete a probar nuestras géneticas de cultivo hydropónico. Un salto en el sabor y apariencia de las flores.",
            imageUrl: "https://cdn.shopify.com/s/files/1/0822/2569/3009/files/AMNESIA.webp?v=1712422235",
            color: "#E8F5FC",
            url: "hydro",
        },
    ]

    return (
        <section>
            <div className="section-wrapper">
                {
                    content.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            color={item.color}
                            url={item.url}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export function Card({ title, description, imageUrl, color, url }) {

    return (
        <div className="card-wrapper" style={{ backgroundColor: color }}>
            <div className="left">
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
                <a href={"/collections/" + url}>
                    <span>Ver más</span>
                    <ArrowRight />
                </a>
            </div>
            <div className="right">
                <a href={"/collections/" + url}>
                    <img
                        src={imageUrl}
                        alt={title}
                    />
                </a>
            </div>
        </div>
    )
}