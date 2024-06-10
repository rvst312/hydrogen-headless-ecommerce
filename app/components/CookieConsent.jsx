import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);

    useEffect(() => {
        const cookieConsent = Cookies.get('cookieConsent');
        if (!cookieConsent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        setAnimateOut(true);
        setTimeout(() => {
            Cookies.set('cookieConsent', 'true', { expires: 365 });
            setShowBanner(false);
        }, 300);
    };

    const styles = {
        banner: {
            position: 'fixed',
            bottom: '0',
            left: '20px',
            width: '250px',
            backgroundColor: 'var(--color-dark)',
            color: 'white',
            textAlign: 'center',
            padding: '1.5rem',
            zIndex: 1000,
            borderRadius: '20px 20px 0 0 ',
            transition: 'transform 0.3s linear',
            transform: animateOut ? 'translateY(100px)' : 'translateY(0)',
        },
        message: {
            margin: 0,
            padding: '0 10px',
            fontSize: '.8rem',
            fontHeight: '100',
            color: 'var(--color-white)',
            letterSpacing: '1.2px',
        },
        button: {
            backgroundColor: 'var(--color-dark)',
            border: '1px solid #fff',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontWeight: '800',
            paddingBottom: '10px',
        },
        link: {
            color: 'var(--color-white)',
            textDecoration: 'underline',
            fontSize: '.8rem',
        }
    };

    return (
        showBanner && (
            <div style={styles.banner}>
                <p style={styles.message}>
                    Usamos cookies. Al continuar navegando, aceptas nuestro&nbsp;
                    <a href='/pages/politica-de-cookies'
                       style={styles.link}>
                        uso de cookies.
                    </a>
                </p>
                <button
                    onClick={handleAccept}
                    style={styles.button}
                >
                    Aceptar
                </button>
            </div>
        )
    );
};

export default CookieConsent;