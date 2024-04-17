import { useState, useEffect } from 'react';
import { Link } from '@remix-run/react';

export function HeroHome() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageUrls = [
        'https://cdn.shopify.com/s/files/1/0822/2569/3009/files/JUICYFRUIT.webp?v=1712411987',
        'https://cdn.shopify.com/s/files/1/0822/2569/3009/files/GRAPE-N_CREAM.webp?v=1712850992',
        'https://cdn.shopify.com/s/files/1/0822/2569/3009/files/ALIEN-FRUIT.webp?v=1712411808',
        'https://cdn.shopify.com/s/files/1/0822/2569/3009/files/ORANGE-SHERBET.webp?v=1712411760',
    ];

    const  hero = {
        h1 : "Shop and Discover CBD",
        p: "Lorem ipsum dolor sit amet consectetur adipiscing elit morbi integer sagittis aliquam tempor purus bibendum eu ut elementum nullam dolerco secter dolor sit amet conseectur."
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
                            className="primary-button"
                            to="/collections"
                            onClick={() => {
                                if (layout === 'aside') {
                                    window.location.href = '/collections';
                                }
                            }}
                        >
                            Go to shop
                        </Link>
                        <Link
                            className="primary-button p-button-mobile"
                            to="/collections"
                            onClick={() => {
                                if (layout === 'aside') {
                                    window.location.href = '/collections';
                                }
                            }}
                        >
                            Go to shop
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
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit morbi integer sagittis aliquam tempor purus bibendum eu ut elementum nullam dolerco secter dolor sit amet conseectur.",
            imageUrl: "https://cdn.shopify.com/s/files/1/0822/2569/3009/files/ORANGE-SHERBET.webp?v=1712411760",
            color: "#FFE6E6",
        },
        {
            title: "Indoor",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit morbi integer sagittis aliquam tempor purus bibendum eu ut elementum nullam dolerco secter dolor sit amet conseectur.",
            imageUrl: "https://cdn.shopify.com/s/files/1/0822/2569/3009/files/WEEDINGCAKE.webp?v=1712938190",
            color: "#EAEAEA",
        },
        {
            title: "Cali",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit morbi integer sagittis aliquam tempor purus bibendum eu ut elementum nullam dolerco secter dolor sit amet conseectur.",
            imageUrl: "https://cdn.shopify.com/s/files/1/0822/2569/3009/files/ALIEN-FRUIT.webp?v=1712411808",
            color: "#EEFBE0",
        },
        {
            title: "Hydro",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit morbi integer sagittis aliquam tempor purus bibendum eu ut elementum nullam dolerco secter dolor sit amet conseectur.",
            imageUrl: "https://cdn.shopify.com/s/files/1/0822/2569/3009/files/AMNESIA.webp?v=1712422235",
            color: "#E8F5FC",
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
                        />
                    ))
                }
            </div>
        </section>
    )
}

export function Card({ title, description, imageUrl, color }) {

    return (
        <div className="card-wrapper" style={{ backgroundColor: color }}>
            <div className="left">
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
            </div>
            <div className="right">
                <img
                    src={imageUrl}
                    alt={title}
                />
            </div>
        </div>
    )
}