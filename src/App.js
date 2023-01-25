import { render } from "react-dom";
import { StrictMode, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import './App.css';


const Details = lazy(() => import ("./Details"));
const SearchParams = lazy(() => import ("./SearchParams"));




const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
      <Suspense fallback={<h1>loading, get a job you motherFucker</h1>}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
        </Suspense>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;

//render(<App />, document.getElementById("root"));
