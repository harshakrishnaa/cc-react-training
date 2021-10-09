import styles from './Layout.module.css'; 
function Navbar(props) {
    return (
            <nav className={styles.nav}>
            <a href="layout.html" target="_blank">Home</a>
            <a href="youtube.com" target="_blank">youtube</a>
            <a href="google.com" target="_blank">google</a>
            
            </nav>
    );
}

export default Navbar;