import { NavLink } from 'react-router-dom';
import styles from './sidebar.module.css';

type NavItemProps = {
    link: string;
    label: string;
}

export function NavItem({ link, label }: NavItemProps) {
    return (
        <li className="styles.item">
            <NavLink
            to={link}
            className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}
            >
                <span className={styles.label}>{label}</span>    
            </NavLink>
        </li>
    )
}