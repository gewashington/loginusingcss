import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="form">
        <form>
          <h2>Sign In</h2>
            <div className="input-box">
            <i class="fa fa-user" aria-hidden="true"></i>              
            <input type="text" name="" placeholder="Username" required />
            </div>
            <div className="input-box">
            <i class="fa fa-unlock-alt" aria-hidden="true"></i>
            <input type="password" name="" placeholder="Password" required />
            </div>
            <div className="input-box">
              <input type="submit" name="" value="Login" />
            </div>
            <a href="#">Forget Password?</a>
        </form>
      </div>
    );
  }
}

export default App;
