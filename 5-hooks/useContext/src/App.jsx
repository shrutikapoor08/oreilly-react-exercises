import React, { useState, createContext, useContext } from "react";
import "./styles.css";

const ThemeContext = createContext(null);

const Button = ({ children, onClick }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const className = "button-" + theme;
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app theme-${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Button>Use {theme === "dark" ? "light" : "dark"} mode</Button>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;

// import React, { useState, createContext, useContext } from "react";

// const ThemeContext = createContext(null);

// const useTheme = () => {
//   const [theme, setTheme] = useState("light");
//   return { theme, setTheme };
// };

// const Button = ({ children }) => {
//   const { theme, setTheme } = useContext(ThemeContext);

//   const handleClick = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   const className = "button-" + theme;
//   return (
//     <button onClick={handleClick} className={className}>
//       {children}
//     </button>
//   );
// };

// const App = () => {
//   const { theme } = useTheme();

//   return (
//     <div className={`app theme-${theme}`}>
//       <ThemeContext.Provider value={useTheme()}>
//         <Button>Use {theme === "dark" ? "light" : "dark"} mode</Button>
//       </ThemeContext.Provider>
//     </div>
//   );
// };

// export default App;
