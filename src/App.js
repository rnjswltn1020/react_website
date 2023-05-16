//common

import { Route, Router, Switch } from 'react-router-dom';
import Main from './pages/main/Main';
import Footer from './pages/common/Footer';
import Header from './pages/common/Header';
import './scss/style.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/" render={() => <Header type="sub" />} />
      </Switch>
      <Footer />
    </Router>
  );
}
