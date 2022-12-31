import styles from "./App.module.scss";
import Header from "./containers/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Header />} />
          <Route path="/contact" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
