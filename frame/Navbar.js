import styles from './Layout.module.css'; 
function Navbar(props) {
    return (
            <nav className={styles.nav}>
            <a href="layout.html" target="_blank">Home</a>
            <a href="google.com" target="_blank">Google</a>
            <a href="youtube.com" target="_blank">YouTube</a>
            
            </nav>
    );
}

export default Navbar;