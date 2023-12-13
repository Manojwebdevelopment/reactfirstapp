import { Route,Routes} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Service from "./component/Service";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/service" Component={Service}/>
      <Route exact path="/sontact" Component={Contact}/>
      <Route exact path="/about" Component={About}/>
      {/* <Route Component={Error}/> */}
    </Routes>
    </>
  );
}

export default App;
