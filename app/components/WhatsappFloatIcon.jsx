import React from 'react';
import { WhatsAppIcon } from './icons/icon';

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClick} style={styles.button}>
      <WhatsAppIcon />
    </button>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
};

export default WhatsAppButton;