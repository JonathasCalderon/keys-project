import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="">
      <Navbar />
      <Switch>
        <Route exact path="/" >
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
