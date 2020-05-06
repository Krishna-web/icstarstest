import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './login1.css';

import Login1 from './login1';
import home from  './home';
 import forgot from  './forgot';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
   <Router>
     <Switch>
       <Route path="/" component={Login1} exact/>
       <Route path="/forgot" component={forgot} />
     </Switch>
   </Router>
    {/* <Login1 /> */}

  </React.StrictMode>,
  document.getElementById('root')
);


  



        
     

