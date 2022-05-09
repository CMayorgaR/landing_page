import './App.css';
import Navbar from "./Navbar"
import Jumbotron from './Jumbotron';
import Cartas from "./Cartas";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br></br>
      <Jumbotron />
      <br></br>
      <Cartas />
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
