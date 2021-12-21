import React from 'react';
import './button.css';

type ButtonProps = {
  label: string,
  theme?: 'primary' | 'light' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark',
  size?: 'sm' | 'md' | 'lg',
  rounded?: boolean,
  withArrow?: boolean,
  onClick?: () => void,
}

const Button: React.VFC<ButtonProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  size = 'md', label, onClick = () => {}, theme = 'primary', rounded = false, withArrow = false,
}) => {
  let classes = 'btn ';
  classes += `btn--${size} `;
  classes += `btn--${theme} `;
  classes += rounded ? 'btn--rounded ' : '';
  classes += withArrow ? 'btn--arrow-right ' : '';
  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
