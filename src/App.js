import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
//import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h3>
          ReactJS Crud
        </h3>

        <nav>
          <NavLink to="/Create">
            Create
          </NavLink>
        </nav>
        <nav>
          <NavLink to="/Read">
            Read
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" component={App}></Route>
          <Route path="Create" element={<Create />}></Route>
          <Route path="/Create" component={Create}></Route>
          <Route path="Read" element={<Read />}></Route>
          <Route path="/Read" component={Read}></Route>
          <Route path="Update" element={<Update />}></Route>
          <Route path="/Update" component={Update}></Route>
        </Routes>
      </div>
    </BrowserRouter>

    // <BrowserRouter>
    //   <div className="main">
    //     <h2 className="main-header">React Crud Operations</h2>
    //     <Routes>
    //       <Route exact path="/" component={<App />} />
    //       <Route path='/Create' component={Create} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>

    //   <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<App />} />
    //     <Route exact path='/Create' component={Create} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
