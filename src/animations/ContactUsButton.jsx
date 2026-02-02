'use client';

import { forwardRef } from 'react';
import './ContactUsButton.scss';

const Button = forwardRef(({
    children,
    text,
    onClick,
    href,
    type = 'button',
    variant = 'primary',
    backgroundColor,
    hoverBackgroundColor,
    textColor = '#ffffff',
    disabled = false,
    fullWidth = false,
    showArrow = true,
    arrowPosition = 'right',
    className = '',
    target,
    rel,
    ...rest
}, ref) => {
    // Custom colors or variant-based colors
    const getVariantStyles = () => {
        if (backgroundColor) {
            return {
                backgroundColor,
                '--button-hover-bg': hoverBackgroundColor || backgroundColor,
                color: textColor,
            };
        }

        // Preset variants
        const variants = {
            primary: {
                backgroundColor: '#5a2c2c',
                '--button-hover-bg': '#3a1c1c',
                color: '#ffffff',
            },
            secondary: {
                backgroundColor: '#2c2c2c',
                '--button-hover-bg': '#1a1a1a',
                color: '#ffffff',
            },
            accent: {
                backgroundColor: '#d4af37',
                '--button-hover-bg': '#b8941f',
                color: '#1a1a1a',
            },
            outline: {
                backgroundColor: 'transparent',
                '--button-hover-bg': 'rgba(90, 44, 44, 0.1)',
                color: '#5a2c2c',
                border: '2px solid #5a2c2c',
            },
            dark: {
                backgroundColor: '#1a1a1a',
                '--button-hover-bg': '#000000',
                color: '#ffffff',
            },
            light: {
                backgroundColor: '#ffffff',
                '--button-hover-bg': '#f5f5f5',
                color: '#2c2c2c',
                border: '2px solid #e0e0e0',
            },
        };

        return variants[variant] || variants.primary;
    };

    const buttonClasses = [
        'custom-button',
        `custom-button--${variant}`,
        fullWidth ? 'custom-button--full-width' : '',
        disabled ? 'custom-button--disabled' : '',
        showArrow ? `custom-button--with-arrow-${arrowPosition}` : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const buttonContent = (
        <>
            {showArrow && arrowPosition === 'left' && (
                <svg
                    className="custom-button__arrow custom-button__arrow--left"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16 10H4M4 10L10 16M4 10L10 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            <span className="custom-button__text">{children || text}</span>

            {showArrow && arrowPosition === 'right' && (
                <svg
                    className="custom-button__arrow custom-button__arrow--right"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4 10H16M16 10L10 4M16 10L10 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </>
    );

    const commonProps = {
        className: buttonClasses,
        style: getVariantStyles(),
        disabled,
        ref,
        ...rest,
    };

    // Render as link if href is provided
    if (href) {
        return (
            <a
                {...commonProps}
                href={disabled ? undefined : href}
                onClick={disabled ? (e) => e.preventDefault() : onClick}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : rel}
            >
                {buttonContent}
            </a>
        );
    }

    return (
        <button
            {...commonProps}
            type={type}
            onClick={disabled ? undefined : onClick}
        >
            {buttonContent}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;