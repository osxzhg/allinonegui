import React from 'react';
import { Component } from 'react';
import Cookies from 'js-cookie';
import {AuthConnect} from './AuthWrapper'

class ProfilePage extends Component {
  // constructor(props){
  //   super(props);
  //   console.log(this.props);
  // }
    showMessage = () => {
      alert("Followed " + this.props.user);
    };
  
    handleClick = () => {
      setTimeout(this.showMessage, 3000);
    };
    getAllCommands = async () => {
  
      try {
          let headers = new Headers();
          const commandToken=Cookies.get("commandToken");
  
          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');
          headers.append('Authorization', `Bearer ${commandToken}`);
          // headers.append('Origin','http://localhost:3000');
      
          const requestOptions = {
              mode: 'cors',
              method: 'GET',
              headers: headers,
          };
          const response = await fetch('http://localhost:5000/api/commands', requestOptions);
          const responseBody = await response.json();
        return true;
      } catch (error) {
      //   Notification.displayErrorMessage(<FormattedMessage id="account.notifications.errors.loginFailure" />);
      console.log("login error");
  
        return false;
      }
    };
    getCommandById = async (id) => {
  
      try {
          let headers = new Headers();
          const commandToken=Cookies.get("commandToken");
  
          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');
          headers.append('Authorization', `Bearer ${commandToken}`);
          // headers.append('Origin','http://localhost:3000');
      
          const requestOptions = {
              //mode: 'cors',
              method: 'GET',
              headers: headers,
          };
          const response = await fetch('/api/commands/'+id, requestOptions);
          const responseBody = await response.json();
          console.log(responseBody.howto);
        return true;
      } catch (error) {
      //   Notification.displayErrorMessage(<FormattedMessage id="account.notifications.errors.loginFailure" />);
      console.log("login error");
  
        return false;
      }
    };
  
  
    render() {
      return(
      <div>
      <button onClick={()=>this.getAllCommands()}>Get all commands</button>
      <button onClick={()=>this.getCommandById(1)}>Get commands by id</button>
      <button type="text" onClick={()=>this.props.sendLogin("dd","ddd")}> sign in</button>
      </div>)
    }
  }

  export default AuthConnect(ProfilePage);