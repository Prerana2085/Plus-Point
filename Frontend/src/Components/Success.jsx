import React from 'react';

const Success = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Payment Successful!</h1>
            <p style={styles.message}>
                Thank you for your payment. Your transaction has been successfully processed.
            </p>
            <button style={styles.button} onClick={() => window.location.href = '/'}>
                Go to Home
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '20px',
        backgroundColor: '#F5F5F5',
    },
    title: {
        color: '#28a745',
        fontSize: '2.5rem',
        marginBottom: '20px',
    },
    message: {
        fontSize: '1.2rem',
        textAlign: 'center',
        marginBottom: '30px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#28a745',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Success;