import styles from './styles.module.scss'
import logo from '../../assets/logo.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" />
            <div className={styles.appName}>
                <span>to</span>
                <span>do</span>
            </div>
        </header>
    )
}