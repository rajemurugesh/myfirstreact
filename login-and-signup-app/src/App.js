import "./App.css";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Individualinfo from "./components/individualinfo/individualinfo";
import Clientinfo from "./components/clientinfo/clientinfo";
import Search from "./components/search/search";
import Grid from "./components/grid/grid";

function App() {
  const [user, setLoginUser] = useState({});

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* {
              user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
            } */}
            { 
               user && user._id ? <Homepage updateUser={updateUser} /> : <Login updateUser={updateUser}/>
            }
            
          </Route>
          <Route path="/login">
            {/* <Login setLoginUser={setLoginUser} /> */}
            <Login updateUser={updateUser} />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/individualinfo">
            <Individualinfo />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/new">
            <Individualinfo name='New -' />
          </Route>
          <Route path="/update">
            <Individualinfo name='Update -' />
          </Route>
          <Route path="/delete">
            <Individualinfo name='Delete -' />
          </Route>
          <Route path="/clientinfo">
            <Clientinfo />
          </Route>
          <Router path="/grid">
            <Grid />
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
