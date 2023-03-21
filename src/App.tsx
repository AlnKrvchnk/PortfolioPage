import React from 'react';
import Toggle from './components/atoms/Toggle/Toggle';
import { ThemeContext,themes } from './contexts/ThemeContexts';

function App() {
  return (
    <ThemeContext.Consumer>
    {({ theme, setTheme }) => (
      <Toggle
        onChange={() => {
          if (theme === themes.light)setTheme && setTheme(themes.dark)
          if (theme === themes.dark)setTheme && setTheme(themes.light)
        }}
        value={theme === themes.dark}
      />
    )}
  </ThemeContext.Consumer>
  );
}

export default App;
