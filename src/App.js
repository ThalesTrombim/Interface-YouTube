import { ThemeProvider } from "styled-components";
import Header from "./components/header";
import Main from "./components/Main";
import SideBar from './components/SideBar'
import GloBalStyle from './Styles/Global';

import dark from './Styles/themes/dark';
import light from './Styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <div>
        <Header />
        <SideBar />
        <Main />
        <GloBalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
