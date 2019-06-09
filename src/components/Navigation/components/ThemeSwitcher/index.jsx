import React from 'react';
import useDarkMode from '~src/hooks/useDarkMode';
import { ReactComponent as Img } from '~src/assets/images/theme-switcher.svg';

import './styles.css';

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <label className="check" htmlFor="dark-theme-switcher">
      <input
        className="check__input"
        id="dark-theme-switcher"
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        aria-label="Сменить тему"
      />
      <Img className="check__image" />
    </label>
  );
}

export default ThemeSwitcher;
