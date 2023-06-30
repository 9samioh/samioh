import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Art from "./pages/Art/Art";
import Contact from "./pages/Contact/Contact";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme";
import Bsc from "./pages/Work/Projects/Bsc/Bsc";
import ScrollToTop from "./components/ScrollToTop";
import Cadence from "./pages/Work/Projects/Cadence/Cadence";
import Xkeeper from "./pages/Work/Projects/Xkeeper/Xkeeper";
import Omega from "./pages/Work/Projects/Omega/Omega";
import Buildabear from "./pages/Work/Projects/Buildabear/Buildabear";
import Findyourzen from "./pages/Work/Projects/Findyourzen/Findyourzen";
import Nbjc from "./pages/Work/Projects/Nbjc/Nbjc";
import Bloom from "./pages/Work/Projects/Bloom/Bloom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/art" element={<Art />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bsc" element={<Bsc />} />
            <Route path="/cadence" element={<Cadence />} />
            <Route path="/xkeeper" element={<Xkeeper />} />
            <Route path="/omega" element={<Omega />} />
            <Route path="/buildabear" element={<Buildabear />} />
            <Route path="/findyourzen" element={<Findyourzen />} />
            <Route path="/nbjc" element={<Nbjc />} />
            <Route path="/bloom" element={<Bloom />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
