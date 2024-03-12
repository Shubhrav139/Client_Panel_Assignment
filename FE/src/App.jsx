import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
