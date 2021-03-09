import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/header";
import Main from "./components/Main";
import SideBar from './components/SideBar'
import GloBalStyle from './Styles/Global';

import dark from './Styles/themes/dark';
import light from './Styles/themes/light';

function App() {
  const [ theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light); 
  }
  
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header toggleTheme ={toggleTheme} />
        <SideBar />
        <Main />
        <GloBalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
