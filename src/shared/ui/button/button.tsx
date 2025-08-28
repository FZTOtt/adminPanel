import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
}

export function Button ({children, variant = 'primary', size = 'md', className = '', ...props}: ButtonProps) {
    
    const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`.trim()
    return (
        <Button className={buttonClass} {...props}>
            {children}
        </Button>
    )
} 