import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AutorBox from './Autor';
import LivroBox from './Livro';
import './index.css';
import { BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';



ReactDOM.render(
  (<Router history={browserHistory}>
    <div>
        <Route exact path="/" component={App}/>
        <Route path="/autor" component={AutorBox}/>
        <Route path="/livro" component={LivroBox}/>
    </div>
  </Router>),
  document.getElementById('root')
);
