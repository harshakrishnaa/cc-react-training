import React from 'react';
import styles from './Layout.module.css';   

function Footer(props) {
    return (
        <div className={styles.footer}>
        <footer>
          <p>&#169; 2021-2022 HTML Layout</p>
        </footer>
        </div>
    );
}

export default Footer;