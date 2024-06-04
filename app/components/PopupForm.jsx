import React, { useState, useEffect } from 'react';

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isAgeVerified = localStorage.getItem('ageVerified');
    if (!isAgeVerified) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    // Evitar que la ventana emergente se cierre
    const preventClose = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };
    if (isOpen) {
      window.addEventListener('beforeunload', preventClose);
    } else {
      window.removeEventListener('beforeunload', preventClose);
    }

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, [isOpen]);

  const handleYesClick = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsOpen(false);
  };

  const handleNoClick = () => {
    alert('Debes tener 18 años para acceder');
  };

  const styles = {
    popupContainer: {
      background:' rgba(0, 0, 0, 0.305)',
      backdropFilter: 'blur(15px)',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      display: isOpen ? 'flex' : 'none'
    },
    popupContent: {
      background: '#fff',
      padding: '20px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      width: '50%',
      height: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
      marginBottom: '20px'
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      marginTop: '20px',
      gap: '10px',
    }
  };

  return (
    <div style={styles.popupContainer}>
      <div style={styles.popupContent}>
        <div style={styles.logo}>
          <img src="" alt="" />
        </div>
        <h1>
          Verificación de edad
        </h1>
        <p>
          Debes tener 18 años para acceder
        </p>
        <div style={styles.buttons}>
          <button className='primary-button' id='si' onClick={handleYesClick}>
            Sí
          </button>
          <button className='primary-button' id='no' onClick={handleNoClick}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;