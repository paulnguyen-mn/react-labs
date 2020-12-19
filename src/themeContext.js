import React from 'react';

export const themes = {
  light: {
    name: 'light',
    primaryColor: 'goldenrod',
    secondaryColor: 'black',
  },

  dark: {
    name: 'dark',
    primaryColor: 'black',
    secondaryColor: 'f',
  },
};
const ThemeContext = React.createContext(themes.light);
export default ThemeContext;
