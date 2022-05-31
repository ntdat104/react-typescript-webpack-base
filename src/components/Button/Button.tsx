import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<Props> = (props): JSX.Element => {
  const { children, className, ...rest } = props;

  return (
    <button className={cx('wrapper', className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
