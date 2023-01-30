import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Job from "./components/Job/Job";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div className="app">
      <Navbar />
      <Job />
      <Footer />
    </div>
  );
}

export default App;
