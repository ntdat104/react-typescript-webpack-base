import React from 'react';
import classNames from 'classnames';
import './_global.scss';

interface Props {
  children: React.ReactNode;
}

const GlobalStyles: React.FC<Props> = ({ children }): JSX.Element => {
  const [isDarkMode] = React.useState<boolean>(false);

  return (
    <div
      className={classNames({
        'dark-mode': isDarkMode,
        'light-mode': !isDarkMode,
      })}
    >
      {children}
    </div>
  );
};

export default GlobalStyles;
