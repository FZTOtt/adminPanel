import { NavItem } from './nav-item';
import styles from './sidebar.module.css'

export function SideBar() {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.list}>
                <NavItem link='/users' label='Пользователи'/>
                <NavItem link='/methods' label='Методы'/>
                <NavItem link='/trans' label='Транзакции'/>
                <NavItem link='/export' label='Экспорт'/>
                <NavItem link='/course' label='Курс'/>
            </ul>
        </nav>
    )
}

