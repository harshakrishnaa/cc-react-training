import React from 'react';
import styles from './App.module.css'

function Button({onClick,children}) {
    return (
            <div >
                <button onClick={onClick} className={styles.button}>{children}</button>
            </div>
            );
}

export default Button;