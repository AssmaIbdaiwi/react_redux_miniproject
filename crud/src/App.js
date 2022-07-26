import React,{Component} from 'react';
import Books from './containers/Books';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateBook from './containers/CreateBook';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Nav from './components/Nav';


class App extends Component{
constructor (props){
  super(props);

  this.state ={
    pathname: '',
  };
  this.notifyPathname = this.notifyPathname.bind(this);

}
notifyPathname(pathname){
  this.setState({
    pathname:pathname,
  });
}

render() {
return (
  <Router>
    <div className="App">
      <Nav notifyPathname={this.notifyPathname}
      pathname={this.state.path}/>
      <Routes>
        <Route path="/" exact element={<Books />} />
        <Route path="/create" exact element={<CreateBook />} />
        <Route path="/edit/:id" exact element={<CreateBook />} />
      </Routes>
    </div>
  </Router>
);
  
}
}
export default App;
