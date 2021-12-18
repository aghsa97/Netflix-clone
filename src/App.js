import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes"
import { Home } from "./pages/index";


function App() {
  return (
    <Router>
        <Routes>
          <Route  path={ROUTES.HOME} exact element={<Home/>} />
        </Routes> 
    </Router>
  );
}

export default App;
