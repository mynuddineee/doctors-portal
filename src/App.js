
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Appointment from './pages/Appointment/Appointment';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute exact path="/appointment">
              <Appointment />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
              </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
