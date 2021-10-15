import React from 'react';
import styles from './App.module.css'
function Display({Counter}) {
    return (
        <div className={styles.disp}>
            <h1>{Counter}</h1>
        </div>
    );
}

export default Display;