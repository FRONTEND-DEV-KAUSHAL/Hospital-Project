import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./container/home/Home";
import { Route, Switch } from 'react-router-dom'
import Department from "./container/departments/Department";


function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path={'/'} exact component={Home}></Route>
      <Route path={'/Departments'} exact component={Department}></Route>
    </Switch>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;
''