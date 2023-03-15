import { createContext,useState } from 'react';
import './App.css';
// import MarkdownRenderer from './components/pages/markdownRenderer';
import Header from './components/common/header';
import Post from './components/pages/post';

//create context
export const ThemeContext = createContext();

function App() {
  const [isDark,setIsDark] = useState(true);
  const value = {
    isDark, setIsDark
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={value}>
        <Header/>
        <Post/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
