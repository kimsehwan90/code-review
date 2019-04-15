import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, NavLink,Switch } from "react-router-dom";
import "./App.css";


const Links =() => (
    <nav>
        <Link to="/">home</Link>&nbsp;
        <Link to="/menu">menu</Link>
    </nav>
);

const Home =() => <h1>Home</h1>;
const Menu = () => (
    <nav>
        <h2>MENU</h2>
        <Link to="/menu/food">food</Link>&nbsp;
        <Link to="/menu/drink">drink</Link>&nbsp;
        <Link to="/menu/Sides">Sides</Link>
        <Route path="/:page?/:subpage?" 
            render ={({match}) => (
                <h1>{match.params.subpage}</h1>
            )}
            />
    </nav>
);

const App = () => (
    <Router>
        <div>
            <Links />
            <Route exact path="/" component ={Home} />
            <Route path="/menu" component={Menu}/>
        </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById("root"));
