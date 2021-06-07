import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "../Pages/Home";
import ProductClickPage from "../Pages/ProductClickPage"

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/product-page" component={ProductClickPage} />
    </Router>
  );
}

export default App;
