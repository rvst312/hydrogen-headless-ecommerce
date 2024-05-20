import React, { useEffect } from 'react';

const PopupForm = () => {
  useEffect(() => {
    // Evitar que la ventana emergente se cierre
    const preventClose = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', preventClose);
    
    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  const styles = {
    popupContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    popupContent: {
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      width: '80%',
      height: '80%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    popupIframe: {
      width: '100%',
      height: '100%',
      border: 'none'
    }
  };

  return (
    <div style={styles.popupContainer}>
      <div style={styles.popupContent}>
        <iframe 
          src="https://wordpress-1222738-4350818.cloudwaysapps.com/form/"
          title="Formulario Embebido"
          style={styles.popupIframe}
        ></iframe>
      </div>
    </div>
  );
};

export default PopupForm;