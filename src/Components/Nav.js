import React from "react";
import{Link} from 'react-router-dom'
import"./Nav.css";
import { BrowserRouter,Router,Route } from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return<>
        <ul className="head">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <li><Link to='/'> Basic Detail Page</Link></li>
            <li><Link to='/topic_page'>Topic Selection Page</Link></li>
            <li><Link to='/question_page'>Question Display Page</Link></li>
        </ul>
      <BrowserRouter>
      <Router>
            <Route path="/">   Basic Detail Page   </Route>
            <Route path="/topic_page">   Basic Detail Page   </Route>
            <Route path="/question_page">   Basic Detail Page   </Route>
        </Router>
        </BrowserRouter>      
          </>
    }

}
export default Nav