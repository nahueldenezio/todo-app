import TodoList from './pages/TodoList';
import Login from './pages/Login';
import Search from './pages/Search';
import Home from './pages/Home';
import Page404 from './pages/404';
import {Router} from './Router';
import {Route} from './Route';
import './App.css';

const appRoutes = [
  {
    path: '/search/":query',
    Component: Search
  }
]

function App() {
  
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path = '/' Component={Home} />
        <Route path = '/login' Component={Login} />
        <Route path = '/todo' Component ={TodoList} />
      </Router>
    </main>
  );
}

export default App;
