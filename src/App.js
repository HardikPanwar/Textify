import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar title="Textify"  />
    <div className="container my-3" >
    <Form heading="Enter your text to analyze"/>
    </div>
    </>
  );
}

export default App;
