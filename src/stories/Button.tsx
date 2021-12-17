import React from 'react';
import './button.css';

type ButtonProps = {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: React.VFC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
    >
      {label}
    </button>
  );
};
