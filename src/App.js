import { Switch, Route } from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (
    <div className="bg-indigo-100 h-screen">
      <h1>Navbar</h1>
      <Switch>
        <Route exact path="/" >
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
